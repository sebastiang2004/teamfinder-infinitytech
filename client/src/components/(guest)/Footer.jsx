import Logo from "@/components/(guest)/Logo.jsx";
import {ArrowUp} from "lucide-react";
import {useState} from "react";

export default function Footer() {

  const [activeItem, setActiveItem] = useState("");

  function handleItemClick(name) {
    setActiveItem(name);
  }

  return (
    <div className="h-32 flex flex-col justify-center px-28">
      <div className="flex justify-between">
        <Logo/>
        <ul className="flex items-center gap-5 font-normal text-[14px] cursor-pointer">
          <a href={"#hero"}>
            <li onClick={() => handleItemClick("home")}
                className={`${activeItem === 'home' ? 'active-item' : ''}`}>Home
            </li>
          </a>
          <a href={"#characteristics"}>
            <li onClick={() => handleItemClick("characteristics")}
                className={`${activeItem === 'characteristics' ? 'active-item' : ''}`}>Characteristics
            </li>
          </a>
          <a href={"#benefits"}>
            <li onClick={() => handleItemClick("benefits")}
                className={`${activeItem === 'benefits' ? 'active-item' : ''}`}>Our benefits
            </li>
          </a>
          <a href={"#features"}>
            <li onClick={() => handleItemClick("features")}
                className={`${activeItem === 'features' ? 'active-item' : ''}`}>Feature
            </li>
          </a>
          <a href={"#hero"}>
            <li className="flex items-center justify-center border border-gray-400 rounded-full w-8 h-8 animate-bounce">
              <ArrowUp/>
            </li>
          </a>
        </ul>
      </div>
    </div>
  )
}
