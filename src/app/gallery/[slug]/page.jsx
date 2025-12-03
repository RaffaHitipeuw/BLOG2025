"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function GalleryDetail() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [media, setMedia] = useState(null);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchAll = async () => {
      const res = await fetch("https://raffahitipeuw.github.io/portasset/datablog/landing/landing.json");
      const json = await res.json();

      const mediaRes = await fetch("https://raffahitipeuw.github.io/portasset/assets/media/media.json");
      const mediaJson = await mediaRes.json();

      setData(json);
      setMedia(mediaJson);

      const found = json.gallery.find((x) => x.slug === slug);
      setItem(found);
    };

    fetchAll();
  }, [slug]);

  if (!item || !media) return null;

  const imgSrc = media[item.image];

  return (
    <div className="w-full max-w-[800px] mx-auto px-6 py-20">
      <Link href="/gallery" className="underline text-sm opacity-70 hover:opacity-100">
        ← Back to gallery
      </Link>

      <h1 className="text-4xl font-bold mt-4">{item.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{item.date}</p>

      <p className="mt-5 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        {item.desc}
      </p>

      <div className="mt-10 w-full rounded-xl overflow-hidden">
        <img src={imgSrc} className="w-full object-cover" alt={item.alt} />
      </div>
    </div>
  );
}
