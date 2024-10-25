import Link from "next/link";
import React from "react";
export default function NotFound() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5">
      <h1 className="font-cormorantGaramond text-3xl font-semibold">
        Oops! The page you are looking for does not exists
      </h1>
      <Link
        href={"/"}
        className="font-inter font-light underline-offset-4 hover:underline"
      >
        Go back home
      </Link>
    </div>
  );
}
