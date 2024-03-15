import {SparklesCore} from "@/components/(guest)/ui/sparkles.jsx";

export default function SparklesBackground() {
  return (
    <div
      className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <p className="md:text-7xl text-3xl lg:text-5xl font-bold text-center text-white relative z-20">
        Discover the <span className="text-primary-purple">power</span> of collaboration
      </p>
    </div>
  )
}
