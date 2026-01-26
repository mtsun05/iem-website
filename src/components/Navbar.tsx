import "../index.css";
import logo from "../assets/iem-logo.svg";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import DropdownContent from "./DropdownContent";
import { useState } from "react";
import { aboutContent, sponsorContent } from "@/util/dropdownContent";

interface NavlinkProps {
  linkLabel: string;
  index: number;
  setActiveIndex: (index: number) => void;
  setContentVisible: (visible: boolean) => void;
}

const NavLink = ({
  linkLabel,
  index,
  setActiveIndex,
  setContentVisible,
}: NavlinkProps) => {
  return (
    <div
      onMouseEnter={() => {
        setActiveIndex(index);
        setContentVisible(true);
      }}
      onMouseLeave={() => setContentVisible(false)}
      className="flex group items-center group-hover:text-neutral-300 rounded-full transition-colors duration-300 px-3 py-1 w-full cursor-pointer text-white hover:bg-neutral-900 hover:ring ring-white/30"
    >
      <span className="text-xl">{linkLabel}</span>
      <MdKeyboardArrowDown className="ml-1 size-5 group-hover:-rotate-180 transition-transform duration-400" />
    </div>
  );
};

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [contentVisible, setContentVisible] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState("");

  const contents = [aboutContent, sponsorContent];

  return (
    <nav className="navbar nav-gradient z-50 flex flex-row items-center justify-between fixed w-full top-0 px-7 py-5 text-2xl font-light">
      <a className="flex items-center group z-20" href="/">
        <img className="size-[60px] mr-4" src={logo} alt="" />
        <div className="overflow-hidden relative w-fit">
          <span className="inline-block text-5xl text-white italic font-extrabold transition-transform duration-200 group-hover:translate-y-full">
            IEM.
          </span>
          <span className="inline-block text-5xl text-white italic font-extrabold absolute top-0 left-0 transition-transform duration-200 -translate-y-full group-hover:translate-y-0">
            IEM.
          </span>
        </div>
      </a>

      <div className="hidden md:relative md:flex md:flex-row gap-5 text-lg">
        <NavLink
          linkLabel="About"
          index={0}
          setActiveIndex={setActiveIndex}
          setContentVisible={setContentVisible}
        />
        <NavLink
          linkLabel="Sponsors"
          index={1}
          setActiveIndex={setActiveIndex}
          setContentVisible={setContentVisible}
        />
        <a href="/cars">
          <div className="flex group items-center group-hover:text-neutral-300 rounded-full transition-colors duration-300 px-4 py-1 z-10 w-full cursor-pointer text-white hover:bg-neutral-900 hover:ring ring-white/30">
            <span className="text-xl">Cars</span>
          </div>
        </a>

        <div
          onMouseEnter={() => setContentVisible(true)}
          onMouseLeave={() => setContentVisible(false)}
          className={`${
            contentVisible
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          } transition-opacity duration-300 absolute top-full left-1/2 -translate-x-1/2 pt-2`}
        >
          <div className="text-white transition-all duration-300 bg-[#0f0f0f]/90 rounded-2xl drop-shadow-xl drop-shadow-black/50">
            <DropdownContent
              labels={contents[activeIndex].labels}
              subtitles={contents[activeIndex].subtitles}
              links={contents[activeIndex].links}
              content={contents[activeIndex].content}
            />
          </div>
        </div>
      </div>

      <div className="hidden md:flex flex-row justify-between">
        <a
          className="flex flex-row items-center text-white hover:text-neutral-200 transition-colors duration-300 w-fit mx-1"
          href="https://linkedin.com/company/illini-electric-motorsports"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="size-[30px]" />
        </a>
        <a
          className="flex flex-row items-center text-white hover:text-neutral-200 transition-colors duration-300 w-fit mx-1"
          href="https://www.instagram.com/illinoisfsae"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="size-[30px]" />
        </a>
        <a
          className="group relative flex flex-row items-center text-white hover:text-neutral-200 w-fit mx-1"
          href="https://lists.illinois.edu/lists/info/uiuc-fsae-rso"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-xl pr-6 transition-all duration-250">
            Mailing List
          </span>
          <FiArrowRight className="size-5 absolute right-0 group-hover:-rotate-45 origin-center transition-transform duration-250" />
        </a>
      </div>

      <div className="flex items-center md:hidden z-20">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <FiX className="size-8" />
          ) : (
            <FiMenu className="size-8" />
          )}
        </button>
      </div>

      <div
        className={`
          absolute top-0 left-0 right-0 pt-30 bg-neutral-900 shadow-xl
          md:hidden 
          transition-all duration-500 ease-in-out
          ${
            isMobileMenuOpen
              ? "opacity-100 visible max-h-250"
              : "opacity-0 invisible max-h-0"
          }
        `}
      >
        <div className="flex flex-col px-5 py-4 gap-4">
          <div
            onClick={() => {
              activeDropdown == "about"
                ? setActiveDropdown("")
                : setActiveDropdown("about");
            }}
            className="text-white py-2 rounded-lg px-3"
          >
            <div className="flex flex-row items-center">
              <MdKeyboardArrowRight
                className={`${
                  activeDropdown == "about" ? "rotate-90" : "rotate-0"
                } transition-all duration-300 -ml-1 mr-2`}
              />
              <span>About</span>
            </div>
            <div
              className={`${
                activeDropdown == "about"
                  ? "opacity-100 max-h-50"
                  : "opacity-0 max-h-0"
              } overflow-hidden transition-all duration-300 ease-in-out flex-col gap-2 mt-3`}
            >
              <a
                className="flex flex-col hover:bg-neutral-800 rounded-2xl px-4 py-2"
                href="/about"
              >
                <span className="text-white text-lg">About us</span>
                <span className="text-neutral-400 text-base">
                  Find out more about our organization and leads
                </span>
              </a>
              <a
                className="flex flex-col hover:bg-neutral-800 rounded-2xl px-4 py-2"
                href="/teams"
              >
                <span className="text-white text-lg">Teams</span>
                <span className="text-neutral-400 text-base">
                  Discover our subteams, find where you belong
                </span>
              </a>
              <a
                className="flex flex-col hover:bg-neutral-800 rounded-2xl px-4 py-2"
                href="/join"
              >
                <span className="text-white text-lg">Join</span>
                <span className="text-neutral-400 text-base">
                  Get all the information you need to join
                </span>
              </a>
            </div>
          </div>
          <div
            onClick={() => {
              activeDropdown == "sponsors"
                ? setActiveDropdown("")
                : setActiveDropdown("sponsors");
            }}
            className="text-white py-2 rounded-lg px-3"
          >
            <div className="flex flex-row items-center">
              <MdKeyboardArrowRight
                className={`${
                  activeDropdown == "sponsors" ? "rotate-90" : "rotate-0"
                } transition-all duration-300 -ml-1 mr-2`}
              />
              <span>Sponsors</span>
            </div>
            <div
              className={`${
                activeDropdown == "sponsors"
                  ? "opacity-100 max-h-50"
                  : "opacity-0 max-h-0"
              } overflow-hidden transition-all duration-300 ease-in-out flex-col gap-2 mt-3`}
            >
              <a
                className="flex flex-col hover:bg-neutral-800 rounded-2xl px-4 py-2"
                href="/sponsors"
              >
                <span className="text-white text-lg">Our Sponsors</span>
                <span className="text-neutral-400 text-base">
                  Browse a list of our generous sponsors
                </span>
              </a>
              <a
                className="flex flex-col hover:bg-neutral-800 rounded-2xl px-4 py-2"
                href="/sponsor-into"
              >
                <span className="text-white text-lg">Become a Sponsor</span>
                <span className="text-neutral-400 text-base">
                  The how and why behind a partnership with IEM
                </span>
              </a>
            </div>
          </div>
          <div className="text-white py-2 rounded-lg px-3">
            <div className="flex flex-row items-center">
              <a href="/cars">Cars</a>
            </div>
          </div>

          <hr className="border-neutral-700 my-2" />

          <a
            className="flex flex-row items-center text-white hover:text-neutral-200 w-fit py-2 px-3"
            href="https://linkedin.com/company/illini-electric-motorsports"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="size-6 mr-3" />
            <span className="text-lg">LinkedIn</span>
          </a>
          <a
            className="flex flex-row items-center text-white hover:text-neutral-200 w-fit py-2 px-3"
            href="https://www.instagram.com/illinoisfsae"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="size-6 mr-2" />
            <span className="text-lg">Instagram</span>
          </a>
          <a
            className="group flex flex-row items-center text-lg text-white hover:text-neutral-200 w-fit py-2 px-3"
            href="https://lists.illinois.edu/lists/info/uiuc-fsae-rso"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="pr-3">Mailing List</span>
            <FiArrowRight className="size-5 ml-auto" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
