import { useState } from "react";
import {
  MapPinned,
  Landmark,
  Users,
  ShieldCheck,
  BookOpen,
  HeartHandshake,
  HandHeart,
  Settings,
  ImageIcon,
  Plus,
  Handshake,
  ArrowRight,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import partnersHero from "../assets/partners-hero.png";

const reasons = [
  {
    title: "LAND ALREADY DEDICATED AS WAQF",
    description:
      "No land acquisition cost. The entire 2,400 m² footprint is already dedicated as Waqf for the sake of Allah, so donor contributions can be directed toward development, facilities and programmes.",
    icon: MapPinned,
  },
  {
    title: "HIGH-IMPACT SADAQAH JARIYAH",
    description:
      "By bringing together a mosque, Qur’an learning and Islamic education, and dignified support for registered orphans, your contribution creates lasting benefit through worship, knowledge and service.",
    icon: Landmark,
  },
  {
    title: "MAKE A REAL DIFFERENCE",
    description:
      "Your partnership helps provide essential facilities and services that will support orphans and the wider community, meeting both immediate needs and long-term goals.",
    icon: Users,
  },
  {
    title: "CLEAR PURPOSE AND ACCOUNTABILITY",
    description:
      "The Centre is established for the sake of Allah, with a clear purpose, and will be developed and managed with integrity, openness and trustworthiness.",
    icon: ShieldCheck,
  },
];

const opportunities = [
  {
    title: "MOSQUE FACILITIES",
    description: "Construction, materials and equipping",
    icon: Landmark,
  },
  {
    title: "QUR’AN LEARNING AND ISLAMIC EDUCATION",
    description: "Classrooms and learning resources",
    icon: BookOpen,
  },
  {
    title: "ORPHAN SUPPORT",
    description: "Essential care and services",
    icon: HeartHandshake,
  },
  {
    title: "COMMUNITY FACILITIES",
    description: "Wudu, amenities and support spaces",
    icon: HandHeart,
  },
  {
    title: "OPERATIONAL SUPPORT",
    description: "Programmes and long-term sustainability",
    icon: Settings,
  },
];

const questions = [
  {
    question: "Is the land for the Centre already secured?",
    answer:
      "Yes. The 2,400 m² site in Karaan District, Mogadishu, has already been dedicated as Waqf for the sake of Allah. This allows partners to support the development of the Centre without the cost of acquiring land.",
  },
  {
    question: "What can our organisation support?",
    answer:
      "Partners may support the Centre as a whole or specific areas, including mosque facilities, Qur’an and Islamic education, orphan support services, community facilities, equipment and operational needs.",
  },
  {
    question: "Can we fund a specific part of the project?",
    answer:
      "Yes. We welcome partnerships for specific components or phases of the Centre. We can discuss your organisation’s priorities and identify an appropriate area of support.",
  },
  {
    question: "How will our contribution be managed and accounted for?",
    answer:
      "The Centre is committed to integrity, openness and trustworthiness. Contributions will be designated for their agreed purpose, with appropriate records and reporting provided to institutional partners.",
  },
  {
    question: "What stage is the project currently at?",
    answer:
      "The Waqf land has been secured and the Centre is currently in the development and partnership-building stage. We are engaging organisations that may wish to participate in bringing the vision into reality.",
  },
];

function GoldDivider() {
  return (
    <div
      className="flex items-center justify-center gap-2"
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-[#C98B28]" />
      <span className="h-2 w-2 rotate-45 border border-[#C98B28] bg-[#FFFDF8]" />
      <span className="h-px w-12 bg-[#C98B28]" />
    </div>
  );
}

function SectionHeading({ title, description }) {
  return (
    <div className="text-center">
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
        <GoldDivider />

        <h2 className="cinzel-font text-2xl text-[#073D2D] sm:text-3xl">
          {title}
        </h2>

        <GoldDivider />
      </div>

      {description && (
        <p className="mx-auto mt-2 max-w-3xl text-sm leading-6 text-[#34342F] sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

function ReasonCard({ item }) {
  const Icon = item.icon;

  return (
    <article className="group flex h-full flex-col items-center rounded-xl border border-[#E8C98F] bg-[#FFFDF8] px-5 py-7 text-center shadow-[0_8px_24px_rgba(53,42,22,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#C98B28] hover:shadow-[0_16px_34px_rgba(53,42,22,0.11)]">
     
      <h3 className="cinzel-font mt-4 max-w-55 text-lg leading-6 text-[#073D2D]">
        {item.title}
      </h3>

      <div className="my-3 h-px w-12 bg-[#C98B28]" />

      <p className="text-sm text-center leading-6 text-[#34342F]">
        {item.description}
      </p>
    </article>
  );
}

function Opportunity({ item }) {
  const Icon = item.icon;

  return (
    <article className="group flex flex-col items-center px-5 py-5 text-center transition duration-300 hover:-translate-y-1">
      <Icon
        size={42}
        strokeWidth={1.6}
        className="text-[#A96810] transition duration-300 group-hover:scale-110"
      />

      <h3 className="cinzel-font mt-3 text-base  text-[#073D2D]">
        {item.title}
      </h3>

      <p className="mt-1 text-sm leading-5 text-[#34342F]">
        {item.description}
      </p>
    </article>
  );
}

export default function Partners() {
  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#FFFDF8]">
      <Header page="partners" />

      <main className="overflow-hidden">
{/* HERO */}
<section
  className="
    relative
    min-h-135
    overflow-hidden
    bg-gradient-to-r
    from-[#073D2D]
    via-[#356B5B]
    to-[#F7F4EC]
  "
>
{/* Hero content */}
<div
  className="
    relative
    z-10
    mx-auto
    flex
    min-h-135
    max-w-400
    flex-col
    items-center
    gap-12
    px-6
    py-14
    sm:px-10
    lg:flex-row
    lg:justify-between
    lg:gap-20
    lg:px-16
    lg:py-20
  "
>
  {/* Left: Hero text */}
  <div className="w-full max-w-xl text-white lg:w-[42%]">
    <p className="cinzel-font text-sm font-semibold tracking-[0.4em] text-[#D6A746] sm:text-base">
      PARTNERS
    </p>

    <h1 className="cinzel-font text-2xl leading-tight sm:text-3xl lg:text-4xl">
      Together for a
      <span className="mt-2 block">Brighter Tomorrow</span>
    </h1>

    <div className="mt-7 flex items-center gap-2" aria-hidden="true">
      <span className="h-px w-24 bg-[#D6A746]" />
      <span className="h-2 w-2 rotate-45 border border-[#D6A746]" />
      <span className="h-px w-24 bg-[#D6A746]" />
    </div>

    <p className="mt-7 max-w-lg text-base leading-8 text-[#F3EFE7]">
      We seek to partner with organisations that share our values and vision,
      working together to build a centre of worship, knowledge and care that benefits
      orphans and the wider community, for the sake of Allah for generations to come.

    </p>
  </div>

  {/* Right: Quran Card */}
  <div
    className="
      relative
      w-full
      max-w-162.5
      rounded-xl
      border
      border-[#C9A13E]/40
      bg-[#F7F4EC]
      px-5
      py-6
      shadow-[0_8px_30px_rgba(11,61,46,0.10)]
      transition-all
      duration-300
      ease-out
      md:px-8
      md:py-8
      lg:w-[45%]
      lg:hover:-translate-y-1
      lg:hover:shadow-[0_14px_35px_rgba(11,61,46,0.15)]
    "
  >
    {/* Ornament */}
    <div
      aria-hidden="true"
      className="
        absolute
        -top-1.25
        left-1/2
        h-2.5
        w-2.5
        -translate-x-1/2
        rotate-45
        bg-[#C9A13E]
      "
    />

    {/* Arabic */}
    <p
      lang="ar"
      dir="rtl"
      className="
        l-green-text
        text-center
        font-serif
        text-2xl
        leading-[2.1]
        md:text-3xl
      "
    >
      هَلْ جَزَاءُ الْإِحْسَانِ إِلَّا الْإِحْسَانُ
    </p>

    {/* Divider */}
    <div
      aria-hidden="true"
      className="my-5 flex items-center justify-center gap-2"
    >
      <div className="h-px w-10 bg-[#C9A13E]/60 md:w-12" />
      <div className="h-1.5 w-1.5 rotate-45 bg-[#C9A13E]" />
      <div className="h-px w-10 bg-[#C9A13E]/60 md:w-12" />
    </div>

    {/* Translation */}
    <p
      className="
        montserrat-font
        text-center
        text-sm
        leading-6
        text-[#292923]
        sm:text-base
        sm:leading-7
      "
    >
      “Is there any reward for goodness except goodness?”
    </p>

    {/* Reference */}
    <p className="reference gold-text mt-4 text-center font-medium">
      Qur’an 55:60
    </p>
  </div>
</div>
</section>

        {/* WHY PARTNER */}
        <section className="px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-360">
            <SectionHeading
              title="WHY PARTNER WITH US?"
              description="A unique opportunity to build upon an existing Waqf and create lasting impact."
            />

            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {reasons.map((item) => (
                <ReasonCard key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        

        {/* WHAT WE CAN BUILD */}
        <section className="px-5 py-14 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-350">
            <SectionHeading
              title="WHAT WE CAN BUILD TOGETHER"
              description="Partnerships can support different aspects of the Centre, including:"
            />

            <div className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-5 lg:divide-x lg:divide-[#D6A746]/50">
              {opportunities.map((item) => (
                <Opportunity key={item.title} item={item} />
              ))}
            </div>
          </div>
        </section>

        {/* QUESTIONS */}
        <section className="px-5 pb-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-350 gap-6 lg:grid-cols-[1.5fr_0.7fr]">
            <div className="rounded-2xl border border-[#E8C98F] bg-[#F5F0E7] p-6 sm:p-8">
              <SectionHeading title="PARTNERSHIP QUESTIONS" />

              <div className="mt-7 space-y-3">
                {questions.map((item, index) => (
                  <div
                    key={item.question}
                    className="overflow-hidden rounded-lg border border-[#E8DECA] bg-[#FFFDF8]"
                  >
                    <button
                      type="button"
                      aria-expanded={openQuestion === index}
                      onClick={() => toggleQuestion(index)}
                      className="group flex w-full items-center justify-between gap-5 px-5 py-4 text-left"
                    >
                      <span className="font-medium text-[#27342E]">
                        {item.question}
                      </span>

                      <Plus
                        size={20}
                        className={`shrink-0 text-[#A96810] transition duration-300 ${
                          openQuestion === index ? "rotate-45" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openQuestion === index
                          ? "max-h-60 opacity-100"
                          : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="border-t border-[#E8DECA] px-5 py-4 text-sm leading-7 text-[#5D584F]">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="flex flex-col items-center justify-center rounded-2xl border border-[#E8C98F] bg-[#FFFDF8] px-7 py-10 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#073D2D] text-[#D6A746]">
                <Handshake size={40} strokeWidth={1.5} />
              </div>

              <h2 className="cinzel-font mt-6 text-2xl leading-8 text-[#073D2D]">
                Let’s build a lasting legacy together.
              </h2>

              <div className="my-5 h-px w-20 bg-[#C98B28]" />

              <p className="leading-7 text-[#34342F]">
                For the sake of Allah.
                <br />
                For our community.
                <br />
                For lasting benefit.
              </p>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}