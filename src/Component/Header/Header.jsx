import React, { useState, useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../assets/logo club.png";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [sportsOpen, setSportsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { t } = useTranslation();
  const aboutRef = useRef(null);
  const sportsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutOpen(false);
      }

      if (sportsRef.current && !sportsRef.current.contains(event.target)) {
        setSportsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const switchLanguage = () => {
    const newLang = i18n.language === "ar" ? "en" : "ar";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="w-full shadow-md">
      {/* Top bar */}
      <div
        className=" text-white text-sm py-3"
        style={{
          background:
            "linear-gradient(264.94deg, #014E52 25.57%, #22B69C 125.1%)",
        }}
      >
        <div className="container mx-auto max-w-[1140px] px-4 flex flex-wrap justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-wrap items-center gap-4 sm:gap-4">
            <div className="flex items-center gap-1 text-sm">
              <div className="text-xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  className="icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                </svg>
              </div>
              <span className="text-[12px]">
                <a href="tel:16647">16647</a>
              </span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-lg" />
              <span className="text-[12px] sm:inline">
                {t("contact.email")}:{" "}
                <a href="mailto:info@theclub.com.eg">info@theclub.com.eg</a>
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <FaFacebookF className="cursor-pointer text-2xl hover:text-gray-200" />
            <FaInstagram className="cursor-pointer text-2xl hover:text-gray-200" />
            <FaLinkedinIn className="cursor-pointer text-2xl hover:text-gray-200" />
            <FaWhatsapp className="cursor-pointer text-2xl hover:text-gray-200" />
            <span
              className="cursor-pointer hover:underline"
              onClick={switchLanguage}
            >
              {i18n.language === "ar" ? "English" : "العربية"}
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-[#f8f9fa] px-4 py-2 relative z-50">
        <div className="container mx-auto max-w-[1140px] px-4 flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-4 sm:gap-8">
            <img
              src={logo}
              alt="Logo"
              className="w-16 sm:w-20 h-auto object-contain"
            />

            <nav className="hidden md:flex flex-wrap gap-4 sm:gap-6 text-md text-gray-700 font-medium relative">
              <a href="#">{t("nav.home")}</a>

              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => setAboutOpen((prev) => !prev)}
                  className="flex items-center gap-1 cursor-pointer"
                >
                  {t("about.aboutTitle")} ▾
                </button>
                {aboutOpen && (
                  <div className="absolute top-full left-0 mt-1 w-50 bg-white border shadow-md rounded-md py-2 z-50 border-[#f8f9fa]">
                    {[
                      "about.aboutClub",
                      "about.ministerWelcome",
                      "about.chairmanWord",
                      "about.boardMembers",
                      "about.strategicPlans",
                      "about.teamwork",
                      "about.contact",
                    ].map((key) => (
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                        key={key}
                      >
                        {t(key)}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#">{t("nav.loyalty")}</a>
              <a href="#">{t("nav.events")}</a>
              <a href="#">{t("nav.news")}</a>
              <a href="#">{t("nav.championships")}</a>

              <div className="relative" ref={sportsRef}>
                <button
                  onClick={() => setSportsOpen((prev) => !prev)}
                  className="flex items-center gap-1"
                >
                  {t("sports.sportsTitle")} ▾
                </button>
                {sportsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-50 bg-white border shadow-md rounded-md py-2 z-50 border-[#f8f9fa] cursor-pointer">
                    {[
                      "sports.football",
                      "sports.basketball",
                      "sports.gymnastic",
                      "sports.tennis",
                      "sports.handball",
                      "sports.squash",
                      "sports.karate",
                      "sports.taekwondo",
                      "sports.judo",
                      "sports.mma",
                      "sports.kickboxing",
                      "sports.swimming",
                    ].map((key) => (
                      <a
                        key={key}
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {t(key)}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              <a href="#">{t("nav.booking")}</a>
            </nav>
          </div>

          <div className="hidden md:flex flex-col items-end">
            <button className="bg-gradient-to-l from-[#014e52] to-[#22b69c] text-white w-[120px] px-5 md:px-3 py-1 my-1 rounded-md shadow-md hover:from-white hover:to-white hover:text-[#014e52] transition cursor-pointer">
              {t("buttons.login")}
            </button>
            <button className="bg-gradient-to-l from-[#014e52] to-[#22b69c] text-white w-[120px] px-5 md:px-3 py-1 my-1 rounded-md shadow-md hover:from-white hover:to-white hover:text-[#014e52] transition cursor-pointer ">
              {t("buttons.register")}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-teal-900 text-2xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#f8f9fa] border-t border-gray-200 shadow-lg px-4 py-4 space-y-3">
            <a href="#" className="block" onClick={() => setMenuOpen(false)}>
              {t("nav.home")}
            </a>

            <div className="relative" ref={aboutRef}>
              <button
                onClick={() => setAboutOpen((prev) => !prev)}
                className="flex items-center gap-1 cursor-pointer"
              >
                {t("about.aboutTitle")} ▾
              </button>
              {aboutOpen && (
                <div className="relative mt-2 bg-white border shadow-md rounded-md py-2 z-40">
                  {[
                    "about.aboutClub",
                      "about.ministerWelcome",
                      "about.chairmanWord",
                      "about.boardMembers",
                      "about.strategicPlans",
                      "about.teamwork",
                      "about.contact",
                  ].map((key) => (
                    <a
                      key={key}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t(key)}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {["nav.loyalty", "nav.events", "nav.news", "nav.championships"].map(
              (key) => (
                <a
                  key={key}
                  href="#"
                  className="block"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(key)}
                </a>
              )
            )}

            <div className="relative" ref={sportsRef}>
              <button
                onClick={() => setSportsOpen((prev) => !prev)}
                className="flex items-center gap-1"
              >
                {t("sports.sportsTitle")} ▾
              </button>
              {sportsOpen && (
                <div className="relative mt-2 bg-white border shadow-md rounded-md py-2 z-40 cursor-pointer">
                  {[
                    "sports.football",
                    "sports.basketball",
                    "sports.gymnastic",
                    "sports.tennis",
                    "sports.handball",
                    "sports.squash",
                    "sports.karate",
                    "sports.taekwondo",
                    "sports.judo",
                    "sports.mma",
                    "sports.kickboxing",
                    "sports.swimming",
                  ].map((key) => (
                    <a
                      key={key}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {t(key)}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="block" onClick={() => setMenuOpen(false)}>
              {t("nav.booking")}
            </a>

            <div className="flex flex-col gap-4 pt-2">
  <button
    className={`w-[120px] font-medium bg-gradient-to-l from-[#014e52] to-[#22b69c] text-white  px-3  py-2 rounded-md shadow-md hover:from-white hover:to-white hover:text-[#014e52] transition cursor-pointer text-center 
    }`}
  >
    {t("buttons.login")}
  </button>
  <button
    className={`w-[120px] font-medium bg-gradient-to-l from-[#014e52] to-[#22b69c] text-white px-3 py-2 rounded-md shadow-md hover:from-white hover:to-white hover:text-[#014e52] transition cursor-pointer text-center 
    }`}
  >
    {t("buttons.register")}
  </button>
</div>


          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
