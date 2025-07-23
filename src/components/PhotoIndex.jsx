import React, { useState } from "react";
import { motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Helmet } from "react-helmet";

// Your images array
const images = [
  {
    src: "https://www.henryalderslade.com/photos/henry-alderslade-akyaka-2025.jpg",
    alt: "Henry Alderslade at a bar in Akyaka June 2025",
    caption: "Henry Alderslade at a bar in Akyaka June 2025",
  },
  {
    src: "https://www.henryalderslade.com/photos/henry-alderslade-akyaka-river-romp-2025.jpg",
    alt: "Henry Alderslade on a boat in Akyaka June 2025",
    caption: "Henry Alderslade on a boat in Akyaka June 2025",
  },
  {
    src: "https://www.henryalderslade.com/photos/henry-alderslade-barcelona-2025.jpg",
    alt: "Henry Alderslade at Barcelona Airport 2025",
    caption: "Henry Alderslade at Barcelona Airport 2025",
  },
  {
    src: "https://www.henryalderslade.com/photos/henry-alderslade-crystal-palace-2025.jpg",
    alt: "Henry Alderslade Photography Crystal Palace South London 2025",
    caption: "Henry Alderslade Photography Crystal Palace South London 2025",
  },
  {
    src: "https://www.henryalderslade.com/photos/henry-alderslade-pascha-hanaway-wedding-2025.jpg",
    alt: "Henry Alderslade with his partner at a wedding in 2025",
    caption: "Henry Alderslade with his partner at a wedding in 2025",
  },
  {
    src: "https://www.henryalderslade.com/photos/pascha-henry-tinka-2025.jpg",
    alt: "Henry Alderslade with his partner Pascha Hanaway and Boston Terrier Tinka 2025",
    caption:
      "Henry Alderslade with his partner Pascha Hanaway and Boston Terrier Tinka 2025",
  },



  
  {
    src: "https://www.henryalderslade.com/photos/Henry-Alderslade-cuppa.jpg",
    alt: "Henry Alderslade - Cuppa",
    caption:
      "Henry Alderslade - Cuppa",
  },
  {
    src: "https://www.henryalderslade.com/photos/Henry-Alderslade-Holiday-2023.jpg",
    alt: "Henry Alderslade - Holiday 2023",
    caption:
      "Henry Alderslade - Holiday 2023",
  },
  {
    src: "https://www.henryalderslade.com/photos/Henry-Alderslade-Holiday-Spain.jpg",
    alt: "Henry Alderslade - Holiday Spain",
    caption:
      "Henry Alderslade - Holiday Spain",
  },
  {
    src: "https://www.henryalderslade.com/photos/Henry-Alderslade-Pool.jpg",
    alt: "Henry Alderslade - Pool",
    caption:
      "Henry Alderslade - Pool",
  },
  {
    src: "https://www.henryalderslade.com/photos/Henry-Alderslade-Unviersity-Parks-Oxford.jpg",
    alt: "Henry Alderslade - Unviersity Parks Oxford",
    caption:
      "Henry Alderslade - Unviersity Parks Oxford",
  },
  {
    src: "https://www.henryalderslade.com/photos/Henry-and-Pascha.jpg",
    alt: "Henry and Pascha",
    caption:
      "Henry and Pascha",
  },
  {
    src: "https://www.henryalderslade.com/photos/Tinka-France-2024.jpg",
    alt: "Tinka - France 2024",
    caption:
      "Tinka - France 2024",
  },
  {
    src: "https://www.henryalderslade.com/photos/Tinka-Walk.jpg",
    alt: "Tinka - Walk",
    caption:
      "Tinka - Walk",
  },
  {
    src: "https://www.henryalderslade.com/photos/Tinka-Face.jpg",
    alt: "Tinka - Face",
    caption:
      "Tinka - Face",
  },
  {
    src: "https://www.henryalderslade.com/photos/Tinka-Graffiti.jpg",
    alt: "Tinka Graffiti",
    caption:
      "Tinka Graffiti",
  },
];

const PhotoIndex = () => {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <>
      <Helmet>
        <title>Photo Gallery | Henry Alderslade</title>
        <meta
          name="description"
          content="A curated collection of Henry Alderslade's photography, including travel, lifestyle, and drone captures."
        />
        <meta property="og:title" content="Photo Gallery | Henry Alderslade" />
        <meta
          property="og:description"
          content="Explore Henry Alderslade's photo gallery, featuring curated travel, lifestyle, and drone photography."
        />
        <meta
          property="og:image"
          content="https://www.henryalderslade.com/photos/henry-alderslade-akyaka-2025.jpg"
        />
        <meta
          property="og:url"
          content="https://www.henryalderslade.com/photo-gallery"
        />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: "Henry Alderslade Photo Gallery",
            description:
              "A curated collection of Henry Alderslade's photography, including travel, lifestyle, and drone captures.",
            url: "https://www.henryalderslade.com/photo-gallery",
            creator: {
              "@type": "Person",
              name: "Henry Alderslade",
              url: "https://www.henryalderslade.com",
            },
            inLanguage: "en",
          })}
        </script>
      </Helmet>

      <section
        id="photo-index"
        className="relative min-h-[calc(100vh-8rem)] py-40 bg-gradient-to-b 
             from-gray-100 via-gray-200 to-gray-100 
             text-gray-800 flex flex-col items-center px-6 scroll-mt-[64px]"
      >
        <div
          id="photo-index-anchor"
          className="absolute -top-24"
          aria-hidden="true"
        ></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl w-full text-center"
        >
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-custom-light-orange">Photo</span>{" "}
            <span className="text-gray-600">Gallery</span>
          </h2>

          {/* Gallery Grid */}
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="cursor-pointer overflow-hidden rounded-lg shadow hover:shadow-xl transition duration-300"
                onClick={() => setLightboxIndex(index)}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="aspect-[4/3]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lightbox */}
        <Lightbox
          open={lightboxIndex >= 0}
          close={() => setLightboxIndex(-1)}
          index={lightboxIndex}
          slides={images.map((img) => ({
            src: img.src,
            description: img.caption,
          }))}
          render={{
            description: ({ slide }) => (
              <div className="text-center text-lg mt-4 text-white">
                {slide.description}
              </div>
            ),
          }}
          carousel={{ finite: false }}
          controller={{ closeOnBackdropClick: true }}
        />
      </section>
    </>
  );
};

export default PhotoIndex;
