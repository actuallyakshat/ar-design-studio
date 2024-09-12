"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const CUTOFF = 6;

export default function ImagesGrid({
  data,
  heading,
  pathPrefix
}: {
  data: string[];
  heading: string;
  pathPrefix: string;
}) {
  const [showMore, setShowMore] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [showImage, setShowImage] = useState(false);

  return (
    <div className="pt-6">
      <h2 className="text-center font-cormorantGaramond text-4xl">{heading}</h2>
      <div className="mx-auto mt-3 h-[2px] w-[70px] bg-alternative"></div>
      <div className="grid grid-cols-1 gap-4 py-6 md:grid-cols-2 lg:grid-cols-3">
        {showImage && (
          <ImageModal image={selectedImage} setShowImage={setShowImage} />
        )}
        {!showMore &&
          data.slice(0, CUTOFF).map((item, index) => {
            return (
              <div
                className="relative cursor-pointer overflow-hidden bg-zinc-300 shadow-md"
                key={index}
                onClick={() => {
                  setSelectedImage(item);
                  setShowImage(true);
                }}
              >
                <Image
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  src={`/assets/portfolio/${pathPrefix}/${item}`}
                  alt={heading}
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
          className="mx-auto flex w-fit cursor-pointer items-center gap-1 font-inter font-light hover:underline"
        >
          Show more <ChevronDown size={15} />
        </div>
      )}
      {showMore && (
        <div className="grid grid-cols-1 gap-4 py-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => {
            return (
              <div
                className="relative cursor-pointer overflow-hidden bg-zinc-300 shadow-md"
                key={index}
                onClick={() => {
                  setSelectedImage(item);
                  setShowImage(true);
                }}
              >
                <Image
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                  src={`/assets/portfolio/${pathPrefix}/${item}`}
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
          className="mx-auto flex w-fit cursor-pointer items-center gap-1 font-inter font-light hover:underline"
        >
          Show less <ChevronUp size={15} />
        </div>
      )}
    </div>
  );
}

function ImageModal({
  image,
  setShowImage,
}: {
  image: string;
  setShowImage: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [loading, setLoading] = useState(true);
  return (
    <div
      className="modal fixed left-0 top-0 z-[105] flex h-full w-full items-center justify-center overflow-y-auto bg-black/50 px-10"
      onClick={() => setShowImage(false)}
    >
      {loading && (
        <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center bg-black/50">
          <div className="h-20 w-20 animate-spin rounded-full border-b-2 border-t-2 border-white"></div>
        </div>
      )}
      <Image
        className="aspect-square max-h-[90vh] w-full object-contain"
        src={`/assets/portfolio/${image}`}
        alt="3D Render"
        width={2000}
        height={2000}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
