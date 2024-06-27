'use client'
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const CUTOFF = 6;

export default function ImagesGrid({
  data,
  heading,
}: {
  data: string[];
  heading: string;
}) {
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="pt-6">
      <h2 className="text-center font-cormorantGaramond text-4xl">{heading}</h2>
      <div className="mx-auto mt-3 h-[2px] w-[70px] bg-alternative"></div>
      <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3">
        {showImage && <ImageModal image={selectedImage} setShowImage={setShowImage} />}
        {!showMore && data.slice(0, CUTOFF).map((render, index) => {
          return (
            <div
              className="relative cursor-pointer bg-zinc-300"
              key={index}
              onClick={() => {
                setSelectedImage(render);
                setShowImage(true);
              }}
            >
              <Image
                className="h-full w-full object-cover"
                src={`/assets/portfolio/${render}`}
                alt="3D Render"
                width={1000}
                height={1000}
              />
            </div>
          );
        })}
      </div>
      {data.length > CUTOFF && !showMore && (
        <div
          onClick={() => setShowMore(true)}
          className="font-light w-fit mx-auto font-inter hover:underline cursor-pointer flex items-center gap-1"
        >
          Show more <ChevronDown size={15} />
        </div>
      )}
      {showMore && (
        <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((render, index) => {
            return (
              <div
                className="relative cursor-pointer bg-zinc-300"
                key={index}
                onClick={() => {
                  setSelectedImage(render);
                  setShowImage(true);
                }}
              >
                <Image
                  className="h-full w-full object-cover"
                  src={`/assets/portfolio/${render}`}
                  alt="3D Render"
                  width={1000}
                  height={1000}
                />
              </div>
            );
          })}
        </div>
      )}
      {showMore && (
        <div
          onClick={() => setShowMore(false)}
          className="font-light w-fit mx-auto font-inter hover:underline cursor-pointer flex items-center gap-1"
        >
          Show less <ChevronUp size={15} />
        </div>
      )}
    </div>
  );
}

function ImageModal({ image, setShowImage }: { image: string; setShowImage: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <div
      className="fixed z-[105] top-0 left-0 modal w-full h-full bg-black/50 flex items-center justify-center px-10 overflow-y-auto"
      onClick={() => setShowImage(false)}
    >
      <Image
        className="w-full max-w-2xl object-cover"
        src={`/assets/portfolio/${image}`}
        alt="3D Render"
        width={1000}
        height={1000}
      />
    </div>
  );
}
