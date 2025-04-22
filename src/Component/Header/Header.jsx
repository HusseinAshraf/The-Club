import React, { useState, useEffect, useRef } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../../assets/logo club.png";

function Header() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [sportsOpen, setSportsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <div className="w-full shadow-md">
      {/* Top bar */}
      <div className="bg-gradient-to-r from-teal-500 to-teal-900 text-white text-sm py-2">
        <div className="container mx-auto max-w-[1140px] px-4 flex flex-wrap justify-between items-center gap-2 sm:gap-4">
          <div className="flex flex-wrap items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-1 text-sm">
              <FaPhone className="text-lg" />
              <span>16647</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEnvelope className="text-lg" />
              <span className=" sm:inline">info@theclub.com.eg</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaFacebookF className="cursor-pointer text-2xl hover:text-gray-200" />
            <FaInstagram className="cursor-pointer text-2xl hover:text-gray-200" />
            <FaLinkedinIn className="cursor-pointer text-2xl hover:text-gray-200" />
            <FaWhatsapp className="cursor-pointer text-2xl hover:text-gray-200" />
            <span className="cursor-pointer hover:underline">العربية</span>
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
              <a href="#">Home</a>

              <div className="relative" ref={aboutRef}>
                <button
                  onClick={() => setAboutOpen((prev) => !prev)}
                  className="flex items-center gap-1"
                >
                  About ▾
                </button>
                {aboutOpen && (
                  <div className="absolute top-full left-0 mt-1 w-40 bg-white border shadow-md rounded-md py-2 z-50 border-[#f8f9fa]">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      About The Club
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Minister Welcome
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Board Chairman Word
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Board Members
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Strategic Plans
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Teamwork
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Contact Us
                    </a>
                  </div>
                )}
              </div>

              <a href="#">Loyalty</a>
              <a href="#">Events</a>
              <a href="#">News</a>
              <a href="#">Championships</a>

              <div className="relative" ref={sportsRef}>
                <button
                  onClick={() => setSportsOpen((prev) => !prev)}
                  className="flex items-center gap-1"
                >
                  Sports & Activities ▾
                </button>
                {sportsOpen && (
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border  shadow-md rounded-md py-2 z-50 border-[#f8f9fa]">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Football
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Basketball
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Gymnastic
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Tennis
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Handball
                    </a>

                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Squash
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Karate
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Taekwondo
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Judo
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      MMA
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Kickboxing
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Swimming
                    </a>
                  </div>
                )}
              </div>

              <a href="#">Booking</a>
            </nav>
          </div>

          <div className="hidden md:flex flex-col items-end">
            <button className="bg-gradient-to-l from-[#014e52] to-[#22b69c] text-white w-[120px] px-5 py-1 my-1 rounded-md shadow-md hover:from-white hover:to-white hover:text-[#014e52]  transition">
              Login
            </button>
            <button className="bg-gradient-to-l from-[#014e52] to-[#22b69c] text-white w-[120px] px-5 py-1 my-1 rounded-md shadow-md hover:from-white hover:to-white hover:text-[#014e52]  transition">
              Register
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
              Home
            </a>

            <div className="relative" ref={aboutRef}>
              <button
                onClick={() => setAboutOpen((prev) => !prev)}
                className="flex items-center gap-1"
              >
                About ▾
              </button>
              {aboutOpen && (
                <div className="relative mt-2 bg-white border shadow-md rounded-md py-2 z-40">
                  {[
                    "About The Club",
                    "Minister Welcome",
                    "Board Chairman Word",
                    "Board Members",
                    "Strategic Plans",
                    "Teamwork",
                    "Contact Us",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {["Loyalty", "Events", "News", "Championships"].map((link) => (
              <a
                key={link}
                href="#"
                className="block"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </a>
            ))}

            <div className="relative" ref={sportsRef}>
              <button
                onClick={() => setSportsOpen((prev) => !prev)}
                className="flex items-center gap-1"
              >
                Sports & Activities ▾
              </button>
              {sportsOpen && (
                <div className="relative mt-2 bg-white border shadow-md rounded-md py-2 z-40">
                  {[
                    "Football",
                    "Basketball",
                    "Gymnastic",
                    "Tennis",
                    "Handball",
                    "Squash",
                    "Karate",
                    "Taekwondo",
                    "Judo",
                    "MMA",
                    "Kickboxing",
                    "Swimming",
                  ].map((sport) => (
                    <a
                      key={sport}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {sport}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a href="#" className="block" onClick={() => setMenuOpen(false)}>
              Booking
            </a>

            <div className="flex flex-col gap-2 pt-2">
              <button className="bg-gradient-to-r from-teal-500 to-teal-900 text-white px-4 py-1 rounded-md shadow hover:from-white hover:to-white hover:text-[#014e52] transition">
                Login
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-teal-900 text-white px-4 py-1 rounded-md shadow hover:from-white hover:to-white hover:text-[#014e52] transition">
                Register
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
