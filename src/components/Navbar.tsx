import "../index.css";
import logo from "../assets/iem-logo.svg";
import {FaLinkedin, FaInstagram} from "react-icons/fa6";
import {FiArrowRight, FiMenu, FiX} from "react-icons/fi";
import {MdKeyboardArrowDown} from "react-icons/md";
import DropdownContent from "./DropdownContent";
import {useState} from "react";
import {
    aboutContent,
    sponsorContent,
    carContent,
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
            <MdKeyboardArrowDown className="ml-1 size-5 group-hover:-rotate-180 transition-transform duration-400"/>
        </div>
    );
};

const Navbar = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [contentVisible, setContentVisible] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const contents = [aboutContent, sponsorContent, carContent];

    return (
        <nav
            className="navbar relative z-50 flex flex-row items-center justify-between sticky top-0 px-7 py-5 text-2xl font-light nav-gradient ">

            <a className="flex items-center group z-20" href="/home">
                <img className="size-[60px] mr-4" src={logo} alt=""/>
                <div className="overflow-hidden relative w-fit">
          <span
              className="inline-block text-5xl text-white italic font-[1000] transition-transform duration-200 group-hover:translate-y-full ml-2">
            IEM.
          </span>
                    <span
                        className="inline-block text-5xl text-white italic font-[1000] absolute top-0 left-0 transition-transform duration-200 -translate-y-full group-hover:translate-y-0">
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
                <NavLink
                    linkLabel="Cars"
                    index={2}
                    setActiveIndex={setActiveIndex}
                    setContentVisible={setContentVisible}
                />

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

            <div className="hidden md:flex flex-row justify-between">
                <a
                    className="flex flex-row items-center text-white hover:text-neutral-200 transition-colors duration-300 w-fit mx-1"
                    href="https://linkedin.com/company/illini-electric-motorsports"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin className="size-[30px]"/>
                </a>
                <a
                    className="flex flex-row items-center text-white hover:text-neutral-200 transition-colors duration-300 w-fit mx-1"
                    href="https://www.instagram.com/illinoisfsae"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram className="size-[30px]"/>
                </a>
                <a
                    className="group relative flex flex-row items-center text-white hover:text-neutral-200 w-fit mx-1"
                    href="https://lists.illinois.edu/lists/info/uiuc-fsae-rso"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="pr-6 transition-all duration-250">Mailing List</span>
                    <FiArrowRight
                        className="size-[25px] absolute right-0 group-hover:-rotate-45 origin-center transition-transform duration-250"/>
                </a>
            </div>

            <div className="flex items-center md:hidden z-20">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-white focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? (
                        <FiX className="size-8"/>
                    ) : (
                        <FiMenu className="size-8"/>
                    )}
                </button>
            </div>

            <div
                className={`
          absolute top-full left-0 right-0 bg-neutral-900 shadow-xl
          md:hidden 
          transition-all duration-300 ease-in-out
          ${
                    isMobileMenuOpen
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-4"
                }
        `}
            >
                <div className="flex flex-col px-5 py-4 gap-4">
                    <a href="/about" className="text-white text-xl py-2 hover:bg-neutral-800 rounded-lg px-3">
                        About
                    </a>
                    <a href="/sponsors" className="text-white text-xl py-2 hover:bg-neutral-800 rounded-lg px-3">
                        Sponsors
                    </a>
                    <a href="/cars" className="text-white text-xl py-2 hover:bg-neutral-800 rounded-lg px-3">
                        Cars
                    </a>

                    <hr className="border-neutral-700 my-2"/>

                    <a
                        className="flex flex-row items-center text-white hover:text-neutral-200 w-fit py-2"
                        href="https://linkedin.com/company/illini-electric-motorsports"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin className="size-6 mr-3"/>
                        <span>LinkedIn</span>
                    </a>
                    <a
                        className="flex flex-row items-center text-white hover:text-neutral-200 w-fit py-2"
                        href="https://www.instagram.com/illinoisfsae"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram className="size-6 mr-3"/>
                        <span>Instagram</span>
                    </a>
                    <a
                        className="group flex flex-row items-center text-white hover:text-neutral-200 w-fit py-2"
                        href="https://lists.illinois.edu/lists/info/uiuc-fsae-rso"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="pr-6">Mailing List</span>
                        <FiArrowRight className="size-6 ml-auto"/>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;