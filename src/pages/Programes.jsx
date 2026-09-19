import {
  BookOpen,
  UserRound,
  Landmark,
  ShoppingBasket,
  Shirt,
  Library,
  ShowerHead,
} from "lucide-react";

import { FaFaucetDrip } from "react-icons/fa6";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import hijab from "../assets/hijab.png"
import books from "../assets/books-image.svg"
import ProgrammesHero from "@/components/ProgramesHero";

const programmes = [
  {
    title: "QUR’AN LEARNING",
    description: "Qur’an recitation, tajweed and memorization.",
    icon: BookOpen,
  },
  {
    title: "ISLAMIC LEARNING",
    description: "Aqeedah, Hadith, Fiqh, Seerah, Du’a & Adhkar and Adaab.",
    icon: books,
  },
  {
    title: "WOMEN’S PROGRAMMES",
    description: "Faith, spiritual growth and guidance for women.",
    icon: hijab,
  },
  {
    title: "YOUTH PROGRAMMES",
    description:
      "Knowledge, character and spiritual development for young people.",
    icon: UserRound,
  },
  {
    title: "WORSHIP & COMMUNITY",
    description: "Prayer, worship and community activities.",
    icon: Landmark,
  },
];

const services = [
  {
    title: "FOOD BANK",
    description: "Essential food and household goods.",
    icon: ShoppingBasket,
  },
  {
    title: "CLOTHING & FOOTWEAR",
    description: "New clothing and footwear.",
    icon: Shirt,
  },
  {
    title: "LIBRARY & RESOURCES",
    description: "Islamic books, learning resources and reading space.",
    icon: Library,
  },
  {
    title: "WUDU & FACILITIES",
    description: "Separate facilities for men and women.",
    icon: FaFaucetDrip,
  },
];

function GoldDivider() {
  return (
    <div
      className="flex items-center justify-center gap-2"
      aria-hidden="true"
    >
      <span className="h-px w-10 bg-[#C98B28]" />

      <span className="h-1.5 w-1.5 rotate-45 border border-[#C98B28] bg-[#FFFDF8]" />

      <span className="h-px w-10 bg-[#C98B28]" />
    </div>
  );
}

function SectionHeading({ title, description }) {
  return (
    <div className="mb-5 text-center">
      <div className="flex items-center justify-center gap-3 sm:gap-4">
        <GoldDivider />

        <h2 className="cinzel-font text-2xl text-[#073D2D] sm:text-3xl">
          {title}
        </h2>

        <GoldDivider />
      </div>

      <p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#31312D] sm:text-base">
        {description}
      </p>
    </div>
  );
}

function ProgrammeCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group relative flex min-h-61.25 flex-col items-center overflow-hidden px-5 py-6 text-center transition duration-300 hover:bg-[#FFF9EE]">
      <div className="flex h-18 w-18 items-center justify-center rounded-full bg-[#064532] text-white shadow-[0_7px_18px_rgba(7,61,45,0.2)] transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_12px_24px_rgba(7,61,45,0.28)]">
        {typeof Icon === "string" ? (
          <img
            src={Icon}
            alt=""
            aria-hidden="true"
            className="h-10 w-10 object-contain brightness-0 invert"
          />
        ) : (
          <Icon size={38} strokeWidth={1.6} />
        )}
      </div>

      <h3 className="mt-4 font-serif text-base  text-[#123D31]">
        {item.title}
      </h3>

      <div className="my-3 flex items-center" aria-hidden="true">
        <span className="h-px w-8 bg-[#C98B28]" />

        <span className="h-1.5 w-1.5 rotate-45 border border-[#C98B28] bg-white" />

        <span className="h-px w-8 bg-[#C98B28]" />
      </div>

      <p className="max-w-47.5 text-sm leading-6 text-[#34342F]">
        {item.description}
      </p>

    </article>
  );
}

function ServiceCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group relative flex min-h-55 flex-col items-center overflow-hidden rounded-xl border border-[#E6C487] bg-[#FFFDF8] px-5 py-5 text-center shadow-[0_8px_26px_rgba(53,42,22,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#C98B28] hover:shadow-[0_16px_36px_rgba(53,42,22,0.12)]">
      <div className="flex h-17.5 w-17.5 items-center justify-center rounded-full border border-[#E6C487] bg-white text-[#064532]">
        <Icon size={37} strokeWidth={1.7} />
      </div>

      <h3 className="mt-4 font-serif text-base font-semibold text-[#123D31]">
        {item.title}
      </h3>

      <p className="mt-2 max-w-52.5 text-sm leading-5 text-[#34342F]">
        {item.description}
      </p>

    </article>
  );
}

export default function Programes() {
  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      <Header page="programmes" />

      <main className="overflow-hidden text-[#24241F]">
        <ProgrammesHero />

        {/* Programmes */}
        <section className="mx-auto max-w-362.5 px-5 pb-10 pt-12 sm:px-8 lg:px-12 lg:pt-16">
          <SectionHeading
            title="PROGRAMMES"
            description="The Centre's planned programmes will provide a welcoming enviroment where people of different ages can strengthen their faith,
                          deepen their understanding of Islam and develop character guided by Islamic values"
          />

          <div className="overflow-hidden rounded-xl border border-[#E4BD78] bg-[#FFFDF8]">
            <div className="grid sm:grid-cols-2 lg:grid-cols-5">
              {programmes.map((item, index) => (
                <div
                  key={item.title}
                  className={[
                    index > 0 ? "border-t border-[#E9D5B0]" : "",
                    index % 2 !== 0 ? "sm:border-l" : "",
                    index >= 2 ? "sm:border-t" : "",
                    index > 0 ? "lg:border-l" : "",
                    "lg:border-t-0",
                  ].join(" ")}
                >
                  <ProgrammeCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="mx-auto max-w-330 px-5 pb-16 pt-2 sm:px-8 lg:px-12 lg:pb-20">
          <SectionHeading
            title="SERVICES"
            description="The Centre's planned services will provide practical and respectful support for registered orphan
                          beneficiaries while creating a safe, welcoming and well-equipped enviroment for everyone who visits"
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item) => (
              <ServiceCard key={item.title} item={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}