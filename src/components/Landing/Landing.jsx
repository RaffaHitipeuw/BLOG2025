"use client";
import Navbar from "./Navbar";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen w-full bg-[#D9D9D9] text-black px-6 py-4">

      <Navbar />
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

      <div className="relative w-full max-w-[1200px] mx-auto mt-12 flex">

        <div className="w-full">
          <div className="border-t border-[#515151] mb-3 w-full pl-0 md:pl-[1.05ch] lg:pl-[1.14ch]" />
          <p className="font-helvetica text-sm text-[#383838]">Gallery</p>
        </div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto mt-8 grid gap-12 md:grid-cols-2 lg:grid-cols-3">

        <div className="p-6 rounded-xl">
          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/assets/image/ScrollTextMarqueeImg.webp"
              alt="Text Parallax Animation"
            />
          </div>
          <p className="text-[10px] text-[#555] mt-3">November 27, 2025</p>
          <h2 className="font-helvetica font-bold text-lg mt-1">Scroll Text Marquee</h2>
          <p className="text-sm text-[#333] mt-1">Text Parallax Animation. Crafted for maximum visual impact…</p>
        </div>

        <div className="p-6 rounded-xl">
          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/assets/image/SmoothLenisScroll.webp"
              alt="Smooth Lenis Scroll"
            />
          </div>
          <p className="text-[10px] text-[#555] mt-3">November 27, 2025</p>
          <h2 className="font-helvetica font-bold text-lg mt-1">Smooth Lenis Scroll</h2>
          <p className="text-sm text-[#333] mt-1">Tired of parallax effects that feel janky and unsmooth…</p>
        </div>

        <div className="p-6 rounded-xl">
          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/assets/image/ImageMouseTrail.webp"
              alt="Image Mouse Trail"
            />
          </div>
          <p className="text-[10px] text-[#555] mt-3">November 27, 2025</p>
          <h2 className="font-helvetica font-bold text-lg mt-1">Image Mouse Trail</h2>
          <p className="text-sm text-[#333] mt-1">Make your cursor the main event…</p>
        </div>

        <div className="p-6 rounded-xl">
          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/assets/image/ScrollTextReveal.webp"
              alt="Scroll Text Reveal"
            />
          </div>
          <p className="text-[10px] text-[#555] mt-3">November 27, 2025</p>
          <h2 className="font-helvetica font-bold text-lg mt-1">Scroll Text Reveal</h2>
          <p className="text-sm text-[#333] mt-1">Bring your words to life on scroll…</p>
        </div>

      </div>


    </div>
  );
}
