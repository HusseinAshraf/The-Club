import React from "react";
import { useTranslation } from "react-i18next";

function OurClub() {
  const { t } = useTranslation();

  return (
    <section className="bg-[#004d47]">
      {/* العنوان */}
      <div className="sm:px-6 lg:px-20 py-6 pt-10 pb-3 bg-white">
        <h1 className="text-4xl px-5 font-medium text-[#004d47]">
          {t("ourClub.title")}
        </h1>
      </div>

      <div className="bg-[#004d47]">
        <div className="container mx-auto flex flex-col lg:flex-row h-auto lg:h-[450px]">
          {/* قسم النص */}
          <div className="text-white px-6 py-6 lg:w-1/2 w-full text-sm leading-loose font-light flex flex-col justify-between h-full">
            <div className="pr-1 max-h-[300px] lg:max-h-[350px]">
              <p>{t("ourClub.description")}</p>
              <p className="font-semibold text-2xl mt-6 ">
                <a href="#">
                  {t("ourClub.readMore")} &gt;&gt;
                </a>
              </p>
            </div>
          </div>

          {/* قسم الفيديو */}
          <div className="lg:w-1/2 w-full flex items-center justify-center px-2 lg:px-10 py-4 lg:py-0 h-[250px] lg:h-full">
            <video
              autoPlay
              muted
              controls
              loop
              playsInline
              className="w-full h-full object-cover shadow-md"
            >
              <source
                src="https://ik.imagekit.io/hussein74/The%20Club/the%20club.mp4"
                type="video/mp4"
              />
              {t("ourClub.videoNotSupported")}
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClub;
