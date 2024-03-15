export default function EmployeeRegisterForm(){
  return(
    <form className="grid grid-cols-2 min-h-screen">
      <div className="flex flex-col justify-center px-32">
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