import "../index.css";
import logo from "../assets/iem-logo.svg";
import { FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FiArrowRight, FiMenu, FiX } from "react-icons/fi";
import { MdKeyboardArrowDown } from "react-icons/md";
import DropdownContent from "./DropdownContent";
import { useState } from "react";
import {
    aboutContent,
    sponsorContent,
} from "@/util/dropdownContent";

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
      className="flex group items-center group-hover:text-neutral-300 rounded-full transition-colors duration-300 px-4 py-1 z-10 w-full cursor-pointer text-white hover:bg-neutral-900"
    >
      <span className="text-2xl">{linkLabel}</span>
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
    <nav className="navbar z-50 flex flex-row items-center justify-between sticky top-0 px-7 py-5 text-2xl font-light nav-gradient ">
      <a className="flex items-center group z-20" href="/home">
        <img className="size-[60px] mr-4" src={logo} alt="" />
        <div className="overflow-hidden relative w-fit">
          <span className="inline-block text-5xl text-white italic font-[1000] transition-transform duration-200 group-hover:translate-y-full ml-2">
            IEM.
          </span>
          <span className="inline-block text-5xl text-white italic font-[1000] absolute top-0 left-0 transition-transform duration-200 -translate-y-full group-hover:translate-y-0">
            IEM.
          </span>
        </div>
      </a>

            <div className="hidden md:relative md:flex md:flex-row mr-8 text-lg">
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
                    <div
                        className="flex group items-center group-hover:text-neutral-300 rounded-full transition-colors duration-300 px-4 py-1 z-10 w-full cursor-pointer text-white hover:bg-neutral-900">
                        <span className="text-2xl">Cars</span>
                    </div>
                </a>

        <div
          onMouseEnter={() => setContentVisible(true)}
          onMouseLeave={() => setContentVisible(false)}
          className={`${
            contentVisible ? "visible opacity-100" : "invisible opacity-0"
          } transition-opacity duration-300 absolute top-full left-1/2 -translate-x-1/2 pt-2`}
        >
          <div className="text-white transition-all duration-300 bg-neutral-900 rounded-2xl">
            <DropdownContent
              labels={contents[activeIndex].labels}
              subtitles={contents[activeIndex].subtitles}
              links={contents[activeIndex].links}
              content={contents[activeIndex].content}
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-row justify-between">
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
          <span className="pr-6 transition-all duration-250">Mailing List</span>
          <FiArrowRight className="size-[25px] absolute right-0 group-hover:-rotate-45 origin-center transition-transform duration-250" />
        </a>
      </div>

      <div className="flex items-center lg:hidden z-20">
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
          absolute top-full left-0 right-0 bg-neutral-900 shadow-xl
          lg:hidden 
          transition-all duration-300 ease-in-out
          ${
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
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
              <span>About</span>
              <MdKeyboardArrowDown
                className={`${
                  activeDropdown == "about" ? "rotate-180" : "rotate-0"
                } transition-all duration-300 ml-2`}
              />
            </div>
            <div
              className={`${
                activeDropdown == "about"
                  ? "flex translate-y-0"
                  : "hidden -translate-y-4"
              } transition-all duration-300 flex-col ml-5 gap-3 mt-3`}
            >
              <a className="text-neutral-400" href="/about">
                About
              </a>
              <a className="text-neutral-400" href="/teams">
                Teams
              </a>
              <a className="text-neutral-400" href="/join">
                Join
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
              <span>Sponsors</span>
              <MdKeyboardArrowDown
                className={`${
                  activeDropdown == "sponsors" ? "rotate-180" : "rotate-0"
                } transition-all duration-300 ml-2`}
              />
            </div>
            <div
              className={`${
                activeDropdown == "sponsors"
                  ? "flex translate-y-0"
                  : "hidden translate-y-10"
              } transition-all duration-300 flex-col ml-5 gap-3 mt-3`}
            >
              <a className="text-neutral-400" href="/sponsors">
                Our Sponsors
              </a>
              <a className="text-neutral-400" href="/sponsor-into">
                Become a Sponsor
              </a>
            </div>
          </div>
          <div
            onClick={() => {
              activeDropdown == "cars"
                ? setActiveDropdown("")
                : setActiveDropdown("cars");
            }}
            className="text-white py-2 rounded-lg px-3"
          >
            <div className="flex flex-row items-center">
              <span>Cars</span>
              <MdKeyboardArrowDown
                className={`${
                  activeDropdown == "cars" ? "rotate-180" : "rotate-0"
                } transition-all duration-300 ml-2`}
              />
            </div>
            <div
              className={`${
                activeDropdown == "cars"
                  ? "flex translate-y-0"
                  : "hidden -translate-y-4"
              } transition-all duration-300 flex-col ml-5 gap-3 mt-3`}
            >
              <a className="text-neutral-400" href="/cars#electric">
                Electric
              </a>
              <a className="text-neutral-400" href="/cars#combustion">
                Combustion
              </a>
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