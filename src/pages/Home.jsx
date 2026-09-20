import arch1 from "../assets/mainArchitecture.png";
import Header from "@/components/Header";
import ArchitectureImage from "@/components/ArchitectureImage";
import { CiHeart } from "react-icons/ci";
import { PiPlant } from "react-icons/pi";
import mosque from "../assets/svgs/mosque-image.svg"
import book from "../assets/svgs/book-open-image.svg"
import care from "../assets/svgs/hand-heart-image.svg"
import charity from "../assets/svgs/hand-plant-image.svg"
import SEO from "../components/SEO";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
    <SEO
        title="Mosque & Orphan Centre in Mogadishu"
        description="A mosque-centred Waqf in Mogadishu dedicated to worship, Qur’an and Islamic education, and dignified support for registered orphan beneficiaries."
        path="/"
      />
    <div className="min-h-screen bg-[#FAF7F0]">
      <Header page="home" />

        <main
        className="
          mx-auto
          flex
          max-w-360
          flex-col
          gap-10
          px-5
          py-10
          md:px-10
          md:py-16
          lg:flex-row
          lg:items-center
          lg:gap-16
          lg:py-20
        "
      >
        {/* Left Content */}
        <section className="w-full lg:w-1/2">
          <div className="flex flex-col gap-2 md:gap-4">
            <h1
              className="
                cinzel-font
                green-text
                text-2xl
                leading-tight
                sm:text-3xl
                lg:text-4xl
              "
            >
              A WAQF FOR ALLAH. 
            </h1>

            <h1
              className="
                cinzel-font
                green-text
                text-2xl
                leading-tight
                sm:text-3xl
                lg:text-4xl
              "
            >
              A LEGACY FOR GENERATIONS
            </h1>
          </div>

          {/* Gold divider */}
          <div className="my-6 h-0.5 w-24 bg-[#C9A13E] md:w-32" />

          {/* Intro Text */}
          <div
            className="
              montserrat-font
              max-w-xl
              space-y-4
              text-sm
              leading-7
              sm:text-base
              md:text-lg
            "
          >
            <p>
              The Cabdirahman Warsame Cilmi Mosque & Orphan Centre is a waqf
              dedicated for the sake of Allah.
            </p>

            <p>
              A place of worship, knowledge, and care — serving the community
              today and uplifting generations to come.
            </p>
          </div>

          {/* Quran Card */}
          <div
            className="
              relative
              mt-8
              w-full
              max-w-162.5
              rounded-xl
              border
              border-[#C9A13E]/40
              bg-cream
              px-5
              py-6
              shadow-[0_8px_30px_rgba(11,61,46,0.10)]
              transition-all
              duration-300
              ease-out
              md:px-8
              md:py-8
              lg:hover:-translate-y-1
              lg:hover:shadow-[0_14px_35px_rgba(11,61,46,0.15)]
            "
          >
            {/* Ornament */}
            <div
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
            <div
              dir="rtl"
              className="
                l-green-text
                flex
                flex-col
                items-center
                gap-2
                text-center
                text-lg
                leading-[2.1]
                md:text-xl
              "
            >
              <span>
                مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ
              </span>

              <span>
                كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ
                سُنْبُلَةٍ مِائَةُ حَبَّةٍ
              </span>
            </div>

            {/* Divider */}
            <div className="my-5 flex items-center justify-center gap-2">
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
                sm:text-base
                sm:leading-7
              "
            >
              “The example of those who spend their wealth in the way of Allah
              is like a seed [of grain] which grows seven ears; in each ear is a
              hundred grains.”
            </p>

            <p className="reference gold-text mt-4 text-center font-medium">
              (Qur’an 2:261)
            </p>
          </div>
        </section>

            {/* Right Architecture Image */}
            <ArchitectureImage src={arch1} />


        
        </main>

        <div className="w-full green-bg">
  <div
    className="
      mx-auto
      grid
      max-w-360
      grid-cols-1
      gap-10
      px-6
      py-12

      sm:grid-cols-2
      sm:px-10

      lg:grid-cols-4
      lg:gap-0
      lg:px-16
      lg:py-14
    "
  >
    {/* Worship */}
    <div
      className="
        flex
        flex-col
        items-center
        text-center
        px-6
        gap-2
        lg:border-r
        lg:border-[#C9A13E]/30
      "
    >
      <img src={mosque} className="w-12"/>
      
     
            <h3
              className="
                cinzel-font
                text-lg
                font-semibold
                leading-tight
                text-white
              "
            >
              A PLACE OF
              <br />
              WORSHIP
            </h3>

            {/* Divider */}
            <div className="my-1 flex items-center justify-center gap-2">
              <div className="h-px w-10 bg-[#C9A13E]/60 md:w-12" />
              <div className="h-1.5 w-1.5 rotate-45 bg-[#C9A13E]" />
              <div className="h-px w-10 bg-[#C9A13E]/60 md:w-12" />
            </div>
              
            <p
              className="
                montserrat-font
                mt-0
                max-w-60
                text-sm
                leading-6
                text-white
              "
            >
              For men, women and children
            </p>
    </div>

    {/* Knowledge */}
    <div
      className="
        flex
        flex-col
        items-center
        text-center
        px-6
        gap-2
        lg:border-r
        lg:border-[#C9A13E]/30
      "
    >
      <img src={book} className="w-12"/>

      <h3
        className="
          cinzel-font
          text-lg
          font-semibold
          leading-tight
          text-white
        "
      >
        A CENTRE OF
        <br />
        KNOWLEDGE
      </h3>

      {/* Divider */}
      <div className="my-1 flex items-center justify-center gap-2">
        <div className="h-px w-10 bg-[#C9A13E]/60 md:w-12" />
        <div className="h-1.5 w-1.5 rotate-45 bg-[#C9A13E]" />
        <div className="h-px w-10 bg-[#C9A13E]/60 md:w-12" />
      </div>

      <p
        className="
          montserrat-font
          mt-0
          max-w-65
          text-sm
          leading-6
          text-white
        "
      >
        Qur’an, Islamic education and resources
      </p>
    </div>

    {/* Orphans */}
    <div
      className="
        flex
        flex-col
        items-center
        text-center
        px-6
        gap-2
        lg:border-r
        lg:border-[#C9A13E]/30
      "
    >
      <img src={care} className="w-12"/>

      <h3
        className="
          cinzel-font
          text-lg
          font-semibold
          leading-tight
          text-white
        "
      >
        CARE FOR
        <br />
        ORPHANS
      </h3>

      {/* Divider */}
      <div className="my-1 flex items-center justify-center gap-2">
        <div className="h-px w-10 bg-[#C9A13E]/60 md:w-12" />
        <div className="h-1.5 w-1.5 rotate-45 bg-[#C9A13E]" />
        <div className="h-px w-10 bg-[#C9A13E]/60 md:w-12" />
      </div>

      <p
        className="
          montserrat-font
          mt-0
          max-w-67.5
          text-sm
          leading-6
          text-white
        "
      >
        Food, clothing, education and essential support
      </p>
    </div>

    {/* Sadaqah Jariyah */}
    <div
      className="
        flex
        flex-col
        items-center
        text-center
        px-6
        gap-2
        lg:border-r
        lg:border-[#C9A13E]/30
      "
    >
      <img src={charity} className="w-12"/>

      <h3
        className="
          cinzel-font
          text-lg
          font-semibold
          leading-tight
          text-white
        "
      >
        SADAQAH
        <br />
        JARIYAH
      </h3>

      {/* Divider */}
      <div className="my-1 flex items-center justify-center gap-2">
        <div className="h-px w-10 bg-[#C9A13E]/60 md:w-12" />
        <div className="h-1.5 w-1.5 rotate-45 bg-[#C9A13E]" />
        <div className="h-px w-10 bg-[#C9A13E]/60 md:w-12" />
      </div>

      <p
        className="
          montserrat-font
          mt-0
          max-w-62.5
          text-sm
          leading-6
          text-white
        "
      >
        A lasting benefit for generations to come
      </p>
    </div>
  </div>
  <Footer theme="light"/>
</div>
    </div>
  </>
  );
}