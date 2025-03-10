export default function Page() {
  return (
    <div 
      className="h-screen w-full flex flex-col items-center justify-center text-center bg-[#FEE2D4] text-white"
      style={{ 
        backgroundImage:"url(/flash.jpg)",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

<div className="absolute top-0 right-0 bottom-0 left-0 bg-gray-900 opacity-75"></div>

<div className="z-50 flex flex-col justify-center text-white w-full h-screen">
    <h1 className="text-5xl">We are <b>Almost</b> there!</h1>
    <p>Stay tuned for something amazing!!!</p>

    <div className="mt-10 mb-5 px-2">
        <div className="shadow w-full bg-white mt-2 max-w-2xl mx-auto rounded-full">
            <div className="rounded-full bg-indigo-600 text-xs leading-none text-center text-white py-1"
                style={{ width: "50%" }}>50%</div>
        </div>
    </div>
</div>
    </div>
  );
}
