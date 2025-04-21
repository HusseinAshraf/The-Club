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

  const newsData = [
    {
      image: img1,
      title: "What did the Minister of Tourism say about The Club?",
      description:
        "Dr. Ashraf Sobhi, Minister of Youth and Sports, took Dr. Khaled Anani, Minister of Tourism, on an inspection tour within the club, which included its facilities, which range from a squash building to a health building, a social building, gymnast and swimming pool, five-way stadiums, multi-purpose stadiums, gyms and service area.",
      date: "15/12/2021",
    },
    {
      image: img2,
      title: `The "Victories of the October War" seminar was launched toda...`,
      description: `The "Victories of the October War" seminar was launched today under the auspices of the Ministry of Youth and Sports. In the presence of His Excellency the Minister of Youth and Sports, Mr. Dr. Ashraf Sobhi, Major General Hamdi Bakhit, Major General Nasr Salem and members of the Club's Board of Trustees.`,
      date: "15/12/2021",
    },
    {
      image: img3,
      title: "The Minister of Sports directs the formation of a higher com...",
      description:
        "Dr. Ashraf Sobhi, Minister of Youth and Sports, held a meeting with the ministry's leaders; The Ministry's headquarters in the New Administrative Capital, the mechanisms for transferring the ownership of Abdeen Sports Club, Sports and Sports Series, and its inclusion within the Club Club.",
      date: "16/03/2023",
    },
    {
      image: img4,
      title: "Open the gymnastics hall",
      description:
        "During his tour at The Club in 6th of October City, President Abdel Fattah El-Sisi requested from Dr. Ashraf Sobhy, the Minister of Youth and Sports, to open the gymnastics hall for him to inspect personally. President El-Sisi listened to a detailed explanation from the Minister about the club and its projects. This occurred during the inauguration by President El-Sisi today, Wednesday, of several national projects in the Greater Cairo area.",
      date: "27/04/2024",
    },
  ];

  useEffect(() => {
    if (swiperRef.current) {
   
      swiperRef.current.swiper.on("slideChange", () => {
        setPrevButtonVisible(swiperRef.current.swiper.activeIndex > 0);
      });
    }
  }, []);

  return (
    <div className="max-w-screen-xl mx-auto px-20 py-6 relative">
      <h2 className="text-[28px] font-bold text-[#01565B] mb-4">News</h2>

      <div className="border border-gray-300 rounded-xl p-6 relative">
        <div className="flex justify-end mb-6 flex-col items-end">
          <a href="#" className="text-[#01565B] font-[700] text-xl  border-b-2 border-[#01565B] pb-1">
            View More &gt;&gt;
          </a>
          
        </div>

        <Swiper
          ref={swiperRef} 
          modules={[Navigation]}
          spaceBetween={5}
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

          {isPrevButtonVisible && (
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 flex gap-2 z-10">
              <button
                className="swiper-button-prev-custom w-9 h-9 rounded-full bg-[#01565B] text-white flex items-center justify-center hover:bg-[#014e47] transition-colors"
                onClick={() => swiperRef.current.swiper.slidePrev()} // استخدام الـ ref للتنقل للخلف
              >
                <ChevronLeft size={20} />
              </button>
            </div>
          )}

          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 flex gap-2 z-10">
            <button
              className="swiper-button-next-custom w-9 h-9 rounded-full bg-[#01565B] text-white flex items-center justify-center hover:bg-[#014e47] transition-colors"
              onClick={() => swiperRef.current.swiper.slideNext()} // استخدام الـ ref للتنقل للأمام
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </Swiper>
      </div>
    </div>
  );
}

export default News;
