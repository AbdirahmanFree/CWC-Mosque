import masjidEarlyVision from "../assets/masjidEarlyVision.png";

export default function ContactHero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F0]">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 lg:min-h-[650px] lg:grid-cols-[38%_62%]">
        {/* Contact introduction */}
        <div className="relative z-10 px-5 pb-10 pt-12 sm:px-8 md:px-10 lg:py-16 lg:pr-0 xl:pl-14">
          <h1 className="cinzel-font text-[clamp(2.6rem,5vw,4.6rem)] font-medium leading-none tracking-[-0.035em] text-[#073B2E]">
            CONTACT US
          </h1>

          <div className="mt-7 flex w-32 items-center">
            <span className="h-px flex-1 bg-[#C58A2A]" />
            <span className="h-2 w-2 rotate-45 border-2 border-[#C58A2A] bg-[#FAF7F0]" />
            <span className="h-px flex-1 bg-[#C58A2A]" />
          </div>

          <p className="mt-7 max-w-[340px] font-serif text-xl leading-[1.45] text-[#A85F0A] sm:text-2xl">
            Let&apos;s build a legacy of worship,
            <br className="hidden sm:block" /> knowledge and care — together.
          </p>

          <p className="mt-6 max-w-[355px] text-base leading-7 text-[#1F2925] sm:text-[17px]">
            We welcome inquiries, partnership discussions and support from
            institutions and organizations who share our vision and commitment
            to benefit generations to come.
          </p>

          <div className="mt-7 max-w-[365px] overflow-hidden rounded-xl border border-[#D9B77D] bg-[#FBF8F1]/90">
            <div className="relative px-5 py-5 text-center sm:px-7 sm:py-6">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 left-0 w-16 opacity-25"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 0 50%, transparent 0 18px, #C58A2A 19px 20px, transparent 21px)",
                  backgroundSize: "24px 24px",
                }}
              />

              <p
                dir="rtl"
                lang="ar"
                className="relative font-serif text-2xl leading-loose text-[#0B493A] sm:text-[1.7rem]"
              >
                وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ
              </p>
              <p className="relative mt-2 text-sm leading-7 text-[#202520] sm:text-base">
                “And cooperate in righteousness
                <br />
                and piety.”
              </p>
              <p className="relative mt-2 font-serif text-sm text-[#202520] sm:text-base">
                (Qur’an 5:2)
              </p>
            </div>
          </div>
        </div>

        {/* Architectural early vision */}
        <figure className="relative flex min-h-[390px] flex-col justify-end px-2 sm:min-h-[500px] lg:min-h-0 lg:px-0">
          <img
            src={masjidEarlyVision}
            alt="Original architectural perspective of the Cabdirahman Warsame Cilmi Mosque and Orphan Centre"
            className="h-full w-full object-contain object-center lg:absolute lg:inset-0"
          />

          <figcaption className="relative z-10 mx-auto mb-4 bg-[#FAF7F0]/85 px-3 py-1 text-center font-serif text-sm text-[#1E2925] backdrop-blur-[1px] sm:text-base lg:mb-6">
            Original architectural perspective — an early vision of the Centre.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
