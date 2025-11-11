import { useRef, useState } from "react";
import ContentSwitcher from "@/components/ContentSwitcher.tsx";
import FormField from "@/components/FormField";

import PresentationInfo from "@/components/info_sections/PresentationInfo.tsx";
import LogoInfo from "@/components/info_sections/LogoInfo.tsx";
import ResumeInfo from "@/components/info_sections/ResumeInfo.tsx";
import SocialInfo from "@/components/info_sections/SocialInfo.tsx";
import { useIsVisible } from "@/util/visibilityDetector";
import { FiArrowUpRight } from "react-icons/fi";

const items = [
  {
    label: "Company presentations",
    content: <PresentationInfo />,
  },
  {
    label: "Brand visibility",
    content: <LogoInfo />,
  },
  {
    label: "Resume book access",
    content: <ResumeInfo />,
  },
  {
    label: "Social media promotion",
    content: <SocialInfo />,
  },
];

interface FormDataState {
  name: string;
  company: string;
  email: string;
  level: string;
  message: string;
}

const SponsorInfo = () => {
  const switcherRef = useRef<HTMLDivElement>(null);
  const switcherVisible = useIsVisible(switcherRef, 0.2);
  console.log(switcherVisible);

  const formRef = useRef<HTMLDivElement>(null);
  const formVisible = useIsVisible(formRef, 0.2);

  const [formData, setFormData] = useState<FormDataState>({
    name: "",
    company: "",
    email: "",
    level: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, company, email, level, message } = formData;
    const emailTo = "avip3@illinois.edu";

    const subject = `Sponsorship Inquiry from ${
      company || "Prospective Sponsor"
    }`;

    const body = `
            Hello,
            
            My name is ${name}.
            Company: ${company}
            Reply-to Email: ${email}
            Sponsorship Level: ${level || "Not specified"}
            
            Message:
            ${message}
            
            Sent from the IEM website sponsorship form.
    `;

    const mailtoLink = `mailto:${emailTo}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  const sponsorLevels = [
    { value: "Lithium", label: "Lithium" },
    { value: "Gold", label: "Gold" },
    { value: "Orange", label: "Orange" },
    { value: "Blue", label: "Blue" },
  ];

  return (
    <div className="flex justify-center min-w-screen container">
      <div className="flex flex-col items-center min-h-screen">
        <div
          ref={switcherRef}
          className={`${
            switcherVisible
              ? "opacity-100 blur-none"
              : "opacity-0 blur-lg translate-y-30"
          } transition-all duration-1000 flex flex-col mx-auto justify-center items-center text-center mt-20 pb-20 text-white p-4 md:p-8 xl:border-b-[0.25px] border-neutral-400/30`}
        >
          <div className="flex flex-col mb-10">
            <span className="text-white text-left font-[450] text-7xl w-fit">
              Interested in sponsoring us?
            </span>
            <span className="text-xl font-light text-left text-neutral-400">
              Sponsoring Illini Electric Motorsports begins a symbiotic
              partnership with significant benefits for both parties.
            </span>
          </div>
          <ContentSwitcher items={items} />
        </div>

        <div
          ref={formRef}
          className={`${
            formVisible
              ? "opacity-100 blur-none translate-y-0"
              : "opacity-0 blur-lg translate-y-30"
          } transition-all duration-1000 flex flex-col justify-center pb-10 mx-5 bg- xl:border-x-[0.25px] border-neutral-400/30 px-23`}
        >
          <span className="text-white font-[450] text-7xl w-fit mx-auto pb-3 pt-10">
            Become a Sponsor
          </span>
          <p className="text-xl font-light text-neutral-400">
            We're looking for partners to help us build the future of mobility.
            Fill out the form below to get in touch!
          </p>
          <div
            className={`${
              formVisible
                ? "opacity-100 blur-none translate-y-0"
                : "opacity-0 blur-lg translate-y-30"
            } transition-all duration-1000 w-full p-8 md:p-10`}
          >
            <form onSubmit={handleSubmit}>
              <div className="flex flex-row">
                <div className="w-1/2 mr-5">
                  <FormField
                    id="name"
                    label="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <FormField
                    id="company"
                    label="Company / Organization"
                    value={formData.company}
                    onChange={handleChange}
                  />

                  <FormField
                    id="email"
                    label="Contact Email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2 ml-5">
                  <FormField
                    id="level"
                    label="Intended Sponsor Level"
                    type="select"
                    value={formData.level}
                    onChange={handleChange}
                    options={sponsorLevels}
                    required={true}
                  />
                  <FormField
                    id="message"
                    label="Message"
                    type="textarea"
                    value={formData.message}
                    onChange={handleChange}
                    required={false}
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  className="
                    group items-center justify-center flex flex-row text-white text-xl bg-black/50 border-[0.25px] border-slate-300/50 hover:border-white/60 hover:pr-8 cursor-pointer text-nowrap rounded-xl w-full px-4 py-3 transition-all duration-300 hover:shadow-lg shadow-white/20 gap-1"
                >
                  <div className="relative w-fit">
                    <span className="font-light">Submit Inquiry</span>
                    <FiArrowUpRight className="absolute -right-6 top-1 opacity-0 transition-all duration-300 translate-y-3 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorInfo;
