import ImagesGrid from "./_components/ImagesGrid";

const renders = [
  "1.1.jpg",
  "1.2.jpg",
  "1.3.jpg",
  "1.4.jpg",
  "1.5.jpg",
  "1.6.jpg",
  "1.7.jpg",
  "2.1.jpg",
  "2.2.jpg",
  "2.3.jpg",
  "3.1.jpg",
  "3.2.jpg",
  "4.1.jpg",
];

const siteImage = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg", "13.jpg", "14.jpg", "15.jpg", "16.jpg", "17.jpg", "18.jpg", "19.jpg", "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg"];

export default function Portfolio() {
  return (
    <div className="h-full min-h-screen pb-16 pt-16">
      <div className="relative flex h-96 items-center justify-center bg-[url('/assets/portfolio/renders/1.6.jpg')] bg-cover bg-[center_83%]">
        <div className="absolute h-full w-full bg-black/60"></div>
        <h1 className="z-[10] font-cormorantGaramond text-5xl text-background md:text-6xl lg:text-7xl">
          Our Work
        </h1>
      </div>
      <div className="mx-auto mt-8 max-w-screen-xl px-6">
        <ImagesGrid data={renders} heading="3D Renders" pathPrefix="renders" />
        <ImagesGrid
          data={siteImage}
          heading="Site Images"
          pathPrefix="site-images"
        />
      </div>
    </div>
  );
}
