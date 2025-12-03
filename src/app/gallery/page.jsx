"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function GalleryPage() {
  const [data, setData] = useState(null);
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://raffahitipeuw.github.io/portasset/datablog/landing/landing.json");
      const json = await res.json();
      setData(json);
    };

    const fetchMedia = async () => {
      const res = await fetch("https://raffahitipeuw.github.io/portasset/assets/media/media.json");
      const json = await res.json();
      setMedia(json);
    };

    fetchData();
    fetchMedia();
  }, []);

  if (!data || !media) return null;

  return (
    <div className="w-full max-w-[1200px] mx-auto mt-14 px-6 pb-20">
      <h1 className="text-3xl font-bold mb-10">All Gallery</h1>

      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {data.gallery.map((item, i) => {
          const imgSrc = media[item.image];
          return (
            <Link
              href={`/gallery/${item.slug}`}
              key={i}
              className="p-6 block hover:opacity-80 transition"
            >
              <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden">
                <img src={imgSrc} className="w-full h-full object-cover" alt={item.alt} />
              </div>

              <p className="text-[10px] text-[#555] dark:text-[#aaa] mt-3">{item.date}</p>
              <h2 className="font-bold text-lg dark:text-white mt-1">{item.title}</h2>
              <p className="text-sm text-[#333] dark:text-[#ccc] mt-1">{item.desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
