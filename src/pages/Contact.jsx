import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import logo from "../assets/logo.png";
import ContactHero from "@/components/ContactHero";

import {
  FiMail,
  FiPhone,
  FiGlobe,
  FiMapPin,
  FiSend,
  FiPlus,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Contact() {
  const [topic, setTopic] = useState("General Enquiry");
  const [openFaq, setOpenFaq] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [formError, setFormError] = useState(""); 

  const topics = [
    "General Enquiry",
    "Donation & Waqf",
    "Partnership Opportunity",
    "Volunteering",
    "Media & Press",
    "Other",
  ];

  const faqs = [
    {
      question: "How do I make a donation?",
      answer:
        "You can contact the Centre directly through info@cwcmosque.org for current donation information and institutional contribution enquiries.",
    },
    {
      question: "What is a waqf?",
      answer:
        "A waqf is a charitable endowment dedicated for a continuing beneficial purpose. The Centre is being developed upon land donated for the sake of Allah.",
    },
    {
      question: "How can my organisation partner with you?",
      answer:
        "Institutions and organisations can contact the Centre to discuss partnership opportunities related to construction, programmes and services.",
    },
    {
      question: "Can I volunteer?",
      answer:
        "Volunteer opportunities will depend on the Centre's stage of development and operational needs. You can contact us to express your interest.",
    },
    {
      question: "Can partners be publicly recognised?",
      answer:
        "Yes, where a partner chooses to be publicly recognised. Partners who prefer privacy or anonymity will also be respected.",
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setFormStatus("submitting");
    setFormError("");

    try {
      const response = await fetch("https://formspree.io/f/mqpkbldl", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("The message could not be sent.");
      }

      form.reset();
      setTopic("General Enquiry");
      setFormStatus("success");
    } catch (error) {
      setFormError("Something went wrong. Please try again.");
      setFormStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF7F0]">
      <Header page="/contact" />

      <ContactHero />


      {/* FORM + FAQ */}
      <section className="bg-[#FAF7F0]">
        <div
          className="
            mx-auto
            grid
            max-w-[1440px]
            grid-cols-1
            gap-8
            px-5
            py-16
            md:px-10
            lg:grid-cols-[1.5fr_1fr]
            lg:gap-10
            lg:py-20
          "
        >
          {/* LEFT - FORM */}
          <form
            onSubmit={handleSubmit}
            //onSubmit={(event) => event.preventDefault()}
            className="rounded-3xl border border-[#E8DECA] bg-white p-6 shadow-[0_18px_55px_rgba(11,61,46,0.08)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(11,61,46,0.12)] sm:p-8 lg:p-10"
          >
            <input type="hidden" name="topic" value={topic} />
            {formStatus === "success" ? (
            <div
              role="status"
              className="flex min-h-[550px] animate-[fadeIn_500ms_ease-out] flex-col items-center justify-center text-center"
            >
              <div className="relative flex h-24 w-24 items-center justify-center">
                <div className="absolute inset-0 animate-ping rounded-full bg-[#C9A13E]/20" />

                <div className="relative flex h-20 w-20 animate-[bounce_700ms_ease-out_1] items-center justify-center rounded-full bg-[#0B3D2E] shadow-[0_14px_35px_rgba(11,61,46,0.25)]">
                  <svg
                    viewBox="0 0 52 52"
                    className="h-10 w-10"
                    aria-hidden="true"
                  >
                    <path
                      d="M14 27l8 8 17-19"
                      fill="none"
                      stroke="#F4D77D"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <h2 className="cinzel-font mt-7 text-2xl font-semibold text-[#0B3D2E]">
                MESSAGE SENT
              </h2>

              <p className="mt-3 max-w-sm leading-7 text-[#5F665F]">
                Thank you for contacting us. We will respond as soon as possible.
              </p>

              <button
                type="button"
                onClick={() => setFormStatus("idle")}
                className="cinzel-font mt-7 rounded-xl border border-[#C9A13E] px-6 py-3 font-semibold text-[#0B3D2E] transition-all duration-300 hover:bg-[#C9A13E] hover:text-white"
              >
                SEND ANOTHER MESSAGE
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6 flex items-center gap-4">
              <div className="h-px w-16 bg-[#C9A13E]/50" />
              <span className="cinzel-font text-sm tracking-[0.18em] text-[#C9A13E]">
                SEND A MESSAGE
              </span>
              <div className="h-px flex-1 bg-[#C9A13E]/25" />
            </div>

            {/* Topic */}
            <div className="mt-8">
              <label className="cinzel-font green-text text-sm tracking-[0.12em]">
                TOPIC <span className="text-[#C9A13E]">*</span>
              </label>

              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {topics.map((item) => (
                  <button
                    key={item}
                    type="button"
                    aria-pressed={topic === item}
                    onClick={() => setTopic(item)}
                    className={`
                      group
                      relative
                      overflow-hidden
                      rounded-xl
                      border
                      px-4
                      py-3.5
                      text-left
                      transition-all
                      duration-300
                      ease-out
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#C9A13E]
                      focus-visible:ring-offset-2
                      ${
                        topic === item
                          ? "-translate-y-0.5 border-[#0B3D2E] bg-[#0B3D2E] text-[#F4D77D] shadow-[0_8px_20px_rgba(11,61,46,0.18)]"
                          : "border-[#E4DCCB] bg-[#FFFCF6] text-[#18392D] hover:-translate-y-0.5 hover:border-[#C9A13E] hover:bg-white hover:shadow-[0_8px_18px_rgba(11,61,46,0.08)]"
                      }
                    `}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Name + Email */}
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
              <FormField
                label="FULL NAME"
                required
                placeholder="Your full name"
                name="name"
              />

              <FormField
                label="EMAIL ADDRESS"
                required
                type="email"
                placeholder="you@example.com"
                name="email"
              />
            </div>

            {/* Organisation */}
            <div className="mt-6">
              <label className="cinzel-font green-text text-sm tracking-[0.12em]">
                ORGANISATION{" "}
                <span className="font-normal normal-case text-[#8A7F6A]">
                  (optional)
                </span>
              </label>

              <input
                type="text"
                name="organisation"
                placeholder="Your mosque, company, foundation or organisation"
                className="
                  mt-3 w-full rounded-xl border border-[#E4DCCB]
                  bg-[#FFFCF6] px-5 py-4 text-[#18392D] outline-none
                  shadow-sm transition-all duration-300
                  hover:border-[#C9A13E]/70 hover:shadow-md
                  focus:border-[#C9A13E] focus:bg-white
                  focus:ring-4 focus:ring-[#C9A13E]/10
                "
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="cinzel-font green-text text-sm tracking-[0.12em]">
                YOUR MESSAGE <span className="text-[#C9A13E]">*</span>
              </label>

              <textarea
                name="message"
                required
                rows="7"
                placeholder="How can we help, or how would you like to get involved?"
                className="
                  mt-3 w-full resize-none rounded-xl border border-[#E4DCCB]
                  bg-[#FFFCF6] px-5 py-4 text-[#18392D] outline-none
                  shadow-sm transition-all duration-300
                  hover:border-[#C9A13E]/70 hover:shadow-md
                  focus:border-[#C9A13E] focus:bg-white
                  focus:ring-4 focus:ring-[#C9A13E]/10
                 "
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="
                group mt-7 flex w-full items-center justify-center gap-3
                rounded-xl bg-[#0B3D2E] px-5 py-4 text-[#C9A13E]
                shadow-[0_12px_28px_rgba(11,61,46,0.2)]
                transition-all duration-300
                hover:-translate-y-1 hover:bg-[#C9A13E] hover:text-white
                disabled:cursor-not-allowed disabled:opacity-60
              "
            >
              <FiSend
                className={
                  formStatus === "submitting"
                    ? "animate-pulse"
                    : "transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                }
              />

              <span className="cinzel-font font-semibold tracking-wide">
                {formStatus === "submitting" ? "SENDING..." : "SEND MESSAGE"}
              </span>
            </button>
            {formStatus === "error" && (
              <p role="alert" className="mt-4 text-center text-sm text-red-600">
                {formError}
              </p>
            )}

            <p className="mt-4 text-center text-sm text-[#807665]">
              We aim to respond as soon as possible.
            </p>
            </>
          )}
          </form>

          {/* RIGHT - FAQ */}
          <div className="rounded-3xl border border-[#E8DECA] bg-white p-6 shadow-[0_18px_55px_rgba(11,61,46,0.07)] sm:p-8 lg:p-10">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-px flex-1 bg-[#C9A13E]/25" />
              <span className="cinzel-font text-sm tracking-[0.18em] text-[#C9A13E]">
                FAQS
              </span>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.question}
                  className={`
                    group overflow-hidden rounded-2xl border bg-[#FFFCF6]
                    transition-all duration-300 ease-out
                    ${
                      openFaq === index
                        ? "-translate-y-0.5 border-[#C9A13E]/70 shadow-[0_12px_28px_rgba(11,61,46,0.11)]"
                        : "border-[#E4DCCB] hover:-translate-y-0.5 hover:border-[#C9A13E]/60 hover:shadow-[0_10px_24px_rgba(11,61,46,0.08)]"
                    }
                  `}
                >
                  <button
                    type="button"
                    aria-expanded={openFaq === index}
                    onClick={() => toggleFaq(index)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-between
                      gap-4
                      px-5
                      py-5
                      text-left
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-inset
                      focus-visible:ring-[#C9A13E]
                    "
                  >
                    <span className="cinzel-font green-text font-medium">
                      {faq.question}
                    </span>

                    <span
                      className={`
                        flex h-9 w-9 shrink-0 items-center justify-center rounded-full
                        border border-[#C9A13E]/35 text-[#C9A13E]
                        transition-all duration-300
                        group-hover:border-[#C9A13E] group-hover:bg-[#C9A13E]/10
                        ${openFaq === index ? "rotate-45 bg-[#C9A13E]/10" : ""}
                      `}
                    >
                      <FiPlus className="text-xl" />
                    </span>
                  </button>

                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-500
                      ease-in-out
                      ${
                        openFaq === index
                          ? "max-h-48 opacity-100"
                          : "max-h-0 opacity-0"
                      }
                    `}
                  >
                    <p className="border-t border-[#E4DCCB]/70 px-5 pb-5 pt-4 text-sm leading-7 text-[#5F665F]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Box */}
            <div className="green-bg mt-10 rounded-2xl p-7 text-white shadow-[0_16px_36px_rgba(11,61,46,0.18)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(11,61,46,0.24)]">
              <h3 className="cinzel-font text-[#C9A13E]">FOLLOW US</h3>

              <div className="mt-5 flex gap-4">
                <SocialIcon icon={<FaFacebookF />} />
                <SocialIcon icon={<FaInstagram />} />
                <SocialIcon icon={<FaYoutube />} />
              </div>

              <p className="mt-6 max-w-sm leading-7 text-[#E9E2D6]">
                Stay updated on the project’s progress and share the opportunity
                for others to participate in this waqf.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="bg-[#F1ECE2]">
        <div
          className="
            mx-auto
            flex
            max-w-[1200px]
            flex-col
            items-center
            gap-8
            px-5
            py-14
            md:px-10
            lg:flex-row
            lg:justify-between
            lg:py-16
          "
        >
          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
            <img
              src={logo}
              alt=""
              className="h-20 w-20 object-contain"
            />

            <div>
              <h2
                className="
                  cinzel-font
                  green-text
                  text-3xl
                  font-semibold
                "
              >
                INTERESTED IN PARTNERING?
              </h2>

              <p className="mt-3 max-w-2xl text-base leading-8 text-[#4E4A43]">
                Organisations, businesses, foundations and institutions can
                partner with us to support the construction, programmes and
                services of the Centre.
              </p>
            </div>
          </div>

          <a
            href="/partners"
            className="
              shrink-0
              bg-[#C9A13E]
              px-8
              py-4
              cinzel-font
              font-semibold
              text-white
              transition
              hover:bg-white
              hover:text-[#C9A13E]
              hover:ring-1
              hover:ring-[#C9A13E]
            "
          >
            PARTNER WITH US
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}



function FormField({ label, name, required, ...props }) {
  return (
    <label>
      <span className="cinzel-font green-text text-sm tracking-[0.12em]">
        {label}
        {required && <span className="text-[#C9A13E]"> *</span>}
      </span>

      <input name={name} required={required} {...props} />
    </label>
  );
}

function SocialIcon({ icon }) {
  return (
    <a
      href="#"
      className="
        flex
        h-11
        w-11
        items-center
        justify-center
        rounded-full
        border
        border-[#C9A13E]/40
        text-[#C9A13E]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-[#C9A13E]
        hover:text-white
        hover:shadow-[0_8px_18px_rgba(201,161,62,0.28)]
      "
    >
      {icon}
    </a>
  );
}
