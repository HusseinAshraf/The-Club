import React from "react";
import { Carousel } from "flowbite-react";
import TheClub from "../../assets/image/The Club.png";

function HomeSlider() {
  return (
    <div className="w-full h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] xl:h-[85vh] 2xl:h-[90vh]">
      <Carousel
        slideInterval={5000}
        className="h-full w-full"
        indicators={false}
        leftControl={
          <span className="text-gray-100 p-2 rounded-full transition duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </span>
        }
        rightControl={
          <span className="text-gray-200 p-2 rounded-full transition duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        }
      >
        <div className="h-full w-full">
          <img
            src={TheClub}
            alt="The Club"
            className="object-cover w-full h-full"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default HomeSlider;
