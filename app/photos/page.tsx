import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";

const images = [
  {
    id: "1",
    src: "https://sfolio.s3.amazonaws.com/GPTempDownloadNMcd.jpg",
  },
  {
    id: "2",
    src: "https://sfolio.s3.amazonaws.com/GPTempDownloadblur.jpg",
  },
  {
    id: "3",
    src: "https://sfolio.s3.amazonaws.com/GPTempDownloadNMcd.jpg",
  },
  {
    id: "4",
    src: "https://sfolio.s3.amazonaws.com/GPTempDownloadNMcd.jpg",
  },
];

export const metadata: Metadata = {
  title: "Photos | Surya Viyyapu",
  metadataBase: new URL("https://suryaviyyapu.com/photos"),
  description: "Explore photos taken by Surya Viyyapu",
  openGraph: {
    title: "Photos | Surya Viyyapu",
    url: "https://suryaviyyapu.com/photos",
    description: "Explore photos taken by Surya Viyyapu",
    images:
      "https://res.cloudinary.com/victoreke/image/upload/v1692635149/victoreke/photos.png",
  },
};

export default function Photos() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <PageHeading
        title="Photos"
        description="This page is still under construction..."
      />
      <figure className="my-6">
        <Slide delay={0.12} className="flex flex-wrap gap-2">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.src}
              alt="playing guitar"
              width={350}
              height={800}
              className="dark:bg-primary-bg bg-secondary-bg"
            />
          ))}
        </Slide>
      </figure>
    </main>
  );
}
