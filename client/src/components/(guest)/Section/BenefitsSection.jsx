import {BenefitCard} from "@/components/(guest)/Card/BenefitCard.jsx";

export default function BenefitsSection() {

  const benefits = [
    {
      id: 1,
      title: "Efficient Team Management",
      description:
        "Our platform allows you to assemble project teams with ease, quickly identifying and selecting the right members with the necessary skills and experience.",
    },
    {
      id: 2,
      title: "Automatic Matchmaking",
      description:
        " Using advanced matching algorithms, our platform can automatically suggest the most suitable team members for your projects, based on criteria such as technical competencies, previous experience, and availability.",
    },
    {
      id: 3,
      title: "Access to Up-to-Date Information",
      description:
        "Stay informed with real-time insights into team members, their skills, availability, and past experience, empowering you to make informed decisions and enhance project management efficiency.",
    },
    {
      id: 4,
      title: "Time Saving",
      description:
        "Eliminate manual work and time wasted on manually searching and selecting the right team members. With our assistance, you can assemble teams quickly and efficiently.",
    },
    {
      id: 5,
      title: "Enhanced Decision Making",
      description:
        "With comprehensive insights into team composition and skill sets, our platform empowers project managers to make data-driven decisions, ensuring that project teams are equipped with the right expertise to tackle any challenge effectively.",
    },
    {
      id: 6,
      title: "Transparency and Collaboration",
      description:
        "Our platform fosters transparency and collaboration among team members, providing a centralized way to manage project information and team members, as well as efficient communication tools.",
    },
  ];

  return (
    <section id="benefits" className="w-full mx-auto px-28">
      <p className="text-center font-bold text-[40px]">All in <span
        className="text-primary-purple">one</span> platform</p>
      <BenefitCard items={benefits}/>
    </section>
  )
}
