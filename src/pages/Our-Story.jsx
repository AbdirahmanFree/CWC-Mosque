import {
  Eye,
  Target,
  ShieldCheck,
  Quote,
  Flower2,
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "../components/SEO";
import sitePlan from "../assets/ogSitePlan.png";
import floorPlan from "../assets/ogFloorPlan.png";
import architecturalSection from "../assets/ogarchsect.png";

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

function SectionHeading({ children }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
      <GoldDivider />

      <h2 className="cinzel-font text-center text-2xl  text-[#073D2D] sm:text-3xl">
        {children}
      </h2>

      <GoldDivider />
    </div>
  );
}

function StoryParagraph({ children }) {
  return (
    <div className="relative pt-5 first:pt-0">
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-px w-10 bg-[#C98B28]"
      />

      <p className="text-base leading-7 text-[#292923] sm:leading-8">
        {children}
      </p>
    </div>
  );
}

const drawings = [
  {
    title: "Original Floor Plan",
    image: floorPlan,
    alt: "Original floor plan for the mosque and Centre",
  },
  {
    title: "Original Architectural Section",
    image: architecturalSection,
    alt: "Original architectural section for the mosque and Centre",
  },
];

export default function OurStory() {
  return (
    <>
    <SEO
      title="Our Story and Founder’s Legacy"
      description="Discover the vision and legacy of Cabdirahman Warsame Cilmi and the mosque-centred Waqf being established in Mogadishu for worship, knowledge and care."
      path="/our-story"
    />
    <div className="min-h-screen bg-[#FFFDF8]">
      <Header page="our-story" />

      <main>
        {/* OUR STORY INTRODUCTION */}
        <section className="px-5 py-12 sm:px-8 lg:px-12 lg:py-16">
          <div className="mx-auto grid max-w-360 items-stretch gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-14">
            {/* LEFT — STORY */}
            <div className="flex flex-col">
              <h1 className="cinzel-font
                green-text
                text-2xl
                leading-tight
                sm:text-3xl
                lg:text-4xl">
                OUR STORY
              </h1>

              <p className="mt-4 font-serif text-xl text-[#A96810] sm:text-2xl">
                A Legacy of Faith, Dedication and Service
              </p>

              <div
                className="mt-5 flex items-center gap-2"
                aria-hidden="true"
              >
                <span className="h-px w-14 bg-[#C98B28]" />
                <span className="h-2 w-2 rotate-45 border border-[#C98B28]" />
                <span className="h-px w-14 bg-[#C98B28]" />
              </div>

              <div className="mt-7 space-y-5">
                <StoryParagraph>
                  The Cabdirahman Warsame Cilmi Mosque &amp; Orphan Centre is
                  being established in Mogadishu as a lasting mosque-centred
                  Waqf, dedicated for the sake of Allah and built upon a vision
                  of worship, service and continuing benefit.
                </StoryParagraph>

                <StoryParagraph>
                  Worship of Allah is at its heart. Alongside the Mosque, the
                  Centre will provide Qur’an and Islamic education and dignified
                  essential support for registered orphan beneficiaries, all in
                  keeping with the purpose for which the Waqf was established.
                </StoryParagraph>

                <StoryParagraph>
                  The guiding principle is simple: every building, programme,
                  service, contribution and partnership should serve the purpose
                  for which the land was dedicated — seeking the pleasure of
                  Allah — with the hope that its benefit will continue from one
                  generation to the next.
                </StoryParagraph>

                <StoryParagraph>
                  May Allah accept this Waqf, place barakah in every sincere
                  contribution made for His sake, and make it a source of
                  lasting benefit for the Ummah. Ameen.
                </StoryParagraph>
              </div>

              {/* OUR COMMITMENT */}
              <article className="group relative mt-8 min-h-58 overflow-hidden rounded-2xl bg-[#073D2D] px-7 py-9 text-white shadow-[0_14px_35px_rgba(7,61,45,0.18)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_45px_rgba(7,61,45,0.25)] sm:px-10 lg:mt-auto">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-[#0B5A42]/60 blur-3xl"
                />

                <div className="relative z-10 max-w-lg pr-0 sm:pr-32">
                  <h2 className="cinzel-font text-2xl font-semibold text-[#D6A746] sm:text-3xl">
                    OUR COMMITMENT
                  </h2>

                  <div className="mt-4 h-px w-12 bg-[#D6A746]" />

                  <p className="mt-5 text-lg leading-8 text-[#F6F1E8]">
                    To safeguard this Waqf with integrity, openness and
                    trustworthiness.
                  </p>
                </div>

                <ShieldCheck
                  aria-hidden="true"
                  strokeWidth={1.25}
                  className="absolute bottom-4 right-5 h-28 w-28 text-[#D78A16] transition duration-500 group-hover:scale-105 sm:right-8 sm:h-32 sm:w-32"
                />
              </article>
            </div>

            <div className="flex lg:pt-30">
              
              {/* FOUNDER'S LEGACY */}
              <article
                className="
                  relative
                  flex-1
                  overflow-hidden
                  rounded-2xl
                  border
                  border-[#E4BD78]
                  bg-[#FFFDF8]
                  px-6
                  py-8
                  shadow-[0_8px_28px_rgba(53,42,22,0.04)]
                  sm:px-10
                  sm:py-10
                "
              >
                {/* Decorative side pattern */}
                <div
                  aria-hidden="true"
                  className="
                    absolute
                    inset-y-0
                    left-0
                    w-12
                    border-r
                    border-[#E4BD78]/40
                    opacity-35
                    sm:w-18
                  "
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 10px 10px, transparent 5px, #C98B28 5.5px, transparent 6.5px)",
                    backgroundSize: "20px 20px",
                  }}
                />

                <div className="relative pl-8 sm:pl-14">
                  {/* Heading */}
                  <div className="text-center">
                    <h2 className="cinzel-font text-2xl text-[#073D2D] sm:text-3xl">
                      THE FOUNDER’S LEGACY
                    </h2>

                    <div
                      aria-hidden="true"
                      className="mx-auto mt-4 flex items-center justify-center gap-2"
                    >
                      <span className="h-px w-14 bg-[#C98B28]" />
                      <span className="h-2 w-2 rotate-45 border border-[#C98B28]" />
                      <span className="h-px w-14 bg-[#C98B28]" />
                    </div>
                  </div>

                  {/* Founder’s story */}
                  <div className="mt-7 space-y-5 text-left font-serif text-base leading-7 text-[#34342F] sm:text-lg sm:leading-8">
                    <p>
                      The Cabdirahman Warsame Cilmi Mosque &amp; Orphan Centre honours
                      the vision and legacy of the late Cabdirahman Warsame Cilmi—a man
                      remembered for his devotion to Allah, humility, discipline and
                      service to others.
                    </p>

                    <p>
                      He maintained a close relationship with the Qur’an, attended the
                      mosque faithfully and believed deeply in helping people without
                      seeking recognition. Although he served his country in positions
                      of responsibility, including as a Somali Army commander and
                      Military Attaché in Beijing, he did not wish to be defined by rank
                      or status. He valued sincerity, fairness, family and quiet acts of
                      charity.
                    </p>

                    <p>
                      His vision was to establish a mosque that would remain a lasting
                      source of worship and benefit for the community. The original
                      drawings he left behind preserve that vision and continue to guide
                      the development of the Centre.
                    </p>

                    <p>
                      Today, his family is working to carry this amanah forward by
                      establishing a mosque-centred Waqf that will provide a welcoming
                      place of worship, Qur’an and Islamic education, and dignified
                      support for registered orphan beneficiaries.
                    </p>

                    <p className="font-medium text-[#073D2D]">
                      We pray that Allah accepts this Waqf as Sadaqah Jariyah on his
                      behalf, forgives him, grants him the highest level of Jannah and
                      allows its benefit to continue for generations. Ameen.
                    </p>
                  </div>
                </div>
              </article>

              
            </div>
          </div>
        </section>

        {/* VISION AND MISSION */}
        <section className="px-5 pb-12 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-360 overflow-hidden rounded-2xl border border-[#E4BD78] bg-[#FFFDF8] md:grid-cols-2 md:divide-x md:divide-[#E4BD78]">
            {/* VISION */}
            <article className="flex flex-col items-center px-7 py-9 text-center">
              <SectionHeading>OUR VISION</SectionHeading>

              <Eye
                size={42}
                strokeWidth={1.6}
                className="mt-5 text-[#C87810]"
              />

              <p className="mt-5 max-w-xl text-base leading-7 text-[#292923]">
                To be a vibrant centre of worship, knowledge and care that
                nurtures faith, empowers community and leaves a legacy of
                benefit for all.
              </p>
            </article>

            {/* MISSION */}
            <article className="flex flex-col items-center border-t border-[#E4BD78] px-7 py-9 text-center md:border-t-0">
              <SectionHeading>OUR MISSION</SectionHeading>

              <Target
                size={42}
                strokeWidth={1.6}
                className="mt-5 text-[#C87810]"
              />

              <p className="mt-5 max-w-xl text-base leading-7 text-[#292923]">
                To uphold and develop this Waqf through worship, Islamic
                learning and compassionate care for orphans, serving for the
                sake of Allah with sincerity, excellence and accountability.
              </p>
            </article>
          </div>
        </section>

        {/* A VISION ALREADY DRAWN */}
        <section className="px-5 pb-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-360">
            <SectionHeading>A VISION ALREADY DRAWN</SectionHeading>

            <p className="mx-auto mt-3 max-w-3xl text-center leading-7 text-[#34342F]">
              Before the Centre could be built, a vision for the mosque was
              carefully designed. These original plans preserve that vision and
              help guide the project forward.
            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2 justify-center">
              {drawings.map((drawing) => (
                <figure
                  key={drawing.title}
                  className="group overflow-hidden rounded-xl border border-[#E4BD78] bg-[#FFFDF8] shadow-[0_8px_24px_rgba(53,42,22,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(53,42,22,0.1)]"
                >
                  <div className="h-52 overflow-hidden bg-white p-3">
                    <img
                      src={drawing.image}
                      alt={drawing.alt}
                      className="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <figcaption className="cinzel-font border-t border-[#E4BD78] px-4 py-3 text-center font-semibold text-[#073D2D]">
                    {drawing.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING WAQF STATEMENT */}
        <section className="px-5 pb-16 sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-360 overflow-hidden rounded-2xl border border-[#E4BD78] bg-[#FAF7F0] md:grid-cols-2">
            {/* Trust statement */}
            <article className="flex min-w-0 items-start gap-4 px-5 py-7 sm:items-center sm:gap-5 sm:px-7 sm:py-8">
              <Flower2
                aria-hidden="true"
                size={35}
                strokeWidth={1.2}
                className="mt-1 shrink-0 text-[#C87810] sm:mt-0"
              />

              <p className="min-w-0 text-sm leading-6 text-[#292923] sm:text-base sm:leading-7">
                This Centre is more than a building. It is a trust (amanah) and a
                means of earning the pleasure of Allah, for today, tomorrow and for
                those who come after us.
              </p>
            </article>

            {/* Waqf statement */}
            <article className="flex min-w-0 items-start gap-4 border-t border-[#E4BD78] px-5 py-7 sm:items-center sm:gap-5 sm:px-7 sm:py-8 md:border-l md:border-t-0">
              <Quote
                aria-hidden="true"
                size={35}
                strokeWidth={1.3}
                className="mt-1 shrink-0 fill-[#C79846] text-[#C79846] sm:mt-0"
              />

              <p className="min-w-0 font-serif text-base leading-7 text-[#292923] sm:text-lg sm:leading-8">
                A Waqf upon Waqf.
                <br />
                A legacy that endures.
                <br />
                A reward that we pray continues.
              </p>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
}