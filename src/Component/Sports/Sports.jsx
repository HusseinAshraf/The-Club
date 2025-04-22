import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import acrtiveFrame from "../../assets/image/activities-frame.jpg";

function Sports() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const sports = [
    {
      name: "Football",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683370768_589.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1678803884_155.jpg",
    },
    {
      name: "Basketball",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683370801_297.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1678804631_546.jpg",
    },
    {
      name: "Gymnastic",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683371175_383.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1678804336_615.jpg",
    },
    {
      name: "Tennis",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683371197_467.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1678805021_404.jpg",
    },
    {
      name: "Handball",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683371220_857.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1678806036_553.jpg",
    },
    {
      name: "Squash",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683372941_302.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683376171_665.jpg",
    },
    {
      name: "Karate",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683393315_244.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683461373_477.jpg",
    },
    {
      name: "Taekwondo",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683394629_544.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683394629_523.jpg",
    },
    {
      name: "Judo",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683394812_547.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683461077_761.jpg",
    },
    {
      name: "MMA",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683394829_114.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683395588_635.jpg",
    },
    {
      name: "Kickboxing",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683395269_485.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683395269_896.jpg",
    },
    {
      name: "Swimming",
      image:
        "https://admin.theclub.com.eg/uploads/images/original/1683395724_794.png",
      hoverImage:
        "https://admin.theclub.com.eg/uploads/images/original/1683395724_668.jpg",
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-6">
      <h2 className="text-[28px] font-bold text-[#01565B] mb-4">
        Sports & Activities
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
                <FaChevronRight />
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
