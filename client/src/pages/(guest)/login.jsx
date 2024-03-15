import LoginForm from "@/components/(guest)/Form/LoginForm.jsx";
import {BackgroundBoxes} from "@/components/(guest)/BackgroundBoxes.jsx";
import {useEffect, useState} from "react";
import Loading from "@/components/(guest)/Loading.jsx";


export default function Login() {

  const [backgroundLoaded, setBackgroundLoaded] = useState(false);

  useEffect(() => {
    setBackgroundLoaded(true)
  }, []);


  return (
    <>
      <div className="grid grid-cols-2 min-h-screen">
        {backgroundLoaded ?
          <BackgroundBoxes/> :
          <div className="bg-gray-950">
            <Loading/>
          </div>
        }
        <div className="flex flex-col justify-center px-32">
          <LoginForm/>
        </div>
      </div>
    </>
  )
}
