import {InputAnimated} from "@/components/(guest)/ui/input-animated.jsx";
import {Button} from "@/components/(guest)/ui/button.jsx";
import {FcGoogle} from "react-icons/fc";
import {SiGithub} from "react-icons/si";
import {Link} from "react-router-dom";
import {FaLinkedin} from "react-icons/fa";

export default function LoginForm() {
    return (
        <form>
            <p className="text-[32px] font-medium tracking-wide">Sign In</p>
            <p className="text-[15px] text-gray-400 my-3">Please enter your credentials below to access your
                account.</p>
            <p className="custom-label">Email</p>
            <InputAnimated type="email" placeholder="email@gmail.com"/>
            <p className="custom-label">Password</p>
            <InputAnimated type="password"/>
            <Button type="submit" className="mt-8 py-6 uppercase w-full">Sign In</Button>
            <p className="custom-label text-center">Or Continue with:</p>
            <div className="flex justify-center gap-4 text-[40px] mt-4">
                <FcGoogle className="border dark:border-gray-300 p-2 rounded-full cursor-pointer"/>
                <SiGithub className="border dark:border-gray-300 p-2 rounded-full cursor-pointer"/>
              <div className="border dark:border-gray-300 rounded-full">
                  <FaLinkedin className="cursor-pointer p-2"/>
              </div>
            </div>
            <p className="custom-label text-center mt-20">Don't you have an account ?
                <span className="text-orange-500 font-medium mx-3 cursor-pointer">
           <Link to="/register">
                Sign Up
           </Link>
          </span>
            </p>
        </form>
    )
}

