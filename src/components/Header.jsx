import { useState } from "react";
import logo from "../assets/logo.png";
import { GoPeople } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

export default function Header({ page }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "OUR STORY", href: "/our-story" },
    { label: "PROGRAMMES & SERVICES", href: "/programmes" },
    { label: "PARTNERS", href: "/partners" },
    { label: "CONTACT", href: "/contact" },
  ];

  return (
    <header
      className="
        sticky
        top-0
        z-50
        w-full
        border-b
        border-[#E9E2D6]
        bg-[#FAF7F0]/95
        backdrop-blur-md
      "
    >
      {/* Main Header */}
      <div
        className="
          mx-auto
          flex
          max-w-[1440px]
          items-center
          justify-between
          gap-3
          px-4
          py-3
          sm:px-5
          md:px-8
          lg:px-10
        "
      >
        {/* Logo + Name */}
        <a
          href="/"
          className="
            flex
            min-w-0
            items-center
            gap-2
            sm:gap-3
            md:gap-4
          "
        >
          <img
            src={logo}
            alt="CWC logo"
            className="
              h-10
              w-10
              shrink-0
              sm:h-12
              sm:w-12
              md:h-14
              md:w-14
            "
          />

          <div className="cinzel-font green-text min-w-0">
            <div
              className="
                truncate
                text-[11px]
                font-semibold
                sm:text-sm
                md:text-lg
                xl:text-xl
              "
            >
              CABDIRAHMAN WARSAME CILMI
            </div>

            <div
              className="
                gold-text
                truncate
                text-[8px]
                tracking-[0.08em]
                sm:text-[10px]
                md:text-xs
                xl:text-sm
              "
            >
              ◆ MOSQUE & ORPHAN CENTRE ◆
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`
                whitespace-nowrap
                text-xs
                transition-colors
                duration-200
                hover:text-[#C9A13E]
                ${page === link.href ? "underline-text" : ""}
              `}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 xl:flex">
          <button
            className="
              flex
              items-center
              gap-2
              border
              border-[#0B3D2E]
              px-4
              py-2
              transition-colors
              duration-200
              hover:bg-[#0B3D2E]
              hover:text-white
            "
          >
            <GoPeople />
            <span className="cinzel-font whitespace-nowrap text-sm">
              PARTNER WITH US
            </span>
          </button>

          <button
            className="
            flex items-center gap-2
            border border-[#C9A13E]
          bg-[#C9A13E]
          px-4 py-2
          text-white
          transition-colors duration-300

          hover:bg-white
          hover:text-[#C9A13E]
            "
          >
            <CiHeart className="text-xl" />
            <span className="cinzel-font whitespace-nowrap text-sm">
              DONATE
            </span>
          </button>
        </div>

        {/* Mobile / Tablet menu */}
        <button
          className="
            shrink-0
            text-3xl
            text-[#0B3D2E]
            xl:hidden
          "
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <IoCloseOutline /> : <IoIosMenu />}
        </button>
      </div>

      {/* Dropdown */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          xl:hidden
          ${
            menuOpen
              ? "max-h-[650px] border-t border-[#E9E2D6] opacity-100"
              : "max-h-0 opacity-0"
          }
        `}
      >
        <nav className="flex flex-col px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`
                border-b
                border-[#E9E2D6]
                py-3
                text-sm
                transition-all
                duration-200
                hover:pl-2
                hover:text-[#C9A13E]
                active:pl-2
                active:text-[#C9A13E]
                ${page === link.href ? "underline-text" : ""}
              `}
            >
              {link.label}
            </a>
          ))}

          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <button
              className="
                flex
                flex-1
                items-center
                justify-center
                gap-2
                border
                border-[#0B3D2E]
                px-4
                py-3
              "
            >
              <GoPeople />
              <span className="cinzel-font text-sm">PARTNER WITH US</span>
            </button>

            <button
              className="
                gold-bg
                flex
                flex-1
                items-center
                justify-center
                gap-2
                px-4
                py-3
                text-white
              "
            >
              <CiHeart />
              <span className="cinzel-font text-sm">DONATE</span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}