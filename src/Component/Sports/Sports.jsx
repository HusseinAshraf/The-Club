import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import acrtiveFrame from "../../assets/image/activities-frame.jpg";
import { useTranslation } from "react-i18next";

function Sports() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const sports = [
    {
      name: t("sports.football"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683370768_589.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1678803884_155.jpg",
    },
    {
      name: t("sports.basketball"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683370801_297.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1678804631_546.jpg",
    },
    {
      name: t("sports.gymnastic"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683371175_383.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1678804336_615.jpg",
    },
    {
      name: t("sports.tennis"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683371197_467.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1678805021_404.jpg",
    },
    {
      name: t("sports.handball"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683371220_857.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1678806036_553.jpg",
    },
    {
      name: t("sports.squash"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683372941_302.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683376171_665.jpg",
    },
    {
      name: t("sports.karate"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683393315_244.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683461373_477.jpg",
    },
    {
      name: t("sports.taekwondo"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683394629_544.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683394629_523.jpg",
    },
    {
      name: t("sports.judo"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683394812_547.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683461077_761.jpg",
    },
    {
      name: t("sports.mma"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683394829_114.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683395588_635.jpg",
    },
    {
      name: t("sports.kickboxing"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683395269_485.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683395269_896.jpg",
    },
    {
      name: t("sports.swimming"),
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683395724_794.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683395724_668.jpg",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-6">
      <h2 className="text-[28px] font-bold text-[#01565B] mb-4">
        {t("sports.sportsTitle")}
      </h2>

      <div className="border border-gray-300 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-4 md:col-span-6 w-full flex flex-col gap-2 bg-[#f4f4f4] shadow-[0_2px_4px_#0003,_0_6px_20px_#00000030] p-4 rounded-lg px-16">
            {sports.map((sport, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="cursor-pointer mx-auto flex items-center justify-between w-full border-b pb-3 px-2 hover:text-[#3fbabe] hover:text-lg transition duration-300 ease-in-out "
              >
                <img src={sport.image} alt={sport.name} className="w-6 h-6" />
                <span className="flex-1 ml-3 text-[16px] sm:text-[18px]">
                  {sport.name}
                </span>
                {isArabic ? (
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z"></path></svg>
                ) : (   
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>
               )} 
              </div>
            ))}
          </div>

          <div className="lg:col-span-8 md:col-span-6 w-full flex justify-center items-center">
            <img
              src={
                hoveredIndex !== null
                  ? sports[hoveredIndex].hoverImage
                  : acrtiveFrame
              }
              alt="active frame"
              className="w-full h-auto max-h-[500px] object-contain transition-all duration-300 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sports;
