#!/usr/bin/env bash
# Runs ON THE VPS (called by .github/workflows/deploy.yml).
# Usage: deploy.sh <release-dir> <image-tag>
#
# Builds a new image from the uploaded release, rolls the Swarm service onto it
# with zero downtime (start-first) and rolls back automatically if the new
# container fails its healthcheck. On success the release becomes /opt/seniorstack.
set -euo pipefail

RELEASE="$1"
TAG="$2"
APP_DIR=/opt/seniorstack
IMAGE=seniorstack-app
SERVICE=seniorstack_app
KEEP_IMAGES=3

# Only one deploy at a time.
exec 9>/var/lock/seniorstack-deploy.lock
flock 9

echo "==> Building $IMAGE:$TAG"
docker build -t "$IMAGE:$TAG" -t "$IMAGE:latest" "$RELEASE"

echo "==> Rolling out $SERVICE"
docker service update \
  --detach=false \
  --quiet \
  --no-resolve-image \
  --image "$IMAGE:$TAG" \
  --update-order start-first \
  --update-failure-action rollback \
  --update-monitor 30s \
  --rollback-order start-first \
  "$SERVICE"

RUNNING=$(docker service inspect "$SERVICE" --format '{{.Spec.TaskTemplate.ContainerSpec.Image}}')
if [[ "$RUNNING" != "$IMAGE:$TAG"* ]]; then
  echo "!! Rollout failed: service is running $RUNNING (rolled back)" >&2
  docker service ps "$SERVICE" --no-trunc | head -5 >&2
  rm -rf "$RELEASE"
  exit 1
fi

echo "==> Updating $APP_DIR"
mkdir -p "$APP_DIR"
find "$APP_DIR" -mindepth 1 -delete
cp -a "$RELEASE/." "$APP_DIR/"
rm -rf "$RELEASE"

echo "==> Pruning old images (keeping $KEEP_IMAGES)"
docker images "$IMAGE" --format '{{.Tag}}' \
  | grep -v '^latest$' \
  | tail -n +$((KEEP_IMAGES + 1)) \
  | xargs -r -I{} docker rmi "$IMAGE:{}" >/dev/null 2>&1 || true
docker image prune -f >/dev/null

echo "==> Deployed $IMAGE:$TAG"
