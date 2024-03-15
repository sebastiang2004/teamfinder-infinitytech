import RegisterForm from "@/components/(guest)/Form/RegisterForm.jsx";
import SparklesBackground from "@/components/(guest)/SparklesBackground.jsx";

export default function Register() {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-center px-32">
          <RegisterForm/>
        </div>
        <SparklesBackground/>
      </div>
    </>
  )
}
