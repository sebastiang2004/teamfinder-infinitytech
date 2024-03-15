import {Button} from "@/components/(guest)/ui/button.jsx";
import {BiRightArrowAlt} from "react-icons/bi";
import {Link} from "react-router-dom";
import {AnimatedPin} from "@/components/(guest)/AnimatedPin.jsx";

export default function Banner() {
  return (
    <section id="banner"
      className="grid grid-cols-2 items-center ps-28 text-primary-blue dark:text-white bg-purple-50 dark:bg-primary-blue">
      <div>
        <p className="text-[36px] font-semibold">Get ready to make your day more productive</p>
        <p className="mt-4 text-gray-400 text-[15px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
          atque cum cumque debitis doloremque illo in iure iusto, nemo non officia placeat porro quis rerum temporibus
          totam ut vel! Assumenda , nemo non officia placeat porro quis rerum temporibus totam ut vel! Assumenda?</p>
        <Link to="/login">
          <Button className="py-6 px-20 mt-10">
            Start now
            <BiRightArrowAlt size={20}/>
          </Button>
        </Link>
      </div>
      <AnimatedPin/>
    </section>
  )
}
