import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const images = [
  "https://admin.theclub.com.eg/uploads/images/original/1678973061_152.jpg",
  "https://admin.theclub.com.eg/uploads/images/original/1683658043_592.jpg",
  "https://admin.theclub.com.eg/uploads/images/original/1639577115_151461667_104416401695675_3225040158106597131_n.jpg",
  "https://admin.theclub.com.eg/uploads/images/original/1639577116_151660333_104416391695676_8138287383598988892_n.jpg",
  "https://admin.theclub.com.eg/uploads/images/original/1670841446_530.jpg",
  "	https://admin.theclub.com.eg/uploads/images/original/1678973060_475.jpg",
  "	https://admin.theclub.com.eg/uploads/images/original/1678973060_413.jpg",
  "	https://admin.theclub.com.eg/uploads/images/original/1678973060_623.jpg",
];

const depthStyles = {
  0: { scale: 1, zIndex: 3, opacity: 1, x: 0 },
  1: { scale: 0.7, zIndex: 2, opacity: 0.6, x: 200 },
  2: { scale: 0.4, zIndex: 1, opacity: 0.3, x: 400 },
};

const Gallery = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(2);
  const len = images.length;

  const getStyle = (i) => {
    const diff = (((i - index + len) % len) + len) % len;
    const style = depthStyles[diff] || depthStyles[len - diff];
    if (!style) return null;
    return {
      ...style,
      x: diff === len - 1 || diff === len - 2 ? -style.x : style.x,
    };
  };

  return (
    <section className=" py-5">
      <div className="px-20 py-6 pt-10 pb-3 bg-white">
        <h1 className="text-4xl px-5 font-medium text-[#004d47]">{t("Gallery")}</h1>
      </div>
      <div className="bg-teal-900 py-10 px-4  relative">
        <div className="relative w-full max-w-8xl mx-auto h-[320px]">
          <div className="relative w-full h-full overflow-hidden">
            {images.map((img, i) => {
              const style = getStyle(i);
              return (
                style && (
                  <motion.img
                    key={i}
                    src={img}
                    alt={`gallery-${i}`}
                    initial={false}
                    animate={style}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="absolute  top-1/2 left-1/2 h-[300px] object-cover rounded-xl shadow-lg -translate-x-1/2 -translate-y-1/2"
                    style={{ zIndex: style.zIndex }}
                  />
                )
              );
            })}
          </div>

          {/* الأسهم */}
          <div
            onClick={() => setIndex((i) => (i - 1 + len) % len)}
            className="absolute left-0 top-1/2 -translate-y-1/2 text-[#b0e2d9] text-[40px] cursor-pointer z-50 "
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 15 15"
              class="gallery-arrows"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.85355 3.85355C7.04882 3.65829 7.04882 3.34171 6.85355 3.14645C6.65829 2.95118 6.34171 2.95118 6.14645 3.14645L2.14645 7.14645C1.95118 7.34171 1.95118 7.65829 2.14645 7.85355L6.14645 11.8536C6.34171 12.0488 6.65829 12.0488 6.85355 11.8536C7.04882 11.6583 7.04882 11.3417 6.85355 11.1464L3.20711 7.5L6.85355 3.85355ZM12.8536 3.85355C13.0488 3.65829 13.0488 3.34171 12.8536 3.14645C12.6583 2.95118 12.3417 2.95118 12.1464 3.14645L8.14645 7.14645C7.95118 7.34171 7.95118 7.65829 8.14645 7.85355L12.1464 11.8536C12.3417 12.0488 12.6583 12.0488 12.8536 11.8536C13.0488 11.6583 13.0488 11.3417 12.8536 11.1464L9.20711 7.5L12.8536 3.85355Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <div
            onClick={() => setIndex((i) => (i + 1) % len)}
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[#b0e2d9] text-[40px] cursor-pointer z-50 "
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="0"
              viewBox="0 0 15 15"
              class="gallery-arrows"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.14645 11.1464C1.95118 11.3417 1.95118 11.6583 2.14645 11.8536C2.34171 12.0488 2.65829 12.0488 2.85355 11.8536L6.85355 7.85355C7.04882 7.65829 7.04882 7.34171 6.85355 7.14645L2.85355 3.14645C2.65829 2.95118 2.34171 2.95118 2.14645 3.14645C1.95118 3.34171 1.95118 3.65829 2.14645 3.85355L5.79289 7.5L2.14645 11.1464ZM8.14645 11.1464C7.95118 11.3417 7.95118 11.6583 8.14645 11.8536C8.34171 12.0488 8.65829 12.0488 8.85355 11.8536L12.8536 7.85355C13.0488 7.65829 13.0488 7.34171 12.8536 7.14645L8.85355 3.14645C8.65829 2.95118 8.34171 2.95118 8.14645 3.14645C7.95118 3.34171 7.95118 3.65829 8.14645 3.85355L11.7929 7.5L8.14645 11.1464Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
