import { useState } from "react";

import logo from "../assets/iem-logo.svg";

import { MdEmail } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";

import { FaLinkedin, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard
      .writeText("team@illinielectricmotorsports.com")
      .then(() => {
        setCopied(true);
        // Reset the checkmark after 1 seconds
        setTimeout(() => {
          setCopied(false);
        }, 1000);
      });
  };

  return (
    <footer className="w-full text-white px-10 min-h-[300px] flex items-center justify-center pt-56 pb-16 bg- border-t-[0.25px] border-neutral-400/30">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
        <div className="flex flex-col items-start">
          <a href="/home">
            <img className="size-[75px]" src={logo} alt="IEM Logo" />
          </a>
          <span className="mt-3 text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} IEM. All rights reserved.
          </span>
        </div>

        <div className="flex flex-col justify-start text-xl font-light space-y-3">
          <a
            className="hover:text-neutral-400 transition-colors duration-300 w-fit"
            href="/about"
          >
            About Us
          </a>
          <a
            className="hover:text-neutral-400 transition-colors duration-300 w-fit"
            href="/teams"
          >
            Teams
          </a>
          <a
            className="hover:text-neutral-400 transition-colors duration-300 w-fit"
            href="/join"
          >
            Join
          </a>
        </div>

        <div className="flex flex-col justify-start text-xl font-light space-y-3">
          <a
            className="hover:text-neutral-400 transition-colors duration-300 w-fit"
            href="/sponsors"
          >
            Our Sponsors
          </a>
          <a
            className="hover:text-neutral-400 transition-colors duration-300 w-fit"
            href="/sponsor-info"
          >
            Become a Sponsor
          </a>
        </div>

        <div className="flex flex-col justify-start text-xl font-light space-y-3">
          <a
            className="hover:text-neutral-400 transition-colors duration-300 w-fit"
            href="/cars#electric"
          >
            Electric
          </a>
          <a
            className="hover:text-neutral-400 transition-colors duration-300 w-fit"
            href="/cars#combustion"
          >
            Combustion
          </a>
        </div>

        <div className="flex flex-col justify-start text-xl font-light space-y-3">
          <a
            className="group flex flex-row items-center hover:text-neutral-400 transition-colors duration-300 w-fit"
            href="/email"
            onClick={copyEmail}
          >
            {!copied && (
              <MdEmail className="transition-all duration-300 size-[25px]" />
            )}
            {copied && (
              <IoCheckmark className="text-green-500 transition-all duration-300 size-[25px]" />
            )}
            <span className="ml-2">Email</span>
          </a>
          <a
            className="flex flex-row items-center hover:text-neutral-400 transition-colors duration-300 w-fit"
            href="https://linkedin.com/company/illini-electric-motorsports"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="size-[25px]" />
            <span className="ml-2">LinkedIn</span>
          </a>
          <a
            className="flex flex-row items-center hover:text-neutral-400 transition-colors duration-300 w-fit"
            href="https://www.instagram.com/illinoisfsae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="size-[25px]" />
            <span className="ml-2">Instagram</span>
          </a>
          <a
            className="group relative flex flex-row items-center hover:text-neutral-400 w-fit"
            href="https://lists.illinois.edu/lists/info/uiuc-fsae-rso"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiArrowUpRight className="size-[25px] absolute left-0 group-hover:translate-x-27 transition-transform duration-250" />
            <span className="pl-8 pr-0 group-hover:pl-0 group-hover:pr-8 transition-all duration-250">
              Mailing List
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
