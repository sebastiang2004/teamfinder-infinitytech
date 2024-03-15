import {InputAnimated} from "@/components/ui/input-animated.jsx";
import {Button} from "@/components/ui/button.jsx";

export default function RegisterEmployee() {
  return (
    <form className="grid grid-cols-2">
      <div>
        <p className="custom-label">Your name</p>
        <InputAnimated/>
        <p className="custom-label">Your name</p>
        <InputAnimated/>
        <p className="custom-label">Your name</p>
        <InputAnimated/>
        <Button className="w-full uppercase">Sign Up</Button>
      </div>
    </form>
  )
}
