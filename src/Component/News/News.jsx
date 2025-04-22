import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "../../assets/image/img1.jpeg";
import img2 from "../../assets/image/img2.jpeg";
import img3 from "../../assets/image/img3.jpg";
import img4 from "../../assets/image/img4.jpg";

function News() {
  const swiperRef = useRef(null);
  const [isPrevButtonVisible, setPrevButtonVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const newsData = [
    {
      image: img1,
      title: "What did the Minister of Tourism say about The Club?",
      description:
        "Dr. Ashraf Sobhi, Minister of Youth and Sports, took Dr. Khaled Anani, Minister of Tourism, on an inspection tour within the club...",
      date: "15/12/2021",
    },
    {
      image: img2,
      title: `The "Victories of the October War" seminar was launched...`,
      description: `The "Victories of the October War" seminar was launched today under the auspices of the Ministry of Youth and Sports...`,
      date: "15/12/2021",
    },
    {
      image: img3,
      title: "The Minister of Sports directs the formation of a higher...",
      description:
        "Dr. Ashraf Sobhi, Minister of Youth and Sports, held a meeting with the ministry's leaders...",
      date: "16/03/2023",
    },
    {
      image: img4,
      title: "Open the gymnastics hall",
      description:
        "During his tour at The Club in 6th of October City, President Abdel Fattah El-Sisi requested the opening of the hall...",
      date: "27/04/2024",
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      const handleSlideChange = () => {
        const index = swiper.activeIndex;
        setPrevButtonVisible(index > 0);

        if (!hasScrolled) setHasScrolled(true);
      };

      swiper.on("slideChange", handleSlideChange);
      handleSlideChange();
    }
  }, [hasScrolled]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-6">
      <h2 className="text-[28px] font-bold text-[#01565B] mb-4">News</h2>

      <div className="border border-gray-300 rounded-xl p-6 relative">
        <div className="flex justify-end mb-6">
          <a
            href="#"
            className="text-[#01565B] font-[700] text-xl border-b-2 border-[#01565B] pb-1"
          >
            View More &gt;&gt;
          </a>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation]}
          spaceBetween={15}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {newsData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#d9d9d9] rounded-[12px] shadow-sm hover:shadow-md transition overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[220px] object-cover"
                />
                <div className="p-4">
                  <h3 className="text-[14px] font-bold text-[#333] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-[#555] mt-2 leading-snug">
                    {item.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center text-[13px] text-[#444] font-semibold">
                    <span>{item.date}</span>
                    <a
                      href="#"
                      className="text-[#01565B] hover:underline font-semibold"
                    >
                      View More &gt;&gt;
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* أزرار التنقل للشاشات الصغيرة فقط */}
          {isPrevButtonVisible && (
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 block">
              <button
                className="w-9 h-9 rounded-full bg-[#01565B] text-white flex items-center justify-center hover:bg-[#014e47] transition-colors"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <ChevronLeft size={20} />
              </button>
            </div>
          )}

          {hasScrolled && (
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 block">
              <button
                className="w-9 h-9 rounded-full bg-[#01565B] text-white flex items-center justify-center hover:bg-[#014e47] transition-colors"
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default News;
