"use client";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Footer from "../Footer/Footer";

export default function LandingPage() {
  const [data, setData] = useState(null);
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const fetchLanding = async () => {
      try {
        const res = await fetch(
          "https://raffahitipeuw.github.io/portasset/datablog/landing/landing.json",
          { cache: "no-store" }
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Landing JSON error:", err);
      }
    };

    const fetchMedia = async () => {
      try {
        const res = await fetch(
          "https://raffahitipeuw.github.io/portasset/assets/media/media.json",
          { cache: "no-store" }
        );
        const json = await res.json();
        setMedia(json);
      } catch (err) {
        console.error("Media JSON error:", err);
      }
    };

    fetchLanding();
    fetchMedia();
  }, []);

  if (!data || !media) return null;

    return (
    <>
  <div className="relative min-h-screen w-full bg-[#D9D9D9] dark:bg-[#111] text-black dark:text-[#eee] px-6 py-4">

  <Navbar />

  <div className="w-full max-w-[1200px] mx-auto">

    <div className="flex md:hidden justify-between w-full">
      <h1 className="font-helvetica font-bold leading-none text-[clamp(34px,12vw,80px)]">
        {data.heading.left}
      </h1>
      <div className="flex flex-col leading-none text-right">
        {data.heading.right.map((txt, i) => (
          <h1
            key={i}
            className={`font-helvetica font-bold text-[clamp(34px,12vw,80px)] ${i === 1 ? "mt-2" : ""}`}
          >
            {txt}
          </h1>
        ))}
      </div>
    </div>

    <div className="hidden md:flex lg:hidden justify-between w-full">
      <h1 className="font-helvetica font-bold leading-none text-[clamp(60px,10vw,130px)]">
        {data.heading.left}
      </h1>
      <div className="flex flex-col leading-none text-right">
        {data.heading.right.map((txt, i) => (
          <h1 key={i} className="font-helvetica font-bold text-[clamp(60px,10vw,130px)]">
            {txt}
          </h1>
        ))}
      </div>
    </div>

    <div className="hidden lg:flex justify-between w-full">
      <h1 className="font-helvetica font-bold leading-none text-[clamp(120px,12vw,260px)]">
        {data.heading.left}
      </h1>
      <div className="flex flex-col leading-none text-right">
        {data.heading.right.map((txt, i) => (
          <h1 key={i} className="font-helvetica text-[clamp(120px,12vw,260px)]">
            {txt}
          </h1>
        ))}
      </div>
    </div>

  </div>

  <div className="relative w-full max-w-[1200px] mx-auto mt-12 flex">
    <div className="w-full">
      <div className="border-t border-[#515151] dark:border-[#444] mb-3 w-full pl-0 md:pl-[1.05ch] lg:pl-[1.14ch]" />
      <p className="font-helvetica text-sm text-[#383838] dark:text-[#bbb]">Gallery</p>
    </div>
  </div>

  <div className="w-full max-w-[1200px] mx-auto mt-8 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
    {data.gallery.map((item, i) => {
      const imgSrc = media[item.image];

      return (
        <div key={i} className="p-6">
          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={imgSrc}
              alt={item.alt}
            />
          </div>

          <p className="text-[10px] text-[#555] dark:text-[#aaa] mt-3">{item.date}</p>
          <h2 className="font-helvetica font-bold text-lg dark:text-white mt-1">{item.title}</h2>
          <p className="text-sm text-[#333] dark:text-[#ccc] mt-1">{item.desc}</p>
        </div>
      );
    })}
  </div>
</div>

<Footer />

    </>
  );
}
