import {Boxes} from "@/components/(guest)/ui/background-boxes";
export function BackgroundBoxes() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none"/>
      <Boxes/>
      <h1 className="md:text-7xl text-3xl lg:text-4xl font-bold text-center text-white relative z-20">
      Welcome Back !
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        Discover the features that make our platform indispensable for your team's success.      </p>
    </div>
  );
}
