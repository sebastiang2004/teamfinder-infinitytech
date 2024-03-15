import Layout from "@/pages/(admin)/layout.jsx";
import MembersTable from "@/components/(admin)/Table/MembersTable.jsx";
import Modal from "@/components/Modal.jsx";
import SignInURLForm from "@/components/(admin)/Form/SignInURLForm.jsx";

export default function Members() {
  return (
    <Layout>
      <p className="text-[20px]">Members</p>
      <div className="mt-5">
        <Modal title="Add a member" subtitle="Add a member" formElement={<SignInURLForm/>}/>
      </div>
      <div className="mt-10">
        <MembersTable/>
      </div>
    </Layout>
  )
}
