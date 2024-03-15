import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog.jsx"
import {Button} from "@/components/ui/button.jsx";
import ProjectForm from "@/components/(admin)/Form/ProjectForm.jsx";

export default function ProjectModal() {

  return (
      <Dialog>
        <DialogTrigger>
          <Button className="bg-primary-purple dark:bg-white dark:text-black uppercase text-[12px] px-12">Create a Project</Button>
        </DialogTrigger>
        <DialogContent className="min-w-[900px] h-[500px] p-14">
          <DialogHeader>
            <DialogTitle className="uppercase text-[16px]">Add a project</DialogTitle>
            <DialogDescription>
              <ProjectForm/>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
  )
}
