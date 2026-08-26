import logo from "../assets/logo.png";
import {
  FiMail,
  FiPhone,
  FiGlobe,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer({ theme = "dark" }) {
  const isDark = theme === "dark";

  const bg = isDark ? "bg-[#0B2F24]" : "bg-[#FAF7F0]";
  const mainText = isDark ? "text-white" : "text-[#0B3D2E]";
  const goldText = "text-[#C9A13E]";
  const mutedText = isDark ? "text-[#E9E2D6]" : "text-[#5F665F]";
  const border = isDark
    ? "border-[#C9A13E]/20"
    : "border-[#C9A13E]/30";

  return (
    <footer className={`w-full ${bg}`}>
      <div
        className="
          mx-auto
          max-w-[1440px]
          px-5
          py-10
          sm:px-8
          lg:px-12
          lg:py-12
        "
      >
        {/* Top Row */}
        <div
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          {/* Logo + Name */}
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="CWC Logo"
              className="h-14 w-14 shrink-0"
            />

            <div className="cinzel-font flex flex-col">
              <span
                className={`
                  text-sm
                  font-semibold
                  sm:text-base
                  ${mainText}
                `}
              >
                CABDIRAHMAN WARSAME CILMI
              </span>

              <span
                className={`
                  text-xs
                  tracking-[0.12em]
                  ${goldText}
                `}
              >
                ◆ MOSQUE & ORPHAN CENTRE ◆
              </span>
            </div>
          </div>

          {/* Contact Details */}
          <div
            className="
              flex
              flex-col
              gap-4
              sm:flex-row
              sm:flex-wrap
              lg:justify-center
            "
          >
            <a
              href="mailto:info@cwcmosque.org"
              className={`
                flex
                items-center
                gap-2
                text-sm
                transition-colors
                duration-200
                hover:text-[#C9A13E]
                ${mutedText}
              `}
            >
              <FiMail className={goldText} />
              info@cwcmosque.org
            </a>

            <a
              href="tel:+252772275519"
              className={`
                flex
                items-center
                gap-2
                text-sm
                transition-colors
                duration-200
                hover:text-[#C9A13E]
                ${mutedText}
              `}
            >
              <FiPhone className={goldText} />
              +252 77 227 5519
            </a>

            <a
              href="https://www.cwcmosque.org"
              className={`
                flex
                items-center
                gap-2
                text-sm
                transition-colors
                duration-200
                hover:text-[#C9A13E]
                ${mutedText}
              `}
            >
              <FiGlobe className={goldText} />
              www.cwcmosque.org
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#C9A13E]/40
                text-[#C9A13E]
                transition-all
                duration-200
                hover:bg-[#C9A13E]
                hover:text-white
              `}
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#C9A13E]/40
                text-[#C9A13E]
                transition-all
                duration-200
                hover:bg-[#C9A13E]
                hover:text-white
              `}
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              className={`
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-[#C9A13E]/40
                text-[#C9A13E]
                transition-all
                duration-200
                hover:bg-[#C9A13E]
                hover:text-white
              `}
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div
          className={`
            my-8
            border-t
            ${border}
          `}
        />

        {/* Prayer */}
        <div className="flex flex-col items-center text-center">
          <p
            className={`
              cinzel-font
              text-sm
              italic
              leading-7
              sm:text-base
              ${mutedText}
            `}
          >
            May Allah accept from us and you and make this a source of lasting benefit.
          </p>

          <p
            className={`
              cinzel-font
              mt-1
              text-lg
              font-semibold
              ${goldText}
            `}
          >
            AMEEN.
          </p>
        </div>
      </div>
    </footer>
  );
}