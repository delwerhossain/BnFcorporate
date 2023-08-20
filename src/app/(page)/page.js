import HeroSection from "../components/HeroSection/HeroSection";
import MainBanner from "../components/MainBanner/MainBanner";
import OurBrand from "../components/OurBrand/OurBrand";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <MainBanner />
        <OurBrand/>
        {/* <LandingPage/> */}
      </main>
    </>
  );
}
