import { Slide } from "../animation/Slide";
import Image from "next/image";
import { Metadata } from "next";
import PageHeading from "@/app/components/shared/PageHeading";
import EmptyState from "../components/shared/EmptyState";

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
    src: "https://sfolio.s3.amazonaws.com/IMG_5593.JPG",
  },
  {
    id: "4",
    src: "https://sfolio.s3.amazonaws.com/IMG_0330.JPG",
  },
  {
    id: "5",
    src: "https://sfolio.s3.amazonaws.com/IMG_0470.JPEG",
  },
  {
    id: "6",
    src: "https://sfolio.s3.amazonaws.com/IMG_1659.JPEG",
  },
  {
    id: "7",
    src: "https://sfolio.s3.amazonaws.com/IMG_1424.JPEG",
  },
  {
    id: "8",
    src: "https://sfolio.s3.amazonaws.com/IMG_1432.JPEG",
  },
  {
    id: "9",
    src: "https://sfolio.s3.amazonaws.com/IMG_1184.JPG",
  },
  {
    id: "10",
    src: "https://sfolio.s3.amazonaws.com/IMG_1005.JPG",
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
        description="Dive into my personal gallery featuring landscapes, portraits, and candid moments. These photos represent my journey and passion for photography, capturing the world as I see it."
      />
      <figure className="my-6">
        {images.length > 0 ? (
          <Slide delay={0.12} className="flex flex-wrap gap-2">
            {images.map((image) => (
              <Image
                key={image.id}
                src={image.src}
                alt="Photo"
                width={350}
                height={800}
                className="dark:bg-primary-bg bg-secondary-bg"
              />
            ))}
          </Slide>
        ) : (
          <EmptyState value="Photos" />
        )}
      </figure>
    </main>
  );
}
