import HeroSection from "@/components/hero-section";
import Design from "@/components/design";
import BrandSlides from "@/components/brand-slides";
import Headers from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="max-w-[1440px] mx-auto min-h-screen xl:bg-[#F2F2F2] lg:bg-white">
      <Headers />
      <HeroSection />
      <Design />
      <BrandSlides />
      <Footer />
    </main>
  );
}
