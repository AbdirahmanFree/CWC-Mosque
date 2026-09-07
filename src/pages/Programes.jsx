import {
  BookOpen,
  BookMarked,
  PersonStanding,
  UserRound,
  Landmark,
  ShoppingBasket,
  Shirt,
  Library,
  ShowerHead,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProgrammesHero from "@/components/ProgramesHero";

const programmes = [
  {
    title: "QUR’AN LEARNING",
    description: "Qur’an reading, learning and memorization.",
    icon: BookOpen,
  },
  {
    title: "ISLAMIC LEARNING",
    description: "Aqeedah, Hadith, Fiqh, Seerah, Du’a & Adhkar and Adaab.",
    icon: BookMarked,
  },
  {
    title: "WOMEN’S PROGRAMMES",
    description: "Islamic learning, faith and guidance for women.",
    icon: PersonStanding,
  },
  {
    title: "YOUTH PROGRAMMES",
    description:
      "Islamic learning, faith and character development for young people.",
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
    description: "New clothing and footwear for registered orphans.",
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
    icon: ShowerHead,
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

        <h2 className="cinzel-font text-2xl font-semibold text-[#073D2D] sm:text-3xl">
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
        <Icon size={38} strokeWidth={1.6} />
      </div>

      <h3 className="mt-4 font-serif text-base font-semibold text-[#123D31]">
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-8 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10px 18px, transparent 7px, #D7A955 7.5px, transparent 8.5px)",
          backgroundSize: "20px 20px",
        }}
      />
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

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-8 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10px 18px, transparent 7px, #D7A955 7.5px, transparent 8.5px)",
          backgroundSize: "20px 20px",
        }}
      />
    </article>
  );
}

export default function Programes() {
  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      <Header />

      <main className="overflow-hidden text-[#24241F]">
        <ProgrammesHero />

        {/* Programmes */}
        <section className="mx-auto max-w-362.5 px-5 pb-10 pt-12 sm:px-8 lg:px-12 lg:pt-16">
          <SectionHeading
            title="PROGRAMMES"
            description="Faith, learning and community programmes for the Centre."
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
            description="Practical support and resources to serve the Centre and support registered orphan beneficiaries."
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