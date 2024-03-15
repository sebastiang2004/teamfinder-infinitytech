import Banner from "@/components/(guest)/Banner.jsx";
import BenefitsSection from "@/components/(guest)/Section/BenefitsSection.jsx";
import Navbar from "@/components/(guest)/Navbar.jsx";
import Footer from "@/components/(guest)/Footer.jsx";
import HeroSection from "@/components/(guest)/Section/HeroSection.jsx";
import CharacteristicsSection from "@/components/(guest)/Section/CharacteristicsSection.jsx";
import WorkflowFeaturesSection from "@/components/(guest)/Section/WorkflowFeaturesSection.jsx";


export default function Home() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
      <div className="my-40">
        <CharacteristicsSection/>
      </div>
      <BenefitsSection/>
      <div className="mt-40">
        <WorkflowFeaturesSection/>
      </div>
      {/*<div className="mt-40">*/}
      {/*  <img src="https://i.ibb.co/sjFB0NM/Captura-de-ecran-din-2024-03-03-la-12-00-02.png" className="w-full"/>*/}
      {/*</div>*/}
      <div className="my-20">
        <Banner/>
      </div>
      <Footer/>
    </>
  );
}
