import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactHero from "@/components/ContactHero";
import logo from "../assets/logo.png";

import {
  FiMail,
  FiGlobe,
  FiMapPin,
  FiPhone,
} from "react-icons/fi";

function GoldDivider() {
  return (
    <div
      className="flex items-center justify-center gap-2"
      aria-hidden="true"
    >
      <span className="h-px w-12 bg-[#C98B28]" />
      <span className="h-2 w-2 rotate-45 border border-[#C98B28] bg-[#FAF7F0]" />
      <span className="h-px w-12 bg-[#C98B28]" />
    </div>
  );
}

function SectionHeading({ children }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
      <GoldDivider />

      <h2 className="cinzel-font text-center text-2xl text-[#073D2D] sm:text-3xl">
        {children}
      </h2>

      <GoldDivider />
    </div>
  );
}

function ContactItem({ icon: Icon, title, children, href }) {
  const content = (
    <>
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#073D2D] text-[#D6A746] shadow-[0_10px_24px_rgba(7,61,45,0.18)] transition duration-300 group-hover:shadow-[0_14px_30px_rgba(7,61,45,0.25)]">
        <Icon size={30} strokeWidth={1.7} />
      </div>

      <h3 className="cinzel-font mt-4 text-lg text-[#073D2D]">
        {title}
      </h3>

      <p className="mt-2 text-base text-[#34342F]">{children}</p>
    </>
  );

  const classes =
    "group flex flex-col items-center text-center transition duration-300 hover:-translate-y-1";

  return href ? (
    <a href={href} className={classes}>
      {content}
    </a>
  ) : (
    <div className={classes}>
      {content}
    </div>
  );
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <Header page="contact" />

      <main>
        <ContactHero />

        {/* OFFICIAL CONTACT INFORMATION */}
        <section className="px-5 py-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-330 rounded-2xl border border-[#E4BD78] bg-[#FFFDF8] px-6 py-10 shadow-[0_10px_35px_rgba(53,42,22,0.05)] sm:px-10">
            <SectionHeading>OFFICIAL CONTACT INFORMATION</SectionHeading>

            <div className="mx-auto mt-10 grid max-w-4xl gap-10 sm:grid-cols-3">
              <ContactItem
                icon={FiMail}
                title="EMAIL"
                href="mailto:info@cwcmosque.org"
              >
                info@cwcmosque.org
              </ContactItem>

              <ContactItem
                icon={FiGlobe}
                title="WEBSITE"
                href="https://www.cwcmosque.org"
              >
                www.cwcmosque.org
              </ContactItem>

              <ContactItem icon={FiMapPin} title="ADDRESS">
                Karaan District, Mogadishu, Somalia
              </ContactItem>
            </div>
          </div>
        </section>

        {/* AMBASSADORS OF THE WAQF */}
        <section className="px-5 pb-12 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-330">
            <SectionHeading>AMBASSADORS OF THE WAQF</SectionHeading>

            <p className="mx-auto mt-4 max-w-3xl text-center leading-7 text-[#34342F]">
              Honouring our father’s legacy, we serve as Ambassadors of the Waqf and
              remain committed to its vision and purpose for the sake of Allah.
            </p>

            <div className="mx-auto mt-9 grid max-w-5xl gap-6 md:grid-cols-2">
              {/* FOUZIA */}
              <article className="group flex flex-col items-center rounded-2xl border border-[#E8C98F] bg-[#FAF7F0] px-6 py-8 text-center shadow-[0_8px_24px_rgba(53,42,22,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(53,42,22,0.12)] sm:px-10">
                <img
                  src={logo}
                  alt="Cabdirahman Warsame Cilmi Mosque and Orphan Centre"
                  className="h-24 w-24 object-contain"
                />

                <h3 className="cinzel-font mt-5 text-xl  text-[#073D2D]">
                  Fouzia Cabdirahman Warsame
                </h3>

                <p className="mt-1 text-[#A96810]">Ambassador of the Waqf</p>

                <div className="mt-5 h-px w-16 bg-[#C98B28]" />

                <div className="mt-5 flex flex-col items-center gap-3 text-[#34342F]">
                  <a
                    href="tel:+252772275519"
                    className="flex items-center gap-3 transition hover:text-[#A96810]"
                  >
                    <FiPhone className="shrink-0 text-[#073D2D]" />
                    <span>+252-77-227-5519</span>
                  </a>

                  <a
                    href="mailto:info@cwcmosque.org"
                    className="flex items-center gap-3 transition hover:text-[#A96810]"
                  >
                    <FiMail className="shrink-0 text-[#073D2D]" />
                    <span>info@cwcmosque.org</span>
                  </a>

                  <div className="flex items-center gap-3">
                    <FiMapPin className="shrink-0 text-[#073D2D]" />
                    <span>Mogadishu, Somalia</span>
                  </div>
                </div>
              </article>

              {/* KHADIJA */}
              <article className="group flex flex-col items-center rounded-2xl border border-[#E8C98F] bg-[#FAF7F0] px-6 py-8 text-center shadow-[0_8px_24px_rgba(53,42,22,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(53,42,22,0.12)] sm:px-10">
                <img
                  src={logo}
                  alt="Cabdirahman Warsame Cilmi Mosque and Orphan Centre"
                  className="h-24 w-24 object-contain"
                />

                <h3 className="cinzel-font mt-5 text-xl text-[#073D2D]">
                  Khadija Cabdirahman Warsame
                </h3>

                <p className="mt-1 text-[#A96810]">Ambassador of the Waqf</p>

                <div className="mt-5 h-px w-16 bg-[#C98B28]" />

                <div className="mt-5 flex flex-col items-center gap-3 text-[#34342F]">
                  <a
                    href="tel:+16475612402"
                    className="flex items-center gap-3 transition hover:text-[#A96810]"
                  >
                    <FiPhone className="shrink-0 text-[#073D2D]" />
                    <span>+1-647-561-2402</span>
                  </a>

                  <a
                    href="mailto:info@cwcmosque.org"
                    className="flex items-center gap-3 transition hover:text-[#A96810]"
                  >
                    <FiMail className="shrink-0 text-[#073D2D]" />
                    <span>info@cwcmosque.org</span>
                  </a>

                  <div className="flex items-center gap-3">
                    <FiMapPin className="shrink-0 text-[#073D2D]" />
                    <span>Toronto, Canada</span>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
        
      </main>

      <Footer theme="dark" />
    </div>
  );
}