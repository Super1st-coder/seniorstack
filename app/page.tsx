import { About } from "@/components/about";
import { Cta } from "@/components/cta";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Services } from "@/components/services";
import { Stack } from "@/components/stack";
import { Why } from "@/components/why";

export default function HomePage() {
  return (
    <>
      <main id="content">
        <Hero />
        <Services />
        <Why />
        <Process />
        <Stack />
        <About />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
