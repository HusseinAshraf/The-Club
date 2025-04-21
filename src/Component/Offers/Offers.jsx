import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";
import offer1 from "../../assets/image/offer1.jpg";
import offer2 from "../../assets/image/offer2.jpg";

function Offers() {
  const newsData = [
    {
      image: offer1,
      title: "10% discount on club membership",
      description: "WHATEVER YOU WANT, WHENEVER YOU WANT",
      date: "09/05/2023",
    },
    {
      image: offer2,
      title: "Special Offers for new members",
      description: "Special Discounts for new members ",
      date: "16/05/2023",
    },
  ];

  const swiperRef = useRef(null);
  const [isPrevButtonVisible, setPrevButtonVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false); // 💡 تتبع إذا حصل Scroll

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      const handleSlideChange = () => {
        const index = swiper.activeIndex;
        setPrevButtonVisible(index > 0);

        if (!hasScrolled) {
          setHasScrolled(true); // ✅ أول حركة فقط
        }
      };

      swiper.on("slideChange", handleSlideChange);

      // Initial state check
      handleSlideChange();
    }
  }, [hasScrolled]);

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-20 py-6">
      <h2 className="text-[28px] font-bold text-[#01565B] mb-4">Offers</h2>

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

          {/* زر الرجوع يظهر دايمًا لو مش في أول سلايد */}
         
          {isPrevButtonVisible && (
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 block sm:hidden">
              <button
                className="w-9 h-9 rounded-full bg-[#01565B] text-white flex items-center justify-center hover:bg-[#014e47] transition-colors"
                onClick={() => swiperRef.current.swiper.slidePrev()}
              >
                <ChevronLeft size={20} />
              </button>
            </div>
          )}

          {/* زر التالي ➜ يظهر فقط بعد أول سوايب، وفي الشاشات الصغيرة فقط */}
          {hasScrolled && (
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 block sm:hidden">
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

export default Offers;
