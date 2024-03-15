import Modal from "@/components/Modal.jsx";
import Layout from "@/pages/(admin)/layout.jsx";
import {InputAnimated} from "@/components/ui/input-animated.jsx";
import ProjectCard from "@/components/(admin)/Card/ProjectCard.jsx";

export default function Projects() {
  return (
    <Layout>
      <div className="flex gap-52">
        <Modal/>
        <InputAnimated type="email" placeholder="Search a project..." className="px-8 w-96"/>
      </div>
      <div className="grid grid-cols-4 gap-6 mt-20">
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
      </div>
    </Layout>

  )
}
