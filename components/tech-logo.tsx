import Image from "next/image";

export function TechLogo({
  slug,
  className = "h-7 w-7",
}: {
  slug: string;
  className?: string;
}) {
  return (
    <Image
      src={`/logos/${slug}.svg`}
      alt=""
      width={32}
      height={32}
      unoptimized
      aria-hidden
      draggable={false}
      className={`${className} object-contain`}
    />
  );
}
