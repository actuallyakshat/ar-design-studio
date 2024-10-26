import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageSrc(image: string) {
  return `https://res.cloudinary.com/actuallyakshatwork/image/upload/${image}`;
}
