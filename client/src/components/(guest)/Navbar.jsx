import Logo from "@/components/(guest)/Logo.jsx";
import Theme from "@/components/(guest)/Theme.jsx";
import {Button} from "@/components/(guest)/ui/button.jsx";
import {useState} from "react";
import {Link} from "react-router-dom";

export default function Navbar() {

  const [activeItem, setActiveItem] = useState("");
  function handleItemClick(name) {
    setActiveItem(name);
  }

  return (
    <div className="w-full flex items-center justify-between text-[14px] h-16 px-28">
      <Logo/>
      <ul className="flex items-center cursor-pointer gap-6">
        <a href={"#home"}>
          <li onClick={() => handleItemClick("hero")}
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
      </ul>
      <div className="flex items-center gap-3">
        <Theme/>
        <Link to="/register">
          <Button variant="ghost">Register</Button>
        </Link>
        <Link to="/login">
          <Button className="px-10">Login</Button>
        </Link>
      </div>
    </div>
  )
}
