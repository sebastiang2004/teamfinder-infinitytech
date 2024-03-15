import Layout from "@/pages/(admin)/layout.jsx";
import Modal from "@/components/Modal.jsx";
import DepartmentForm from "@/components/(admin)/Form/DepartmentForm.jsx";
import DepartmentCard from "@/components/(admin)/Card/DepartmentCard.jsx";
import {InputAnimated} from "@/components/ui/input-animated.jsx";
import {IoGrid} from "react-icons/io5";
import {MdMenu} from "react-icons/md";
import {useState} from "react";

export default function Departments() {

  const [activeGrid, setActiveGrid] = useState(false);

  return (
    <Layout>
      <div className="flex justify-between">
        <Modal title="Create a department" subtitle="Add a department" formElement={<DepartmentForm/>}/>
        <InputAnimated className="w-96" placeholder="Search for a department...."/>
        <div className="flex items-center gap-3">
          <IoGrid
            onClick={() => setActiveGrid(false)}
            className={`text-[20px] ${!activeGrid ? 'text-primary-purple' : ''}`}
          />
          <MdMenu
            onClick={() => setActiveGrid(true)}
            className={`text-[28px] ${activeGrid ? 'text-primary-purple' : ''}`}
          />
        </div>
      </div>
      <div className={`grid gap-5 mt-14 ${activeGrid ? 'grid-cols-1' : 'grid-cols-3'} "`}>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
      </div>
    </Layout>
  )
}
