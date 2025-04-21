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
      <div className="bg-gradient-to-r from-teal-500 to-teal-900 text-white text-sm py-4">
        <div className="container mx-auto max-w-[1140px] px-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 text-sm">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                class="icon"
                height="1.5em"
                width="1.5em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
              </svg>
              <span>16647</span>
            </div>
            <div className="flex items-center gap-1">
              <FaEnvelope />
              <span>email Us: info@theclub.com.eg</span>
            </div>
          </div>
          <div className="flex items-center gap-4 ">
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
        <div className="container mx-auto max-w-[1140px] flex justify-between items-center">
          <div className="flex items-center gap-8">
            <img src={logo} alt="Logo" className="w-20 h-20 object-contain" />

            <nav className="hidden md:flex gap-6 text-md text-gray-700 font-medium relative">
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

              {/* Sports */}
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

          {/* Auth buttons */}
          <div className="hidden md:flex flex-col ">
            <button className="bg-gradient-to-l cursor-pointer from-[#014e52] to-[#22b69c] text-white w-[120px] px-5 py-1 my-[3px] rounded-[6px] shadow-md transition duration-300 hover:from-white hover:to-white hover:text-[#014e52] hover:border hover:border-none focus:outline-none">
              Login
            </button>
            <button className="bg-gradient-to-l cursor-pointer from-[#014e52] to-[#22b69c] text-white w-[120px] px-5 py-1 my-[3px] rounded-[6px] shadow-md transition duration-300 hover:from-white hover:to-white hover:text-[#014e52] hover:border hover:border-none focus:outline-none">
              Register
            </button>
          </div>

          {/* Hamburger for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-teal-900 text-xl"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#f8f9fa] border-t border-gray-200 shadow-lg px-4 py-4 space-y-2">
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
            <a href="#" className="block" onClick={() => setMenuOpen(false)}>
              Loyalty
            </a>
            <a href="#" className="block" onClick={() => setMenuOpen(false)}>
              Events
            </a>
            <a href="#" className="block" onClick={() => setMenuOpen(false)}>
              News
            </a>
            <a href="#" className="block" onClick={() => setMenuOpen(false)}>
              Championships
            </a>
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
            <a href="#" className="block" onClick={() => setMenuOpen(false)}>
              Booking
            </a>
            <div className="flex flex-col gap-2 pt-2">
              <button className="bg-gradient-to-r from-teal-500 to-teal-900 text-white px-4 py-1 rounded-md shadow hover:from-white hover:to-white hover:text-[#014e52] hover:border hover:border-none focus:outline-none cursor-pointer">
                Login
              </button>
              <button className="bg-gradient-to-r from-teal-500 to-teal-900 text-white px-4 py-1 rounded-md shadow hover:from-white hover:to-white hover:text-[#014e52] hover:border hover:border-none focus:outline-none cursor-pointer">
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
