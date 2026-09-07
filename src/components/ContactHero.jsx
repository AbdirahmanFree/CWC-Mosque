import masjidEarlyVision from "../assets/masjidEarlyVision.png";

export default function ContactHero() {
  return (
    <section className="overflow-hidden bg-[#FAF7F0]">
      <div
        className="
          mx-auto
          grid
          max-w-360
          grid-cols-1
          gap-6
          px-4
          py-6
          sm:px-6
          sm:py-8
          md:px-8
          lg:grid-cols-[40%_60%]
          lg:items-center
          lg:gap-6
          lg:px-8
          lg:py-8
          xl:px-10
        "
      >
        {/* Contact introduction */}
        <div className="relative z-10">
          <h1
            className="
              cinzel-font
              text-3xl
              font-medium
              leading-tight
              text-[#073B2E]
              sm:text-4xl
              lg:text-5xl
            "
          >
            CONTACT US
          </h1>

          {/* Gold divider */}
          <div
            className="my-6 flex w-24 items-center md:w-32"
            aria-hidden="true"
          >
            <span className="h-px flex-1 bg-[#C58A2A]" />

            <span className="h-2 w-2 rotate-45 border-2 border-[#C58A2A] bg-[#FAF7F0]" />

            <span className="h-px flex-1 bg-[#C58A2A]" />
          </div>

          <p className="max-w-110 font-serif text-lg leading-normal text-[#A85F0A] sm:text-xl md:text-2xl">
            Let&apos;s build a legacy of worship, knowledge and care — together.
          </p>

          <p className="mt-5 max-w-115 text-sm leading-7 text-[#1F2925] sm:text-base md:text-[17px]">
            We welcome inquiries, partnership discussions and support from
            institutions and organizations who share our vision and commitment
            to benefit generations to come.
          </p>

          {/* Qur'an card */}
          <div className="mt-7 w-full max-w-117.5 overflow-hidden rounded-xl border border-[#D9B77D] bg-[#FBF8F1]/90 shadow-[0_8px_30px_rgba(11,61,46,0.06)]">
            <div className="relative px-5 py-5 text-center sm:px-7 sm:py-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-16 opacity-20"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 0 50%, transparent 0 18px, #C58A2A 19px 20px, transparent 21px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <p
                dir="rtl"
                lang="ar"
                className="relative font-serif text-xl leading-loose text-[#0B493A] sm:text-2xl"
              >
                وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
              </p>

              <p className="relative mt-2 text-sm leading-6 text-[#202520] sm:text-base">
                “And cooperate in righteousness and piety.”
              </p>

              <p className="relative mt-2 font-serif text-sm text-[#202520] sm:text-base">
                (Qur’an 5:2)
              </p>
            </div>
          </div>
        </div>

        {/* Architectural early vision */}
        <figure className="relative flex min-h-95 flex-col justify-end sm:min-h-112.5 lg:min-h-140">
          <img
            src={masjidEarlyVision}
            alt="Original architectural perspective of the Cabdirahman Warsame Cilmi Mosque and Orphan Centre"
            className="h-full w-full object-contain object-center lg:absolute lg:inset-0"
          />

          <figcaption className="relative z-10 mx-auto mb-2 bg-[#FAF7F0]/85 px-3 py-1 text-center font-serif text-sm text-[#1E2925] backdrop-blur-[1px] sm:text-base lg:mb-3">
            Original architectural perspective — an early vision of the Centre.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}