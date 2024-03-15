import {InputAnimated} from "@/components/(guest)/ui/input-animated.jsx";
import {Button} from "@/components/(guest)/ui/button.jsx";
import {Link} from "react-router-dom";

export default function RegisterForm() {
  return (
    <form>
      <p className="text-[32px] font-medium tracking-wide">Sign Up</p>
      <p className="text-[15px] text-gray-400 my-3">Please enter your credentials below to access your
        account.
      </p>
      <p className="custom-label">Your name</p>
      <InputAnimated type="text" placeholder="John Doe"/>
      <p className="custom-label">Organization Name</p>
      <InputAnimated type="text" placeholder="Organization Name"/>
      <p className="custom-label">Address</p>
      <InputAnimated type="text" placeholder="Lost Creek Road"/>
      <p className="custom-label">Email</p>
      <InputAnimated type="email" placeholder="email@gmail.com"/>
      <p className="custom-label">Password</p>
      <InputAnimated type="password"/>
      <p className="custom-label">Confirm Password</p>
      <InputAnimated type="password"/>
      <Button type="submit" className="mt-8 py-6 uppercase w-full">Sign Up</Button>
      <p className="custom-label text-center mt-20">Already a member ?
        <span className="text-primary-purple font-medium mx-3 cursor-pointer">
            <Link to="/login">
                  Sign In
            </Link>
          </span>
      </p>
    </form>
  )
}


