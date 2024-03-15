import TabsFeatures from "@/components/(guest)/Tabs/TabsFeatures.jsx";

export default function WorkflowFeaturesSection() {
  return (
      <section id="features">
        <div className="flex flex-col items-center h-[800px] px-28">
          <p className="font-bold text-[50px]">Everything you need for any workflow</p>
          <p className="text-gray-400 text-[17px] mt-5">Easily build your ideal workflow with Team App building block.</p>
          <div className="mt-12 w-full">
            <TabsFeatures/>
          </div>
        </div>
      </section>
  )
}
