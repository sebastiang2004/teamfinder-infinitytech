import {MacbookScrollHero} from "@/components/(guest)/MacbookScrollHero.jsx";
import HeroSectionContent from "@/components/(guest)/HeroSectionContent.jsx";
import HeroSectionCard from "@/components/(guest)/Section/HeroSectionCard.jsx";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="grid grid-cols-[2fr_780px] ps-28 pe-10">
        <div className="mt-40">
          <HeroSectionContent/>
          <div className="mt-40">
            <HeroSectionCard/>
          </div>
        </div>
        <MacbookScrollHero/>
      </div>
    </section>
  )
}
