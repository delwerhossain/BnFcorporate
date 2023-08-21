import Cit from "../components/Cit/Cit";
import ContactSection from "../components/ContactSection/ContactSection";
import HeroSection from "../components/HeroSection/HeroSection";
import ManageTeam from "../components/ManageTeam/ManageTeam";
import OurBrand from "../components/OurBrand/OurBrand";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <OurBrand />
        <Cit />
        <ManageTeam />
        <ContactSection/>
        {/* <LandingPage/> */}
      </main>
    </>
  );
}
