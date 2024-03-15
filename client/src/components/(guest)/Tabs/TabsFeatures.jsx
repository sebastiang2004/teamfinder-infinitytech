import {Tabs, TabsContent, TabsList, TabsTrigger} from "@radix-ui/react-tabs";
import {SlDocs} from "react-icons/sl";
import {AiFillAppstore} from "react-icons/ai";
import {MdOutlineIntegrationInstructions, MdSpaceDashboard, MdViewStream} from "react-icons/md";
import {TbSettingsAutomation} from "react-icons/tb";
import {LuClipboardSignature} from "react-icons/lu";
import {ArrowRight} from "lucide-react";
import {useState} from "react";

export default function TabsFeatures() {

  const features = [
    {
    id: 1,
    name: "boards",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur deleniti doloribus eaque enim inventore maiores nostrum nulla odit ut! Alias, amet asperiores consectetur esse ex ipsam nam praesentium reprehenderit.",
    icon: <LuClipboardSignature/>,
    image: "https://i.ibb.co/Qv8JRFb/Kanban-move-work.gif",
    value: "boards"
  },
    {
      id: 2,
      name: "views",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur deleniti doloribus eaque enim inventore maiores nostrum nulla odit ut! Alias, amet asperiores consectetur esse ex ipsam nam praesentium reprehenderit.",
      icon: <MdViewStream/>,
      image: "https://i.ibb.co/bNHWj99/preview.png",
      value: "views"
    },
    {
      id: 3,
      name: "dashboard",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur deleniti doloribus eaque enim inventore maiores nostrum nulla odit ut! Alias, amet asperiores consectetur esse ex ipsam nam praesentium reprehenderit.",
      icon: <MdSpaceDashboard/>,
      image: "https://i.ibb.co/Sxvh388/9a188cf3dbdbcdd024bef1113e536597.jpg",
      value: "dashboard"
    },
    {
      id: 4,
      name: "integration",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur deleniti doloribus eaque enim inventore maiores nostrum nulla odit ut! Alias, amet asperiores consectetur esse ex ipsam nam praesentium reprehenderit.",
      icon: <MdOutlineIntegrationInstructions/>,
      image: "https://i.ibb.co/CBLbNH2/download.png",
      value: "integration"
    },
    {
      id: 5,
      name: "apps",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur deleniti doloribus eaque enim inventore maiores nostrum nulla odit ut! Alias, amet asperiores consectetur esse ex ipsam nam praesentium reprehenderit.",
      icon: <AiFillAppstore/>,
      image: "https://i.ibb.co/9wdbstn/preview.png",
      value: "apps"
    },
    {
      id: 6,
      name: "docs",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur deleniti doloribus eaque enim inventore maiores nostrum nulla odit ut! Alias, amet asperiores consectetur esse ex ipsam nam praesentium reprehenderit.",
      icon: <SlDocs/>,
      image: "https://i.ibb.co/CsjV71v/fogga-kanban.png",
      value: "docs"
    },
    {
      id: 7,
      name: "automations",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consequuntur deleniti doloribus eaque enim inventore maiores nostrum nulla odit ut! Alias, amet asperiores consectetur esse ex ipsam nam praesentium reprehenderit.",
      icon: <TbSettingsAutomation/>,
      image: "https://i.ibb.co/9wdbstn/preview.png",
      value: "automations"
    }
  ];

  const [activeItem, setActiveItem] = useState("");

  function handleItemClick(name) {
    setActiveItem(name);
  }


  return (
    <>
      <Tabs defaultValue="views" className="h-16 bg-primary-blue dark:bg-white rounded-md">
        <TabsList className="flex justify-center gap-5 h-full">
          {features.map(function (feature) {
            return (
              <TabsTrigger value={feature.value}
                           key={feature.id}
                           onClick={()=>handleItemClick(feature.value)}
                           className={`flex flex-col items-center justify-center rounded bg-white dark:text-black w-28 my-1 ${activeItem === feature.value ? 'border-2 border-primary-purple' : ''}`}>
                <div className="mt-1">
                  {feature.icon}
                </div>
                <p className="text-gray-400 text-[13px] uppercase mt-1">
                  {feature.name}
                </p>
              </TabsTrigger>
            )
          })}
        </TabsList>
        {features.map(function (feature) {
          return (
            <TabsContent value={feature.value}
                         key={feature.id}>
              <div className="grid grid-cols-2 gap-20 items-center justify-between w-full mt-24">
                <img src={feature?.image}
                     className="h-[400px] object-cover rounded-md mt-10" alt=""/>
                <div>
                  <div className="flex items-center text-primary-purple gap-2">
                    <div className="text-[23px]">
                      {feature.icon}
                    </div>
                    <p className="uppercase font-medium">{feature.name}</p>
                  </div>
                  <p className="text-gray-400 text-[15px] mt-6">{feature.description}</p>
                  <p className="flex items-center text-primary-purple text-[14px] gap-2 mt-4 cursor-pointer">Read
                    More <ArrowRight size={14}/>
                  </p>
                </div>
              </div>
            </TabsContent>
          )
        })}
      </Tabs>
    </>
  )
}
