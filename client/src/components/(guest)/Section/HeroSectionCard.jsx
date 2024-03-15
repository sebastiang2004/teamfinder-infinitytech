import HeroCard from "@/components/(guest)/Card/HeroCard.jsx";

export default function HeroSectionCard() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex flex-col gap-10 mt-14">
          <HeroCard name="Platform Objective"
                    description="The Team Finder platform's main objective is to facilitate the team formation process for new projects."/>
          <HeroCard name="Key Features"
                    description="Users can create new projects in the platform, specifying details such as the technologies used, project duration, team size needed, and required roles."/>
        </div>
        <div className="mt-36 flex flex-col gap-10">
          <HeroCard name="Integration and User-Friendliness"
                    description="The platform offers an intuitive and user-friendly interface, making navigation and use easy for project managers and team members."/>
          <HeroCard name="Data Security and Privacy"
                    description="The Team Finder platform ensures the security of user data, including personal information and project details, through robust encryption and secure storage practices."/>
        </div>
      </div>
    </>
  )
}
