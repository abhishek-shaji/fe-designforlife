import { Brands } from "@/partials/homepage/Brands";
import { Testimonials } from "@/partials/homepage/Testimonials";
import { HeroSection } from "@/partials/homepage/Hero";
import { Marquee } from "@/partials/homepage/Marquee";
import { Services } from "@/partials/homepage/Services";
import { Skills } from "@/partials/homepage/Skills";
import { StartNumbers } from "@/partials/homepage/StartNumbers";
import { Portfolio } from "@/partials/homepage/Portfolio";
import { Blogs } from "@/partials/homepage/Blogs";
import { ImgScale } from "@/partials/homepage/ImgScale";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <Services />
      <Skills />
      <StartNumbers />
      <Portfolio />
      <Testimonials />
      <Brands />
      <ImgScale />
      <Blogs />
    </>
  );
}
