"use client";
import { use, useEffect, useState } from "react";

export default function GalleryDetail(props) {
  const { slug } = use(props.params);

  const [data, setData] = useState(null);
  const [media, setMedia] = useState(null);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const resLanding = await fetch(
          "https://raffahitipeuw.github.io/portasset/datablog/landing/landing.json",
          { cache: "no-store" }
        );
        const jsonLanding = await resLanding.json();

        const resMedia = await fetch(
          "https://raffahitipeuw.github.io/portasset/assets/media/media.json",
          { cache: "no-store" }
        );
        const jsonMedia = await resMedia.json();

        setData(jsonLanding);
        setMedia(jsonMedia);

        const found = jsonLanding.gallery.find((g) => g.slug === slug);
        setItem(found || null);
      } catch (err) {
        console.error("Detail page error:", err);
      }
    };

    fetchAll();
  }, [slug]);

  if (!data || !media || !item) return null;

  const imgSrc = media[item.image];
  const videoSrc = item.video ? media[item.video] : null;

  return (
    <div className="min-h-screen w-full bg-[#D9D9D9] dark:bg-[#111] text-black dark:text-white py-20 px-6">

      <div className="max-w-[900px] mx-auto mb-24 font-helvetica">
        <h1 className="text-4xl mb-1">
          {item.title}
        </h1>

        <p className="text-sm opacity-60 mb-6">
          {item.date}
        </p>

        <p className="opacity-80 text-base max-w-2xl leading-relaxed">
          {item.desc}
        </p>
      </div>

      <div className="max-w-[1300px] mx-auto rounded-2xl p-10 mb-16">

        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain rounded-xl"
          />
        ) : (
          <img
            src={imgSrc}
            alt={item.alt}
            className="w-full h-80 object-contain rounded-xl"
          />
        )}

      </div>
    </div>
  );
}
