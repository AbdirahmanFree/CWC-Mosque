import { FiArrowLeft, FiClock } from "react-icons/fi";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ComingSoon({
  title = "Coming Soon",
  page = "",
}) {
  return (
    <div className="flex min-h-screen flex-col bg-[#FAF7F0]">
      <Header page={page} />

      <main className="relative flex flex-1 items-center justify-center overflow-hidden px-5 py-20">
        {/* Decorative background */}
        <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-[#C9A13E]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#0B3D2E]/10 blur-3xl" />

        <section className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-[#E8DECA] bg-white px-6 py-16 text-center shadow-[0_24px_70px_rgba(11,61,46,0.10)] sm:px-12 sm:py-20">
          {/* Top detail */}
          <div className="mx-auto mb-8 flex max-w-xs items-center gap-4">
            <div className="h-px flex-1 bg-[#C9A13E]/40" />

            <div className="relative flex h-16 w-16 items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#C9A13E]/15" />

              <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#0B3D2E] text-[#F4D77D] shadow-[0_10px_28px_rgba(11,61,46,0.22)]">
                <FiClock className="text-2xl" />
              </span>
            </div>

            <div className="h-px flex-1 bg-[#C9A13E]/40" />
          </div>

          <p className="cinzel-font text-sm tracking-[0.22em] text-[#C9A13E]">
            CWC MOSQUE & ORPHAN CENTRE
          </p>

          <h1 className="cinzel-font mt-5 text-4xl font-semibold uppercase leading-tight text-[#0B3D2E] sm:text-5xl">
            {title}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-[#5F665F] sm:text-lg">
            This page is currently being prepared. Please check back soon for
            updates and further information.
          </p>

          <a
            href="/"
            className="
              cinzel-font
              group
              mx-auto
              mt-9
              inline-flex
              items-center
              justify-center
              gap-3
              rounded-xl
              bg-[#0B3D2E]
              px-7
              py-4
              font-semibold
              tracking-wide
              text-[#F4D77D]
              shadow-[0_12px_28px_rgba(11,61,46,0.20)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-[#C9A13E]
              hover:text-white
              hover:shadow-[0_16px_34px_rgba(201,161,62,0.25)]
            "
          >
            <FiArrowLeft className="transition-transform duration-300 group-hover:-translate-x-1" />
            RETURN HOME
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}