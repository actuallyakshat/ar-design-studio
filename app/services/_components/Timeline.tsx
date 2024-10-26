import { getImageSrc } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const Timeline = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <div className="max-w-screen-2xl">
        <div className="mb-8 text-center">
          <h1 className="font-cormorantGaramond text-4xl font-medium md:text-5xl">
            How we work
          </h1>
          <p className="mt-2 font-inter text-sm">
            Steps we incorporate into our design process to create a space that
            reflects your style and needs.
          </p>
        </div>
      </div>
      <div>
        <Image
          src={getImageSrc("horizontal-timeline-cropped.png")}
          alt="timeline"
          width={1920}
          height={1080}
          quality={100}
          className="mx-auto hidden w-[90%] max-w-[1400px] md:block"
        />
        <Image
          src={getImageSrc("vertical-timeline.png")}
          alt="timeline"
          width={1080}
          height={1920}
          quality={100}
          className="mx-auto -ml-1.5 w-full max-w-[1400px] md:hidden"
        />
      </div>
    </div>
  );
};

export default Timeline;
