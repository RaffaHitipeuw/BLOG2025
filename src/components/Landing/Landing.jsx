"use client";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#D9D9D9] text-black px-6 py-4">

      {/* TOP LABEL */}
      <div className="flex items-center gap-2 text-[10px] tracking-wide text-[#555] mb-10">
        <div className="relative w-4 h-px bg-[#555]">
          <span className="absolute w-4 h-px bg-[#555] top-[3px]" />
          <span className="absolute w-4 h-px bg-[#555] top-[-3px]" />
        </div>
        <span>BLOG</span>
      </div>

      <div className="w-full max-w-[1200px] mx-auto">

        <div className="flex md:hidden justify-between w-full">
          <h1 className="font-helvetica font-bold leading-none text-[clamp(34px,12vw,80px)]">
            HOW
          </h1>

          <div className="flex flex-col leading-none text-right">
            <h1 className="font-helvetica font-bold text-[clamp(34px,12vw,80px)]">THIS</h1>
            <h1 className="font-helvetica font-bold mt-2 text-[clamp(34px,12vw,80px)]">WORKS</h1>
          </div>
        </div>


        <div className="hidden md:flex lg:hidden justify-between w-full">
          <h1 className="font-helvetica font-bold leading-none text-[clamp(60px,10vw,130px)]">
            HOW
          </h1>

          <div className="flex flex-col leading-none text-right">
            <h1 className="font-helvetica font-bold text-[clamp(60px,10vw,130px)]">THIS</h1>
            <h1 className="font-helvetica font-bold text-[clamp(60px,10vw,130px)]">WORKS</h1>
          </div>
        </div>


        <div className="hidden lg:flex justify-between w-full">
          <h1 className="font-helvetica font-bold leading-none text-[clamp(120px,12vw,260px)]">
            HOW
          </h1>

          <div className="flex flex-col leading-none text-right">
            <h1 className="font-helvetica text-[clamp(120px,12vw,260px)]">THIS</h1>
            <h1 className="font-helvetica text-[clamp(120px,12vw,260px)]">WORKS</h1>
          </div>
        </div>

      </div>

      <div className="mt-12 w-full">
        <div className="w-full max-w-[1200px] mx-auto">


          <div
            className="
              border-t border-[#515151] mb-3
              w-full
              pl-0            /* Mobile start at H */
              md:pl-[1.05ch]  /* Tablet start at O */
              lg:pl-[1.14ch]  /* Desktop start at O (bigger text) */
            "
          />

          <p className="font-helvetica text-sm text-[#383838]">Gallery</p>
        </div>
      </div>

    </div>
  );
}
