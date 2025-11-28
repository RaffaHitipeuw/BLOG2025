"use client";
import Scrolltxt from "../../../public/assets/image/ScrollTextMarqueeImg.webp";
import Smoothtxt from "../../../public/assets/image/SmoothLenisScroll.webp";
import Trailtxt from "../../../public/assets/image/ImageMouseTrail.webp";
import Revealtxt from "../../../public/assets/image/ScrollTextReveal.webp";
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
          
          <div className="hidden lg:block sticky top-[180px] h-fit mr-12 -ml-20">
            <div className="flex flex-col text-[10px] text-[#6a6a6a]">
              <span className="font-helvetica mb-2 text-[#505050]">Gallery</span>
              <span className="text-[#7e7e7e]">lorem</span>
              <span className="text-[#7e7e7e]">lorem</span>
              <span className="text-[#7e7e7e]">lorem</span>
              <span className="text-[#7e7e7e]">lorem</span>
              <div className="mt-4"></div>
              <span className="text-[#7e7e7e]">ipsum</span>
              <span className="text-[#7e7e7e]">ipsum</span>
              <span className="text-[#7e7e7e]">ipsum</span>
            </div>
          </div>
          
          <div className="w-full">
            <div className="border-t border-[#515151] mb-3 w-full pl-0 md:pl-[1.05ch] lg:pl-[1.14ch]" />
            <p className="font-helvetica text-sm text-[#383838]">Gallery</p>
          </div>
          
        </div>


      <div className="w-full max-w-[1200px] mx-auto mt-8 grid gap-12 md:grid-cols-2 lg:grid-cols-3">

        <div className="p-6 rounded-xl">
          <img className="w-full h-[180px] md:h-[260px] rounded-xl object-cover" src={Scrolltxt} alt="Text Parallax Animation" />
          <p className="text-[10px] text-[#555] mt-3">November 27, 2025</p>
          <h2 className="font-helvetica font-bold text-lg mt-1">Scroll Text Marquee</h2>
          <p className="text-sm text-[#333] mt-1">Text Parallax Animation. Crafted for maximum visual impact…</p>
        </div>

        <div className="p-6 rounded-xl">
          <img className="w-full h-[180px] md:h-[260px] rounded-xl object-cover" src={Smoothtxt} alt="Smooth Lenis Scroll" />
          <p className="text-[10px] text-[#555] mt-3">November 27, 2025</p>
          <h2 className="font-helvetica font-bold text-lg mt-1">Smooth Lenis Scroll</h2>
          <p className="text-sm text-[#333] mt-1">Tired of parallax effects that feel janky and unsmooth…</p>
        </div>

        <div className="p-6 rounded-xl">
          <img className="w-full h-[180px] md:h-[260px] rounded-xl object-cover" src={Trailtxt} alt="Image Mouse Trail" />
          <p className="text-[10px] text-[#555] mt-3">November 27, 2025</p>
          <h2 className="font-helvetica font-bold text-lg mt-1">Image Mouse Trail</h2>
          <p className="text-sm text-[#333] mt-1">Make your cursor the main event…</p>
        </div>

        <div className="p-6 rounded-xl">
          <img className="w-full h-[180px] md:h-[260px] rounded-xl object-cover" src={Revealtxt} alt="Scroll Text Reveal" />
          <p className="text-[10px] text-[#555] mt-3">November 27, 2025</p>
          <h2 className="font-helvetica font-bold text-lg mt-1">Scroll Text Reveal</h2>
          <p className="text-sm text-[#333] mt-1">Bring your words to life on scroll…</p>
        </div>

      </div>

    </div>
  );
}
