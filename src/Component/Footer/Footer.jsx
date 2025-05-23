import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import googlePlay from "../../assets/image/google-play.svg";
import appStore from "../../assets/image/app-store.svg";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-gradient-to-b from-[#00363a] to-[#1fc6ac] text-white px-6 md:px-20 py-10">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <h3 className="text-lg font-bold mb-4">{t("footer.ourClub")}</h3>
          <ul className="space-y-2 text-sm">
            <li>{t("footer.termsConditions")}</li>
            <li>{t("footer.privacyPolicy")}</li>
            <li>{t("footer.contactUs")}</li>
            <li>{t("footer.faq")}</li>
            <li>{t("footer.ministerWelcome")}</li>
            <li>{t("footer.boardMembers")}</li>
            <li>{t("footer.teamwork")}</li>
            <li>{t("footer.boardChairmanWord")}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">{t("footer.theClub")}</h3>
          <ul className="space-y-2 text-sm">
            <li>{t("footer.booking")}</li>
            <li>{t("footer.events")}</li>
            <li>{t("footer.ourClub")}</li>
            <li>{t("footer.loyalty")}</li>
            <li>{t("footer.championships")}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">{t("footer.contactUs")}</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> 16647
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> info@theclub.com.eg
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> {t("footer.location")}
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13822.154324113733!2d30.990938!3d29.992688000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145851571c5a9fa9%3A0x6c39bb1e71a9bf6c!2z2YbYp9iv2Yog2KfZhNmG2KfYr9mK!5e0!3m2!1sen!2seg!4v1687179726030!5m2!1sen!2seg"
            width="300"
            height="150"
            allowFullScreen=""
            loading="lazy"
            style={{ borderRadius: "12px" }}
            className="border-none"
          ></iframe>

          <a
            href="https://play.google.com/store/apps/details?id=com.theclubapp"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg w-[300px] h-[70px] mt-2 "
          >
            <img src={googlePlay} alt="Google Play" className="w-6 h-6" />
            <div className="text-left">
              <h6 className="text-xs">{t("footer.downloadNow")}</h6>
              <h5 className="text-sm font-bold">{t("footer.googlePlay")}</h5>
            </div>
          </a>

          <a
            href="https://apps.apple.com/app/id6444744575"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg w-[300px] h-[70px] "
          >
            <img src={appStore} alt="App Store" className="w-6 h-6" />
            <div className="text-left">
              <h6 className="text-xs">{t("footer.downloadNow")}</h6>
              <h5 className="text-sm font-bold">{t("footer.appStore")}</h5>
            </div>
          </a>
        </div>
      </div>

      <div className="border-t border-white mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© Copyright 2023 TheClub</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-xl">
          <FaFacebookF className="hover:text-gray-300 cursor-pointer" />
          <FaInstagram className="hover:text-gray-300 cursor-pointer" />
          <FaLinkedinIn className="hover:text-gray-300 cursor-pointer" />
          <FaWhatsapp className="hover:text-gray-300 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
