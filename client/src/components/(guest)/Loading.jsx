import {Hourglass} from "react-loader-spinner";

export default function Loading() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={['#306cce', '#72a1ed']}
        />
        <p className="mt-5 text-[20px] tracking-wide text-white">Loading....</p>
      </div>
    </>
  )
}
