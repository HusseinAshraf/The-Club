import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from 'react-i18next';

import img1 from "../../assets/image/img1.jpeg";
import img2 from "../../assets/image/img2.jpeg";
import img3 from "../../assets/image/img3.jpg";
import img4 from "../../assets/image/img4.jpg";

function News() {
  const { t , i18n} = useTranslation();
  const swiperRef = useRef(null);
  const isArabic = i18n.language === "ar"; 
  const [isPrevButtonVisible, setPrevButtonVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const newsData = [
    {
      image: img1,
      title: t("news.articles.0.title"),
      description: t("news.articles.0.description"),
      date: t("news.articles.0.date"),
    },
    {
      image: img2,
      title: t("news.articles.1.title"),
      description: t("news.articles.1.description"),
      date: t("news.articles.1.date"),
    },
    {
      image: img3,
      title: t("news.articles.2.title"),
      description: t("news.articles.2.description"),
      date: t("news.articles.2.date"),
    },
    {
      image: img4,
      title: t("news.articles.3.title"),
      description: t("news.articles.3.description"),
      date: t("news.articles.3.date"),
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
  }, [hasScrolled , isArabic]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-6">
      <h2 className="text-[28px] font-bold text-[#01565B] mb-4">{t("news.title")}</h2>

      <div className="border border-gray-300 rounded-xl p-6 relative">
        <div className="flex justify-end mb-6">
          <a
            href="#"
            className="text-[#01565B] font-[700] text-xl border-b-2 border-[#01565B] pb-1"
          >
            {t("news.viewMoreLink")}
          </a>
        </div>

        <Swiper
        key={i18n.language}
          ref={swiperRef}
          modules={[Navigation]}
          dir={isArabic ? "rtl" : "ltr"}
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
                      {t("news.viewMoreLink")}
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}


          
          
          

          {isPrevButtonVisible && (
            <div className={`absolute top-1/2 ${isArabic ? "right-0" : "left-0"} transform -translate-y-1/2 z-10 block ${hasScrolled ? 'block' : 'hidden'}`}>
              <button
                className="w-[43px] h-[43px] rounded-full bg-[#00000080] text-white flex items-center justify-center hover:bg-[#000000e3] transition-colors cursor-pointer"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                {isArabic ? (
                  <ChevronRight size={25} />
                ) : (
                  <ChevronLeft size={25} />
                )}
              </button>
            </div>
          )}

          {hasScrolled && (
            <div className={`absolute top-1/2 ${isArabic ? "left-0" : "right-0"} transform -translate-y-1/2 z-10 block ${hasScrolled ? 'block' : 'hidden'}`}>
              <button
                className="w-[43px] h-[43px] rounded-full bg-[#00000080] text-white flex items-center justify-center hover:bg-[#000000e3] transition-colors cursor-pointer"
                onClick={() => swiperRef.current.swiper.slideNext()}
              >
                 {isArabic ? (
                  <ChevronLeft size={25} />
                ) : (
                  <ChevronRight size={25} />
                )}
              </button>
            </div>
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default News;
