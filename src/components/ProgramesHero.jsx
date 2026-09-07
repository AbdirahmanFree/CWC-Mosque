import masjidEarlyVision from "../assets/ogFloorPlan.png";

export default function ProgrammesHero() {
  return (
    <section className="overflow-hidden bg-[#FAF7F0]">
      <div
        className="
          mx-auto
          grid
          max-w-360
          grid-cols-1
          gap-10
          px-5
          py-10
          md:px-10
          md:py-16
          lg:grid-cols-2
          lg:items-center
          lg:gap-16
          lg:py-20
        "
      >
        {/* Introduction */}
        <div className="relative z-10">
          <div className="flex flex-col gap-2 md:gap-4">
            <h1
              className="
                cinzel-font
                text-3xl
                font-medium
                uppercase
                leading-tight
                text-[#073B2E]
                sm:text-4xl
                lg:text-5xl
              "
            >
              PROGRAMMES &amp;
            </h1>

            <h1
              className="
                cinzel-font
                text-3xl
                font-medium
                uppercase
                leading-tight
                text-[#073B2E]
                sm:text-4xl
                lg:text-5xl
              "
            >
              SERVICES
            </h1>
          </div>

          <p className="mt-4 font-serif text-lg leading-relaxed text-[#A85F0A] sm:text-xl md:text-2xl">
            Worship. Knowledge. Care. Compassion.
          </p>

          {/* Gold divider */}
          <div
            className="my-6 flex w-24 items-center md:w-32"
            aria-hidden="true"
          >
            <span className="h-px flex-1 bg-[#C58A2A]" />

            <span className="h-2 w-2 rotate-45 border-2 border-[#C58A2A] bg-[#FAF7F0]" />

            <span className="h-px flex-1 bg-[#C58A2A]" />
          </div>

          <p className="max-w-117.5 text-sm leading-7 text-[#1F2925] sm:text-base md:text-[17px]">
            The Centre will provide essential services that strengthen faith,
            nurture knowledge and care for those in need — with a special focus
            on registered orphan beneficiaries.
          </p>

          {/* Hadith card */}
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
                إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ
              </p>

              <p className="relative mt-2 text-sm leading-6 text-[#202520] sm:text-base">
                “Verily, actions are only by intentions.”
              </p>

              <p className="relative mt-2 font-serif text-sm text-[#202520] sm:text-base">
                (Sahih al-Bukhari)
              </p>
            </div>
          </div>
        </div>

        {/* Floor-plan image */}
        <figure className="flex w-full flex-col items-center justify-center">
          <img
            src={masjidEarlyVision}
            alt="Original architectural floor plan showing an early vision of the mosque"
            className="
              h-auto
              max-h-115
              w-full
              max-w-167.5
              object-contain
              object-center
              mix-blend-multiply
            "
          />

          <figcaption className="mt-3 max-w-150 text-center font-serif text-sm text-[#1E2925] sm:text-base">
            Original floor plan — an early vision of the mosque.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}