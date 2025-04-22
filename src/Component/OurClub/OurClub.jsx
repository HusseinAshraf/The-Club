import React from "react";

function OurClub() {
  return (
    <section className="bg-[#004d47]">
      {/* Title */}
      <div className="sm:px-6 lg:px-20 py-6 pt-10 pb-3 bg-white">
        <h1 className="text-4xl px-5 font-medium text-[#004d47]">Our Club</h1>
      </div>

      <div className="bg-[#004d47]">
        <div className="container mx-auto flex flex-col lg:flex-row h-auto lg:h-[450px]">
          {/* Text section */}
          <div className="text-white px-6 py-6 lg:w-1/2 w-full text-sm leading-loose font-light flex flex-col justify-between h-full">
            <div className="pr-1 max-h-[300px] lg:max-h-[350px]">
              <p>
                The Club's main branch is Located at 6 October City near Juhayna
                Square, in the Dahshur link between Juhayna Square and Al-Wahat
                Road, on 20 Feddan. The Club includes a number of sports and
                entertainment facilities, parks and green areas, and service and
                sports facilities. Its cost is about EGP 665 million. It aims to
                include more than 80,000 active members. The Club includes many
                Facilities, 14 playgrounds, including 4 five-a-side, 4
                multi-court courts, 6 for various combat games, a gymnastics and
                squash hall, a swimming pool complex, including an Olympic one,
                and a service area that includes a bank branch and a
                20-square-meter. The Club is the first commercial Project
                affiliated with the Ministry of Youth and Sports directly and
                managed by the private sector (UFC GYM EGYPT). We are planning
                to expand to Egypt.
              </p>
              <p className="font-semibold text-2xl mt-6 ">Read More &gt;&gt;</p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full flex items-center justify-center px-2 lg:px-10 py-4 lg:py-0 h-[250px] lg:h-full">
            <video
              autoPlay
              muted
              controls
              loop
              playsInline
              className="w-full h-full object-cover  shadow-md"
            >
              <source
                src="https://ik.imagekit.io/hussein74/The%20Club/the%20club.mp4"
                type="video/mp4"
              />
              متصفحك لا يدعم عرض الفيديو.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClub;
