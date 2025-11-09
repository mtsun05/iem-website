import { useRef } from "react";

import mattermost from "../assets/company-logos/mattermost.svg";
import confluence from "../assets/company-logos/confluence.svg";
import gitlab from "../assets/company-logos/gitlab.svg";

import { FaCalendar } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { useIsVisible } from "../util/visibilityDetector";
import linkedin from "../assets/company-logos/linkedin-logo.svg";
import instagram from "../assets/company-logos/insta-logo.svg";
import youtube from "../assets/company-logos/youtube-logo.svg";
import { FiArrowUpRight } from "react-icons/fi";

const Join = () => {
  const accessRef = useRef<HTMLDivElement>(null);
  const accessVisible = useIsVisible(accessRef, 0.3);

  const generalRef = useRef<HTMLDivElement>(null);
  const generalVisible = useIsVisible(generalRef, 0.3);

  const infoRef = useRef<HTMLDivElement>(null);
  const infoVisible = useIsVisible(infoRef, 0.3);

  const mailingRef = useRef<HTMLDivElement>(null);
  const mailingVisible = useIsVisible(mailingRef, 0.3);

  return (
    <div className="flex flex-col sm:w-2/3 mx-auto my-20">
      <div className="flex flex-col w-full mb-3 items-start">
        <span className="text-white text-7xl  w-fit text-left">
          Discover{" "}
          <span className="bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text text-transparent italic">
            IEM.
          </span>
        </span>
        <span className="text-xl font-light text-neutral-400">
          Utilize our resources that get you familiar with our tools, subteams,
          and meetings.{" "}
          <span className="font-bold">
            Note that there is a $35 entrance fee.
          </span>
        </span>
      </div>

      <div className="flex flex-col my-5">
        <div className="flex flex-col lg:flex-row mb-3">
          <div
            ref={accessRef}
            className={`${
              accessVisible
                ? "opacity-100 blur-none translate-x-0"
                : "opacity-0 blur-lg -translate-x-30"
            } flex flex-col text-white p-5 rounded-xl lg:w-1/2 h-inherit border-[0.25px] border-neutral-400/30 bg-neutral-900 transition-all duration-1000`}
          >
            <span className="text-white text-3xl font-[450]">
              Upon joining, gain access to
            </span>
            <div className="flex flex-col my-2">
              <div className="flex flex-row items-center">
                <img className="size-10 my-5" src={mattermost} alt="" />
                <div className="flex flex-col ml-5">
                  <span className="text-white text-xl ">Mattermost</span>
                  <span className="text-neutral-400 font-light">
                    (our primary form of communication)
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <img className="size-10 my-5" src={confluence} alt="" />
                <div className="flex flex-col ml-5">
                  <span className="text-white text-xl ">Confluence</span>
                  <span className="text-neutral-400 font-light">
                    (the home of our documentation, wikis, and guides)
                  </span>
                </div>
              </div>
              <div className="flex flex-row items-center">
                <img className="size-10 my-5" src={gitlab} alt="" />
                <div className="flex flex-col ml-5">
                  <span className="text-white text-xl ">GitLab</span>
                  <span className="text-neutral-400 font-light">
                    (where all of our software lives)
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2 my-2 lg:my-0 lg:ml-3">
            <div
              ref={generalRef}
              className={`${
                generalVisible
                  ? "opacity-100 blur-none translate-y-0 translate-x-0"
                  : "opacity-0 blur-lg -translate-y-30 translate-x-30"
              } flex flex-col p-5 rounded-xl border-[0.25px] border-neutral-400/30 bg-neutral-900 transition-all duration-1000 delay-100 mb-3`}
            >
              <span className="text-white text-3xl font-[450]">
                General Meetings
              </span>
              <div className="flex items-center mb-2">
                <FaCalendar className="mr-1" color="white" />
                <span className="text-white font-light mr-3">
                  Thursdays 7PM
                </span>
                <IoLocationSharp className="mr-1" color="white" />
                <span className="text-white font-light">MEB 3101</span>
              </div>
              <span className="text-neutral-400 font-light">
                Our general meetings are every Thursday at 7PM in the Sidney Lu
                Mechanical Engineering building room 3101, starting the first
                week of school! Come early in the semester to learn more about
                IEM as a whole, and discover more about our teams and subteams.
              </span>
            </div>
            <div
              ref={infoRef}
              className={`${
                infoVisible
                  ? "opacity-100 blur-non translate-x-0"
                  : "opacity-0 blur-lg translate-x-30"
              } flex flex-col p-5 rounded-xl border-[0.25px] border-neutral-400/30 bg-neutral-900 transition-all duration-1000 delay-200`}
            >
              <span className="text-white text-3xl font-[450] mb-2">
                Info Sessions
              </span>
              <span className="text-neutral-400 font-light">
                Each team will have info sessions on different dates. Come to
                these to get details on the subteams within each team, meet and
                talk to the project leads, and get a good idea of which subteam
                you want to join!
              </span>
            </div>
          </div>
        </div>
        <div
          ref={mailingRef}
          className={`${
            mailingVisible
              ? "opacity-100 blur-none translate-y-0"
              : "opacity-0 blur-lg translate-y-30"
          } flex flex-col md:flex-row p-5 h-full rounded-xl border-[0.25px] border-neutral-400/30 bg-neutral-900 transition-all duration-1000 delay-300`}
        >
          <div className="flex flex-col md:w-1/2 mr-5 mb-5">
            <span className="text-white text-3xl font-[450] mb-2">
              Mailing List
            </span>
            <span className="text-neutral-400 font-light mb-2 pr-15">
              Finally, our mailing list is the way to hear from us before
              getting access to Mattermost (our primary means of communication).
            </span>
            <a
              className="group relative items-center flex flex-row text-white h-fit mr-3 border-[0.25px] border-neutral-400/30 bg-neutral-900 hover:border-white/60 hover:pr-8 cursor-pointer rounded-xl w-fit px-4 py-3 transition-all duration-300 hover:shadow-lg shadow-white/20"
              target="_blank"
              href="https://lists.illinois.edu/lists/info/uiuc-fsae-rso"
            >
              <span className="text-lg font-light">
                Join our mailing list here!
              </span>
              <FiArrowUpRight className="absolute opacity-0 right-2 transition-all duration-300 translate-y-3 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
            </a>
          </div>
          <div className="flex flex-col">
            <span className="text-white text-3xl font-[450] mb-2">
              Social Media
            </span>
            <div className="flex flex-col">
              <div className="flex flex-row mb-2">
                <a
                  className="flex flex-row items-center"
                  href="https://linkedin.com/company/illini-electric-motorsports"
                  target="_blank"
                >
                  <img className="size-[30px]" src={linkedin} alt="" />
                  <span className="text-white text-xl font-light ml-2">
                    Linkedin
                  </span>
                </a>
              </div>
              <div className="flex flex-row mb-2">
                <a
                  className="flex flex-row items-center"
                  href="https://www.instagram.com/illinoisfsae"
                  target="_blank"
                >
                  <img className="size-[30px]" src={instagram} alt="" />
                  <span className="text-white text-xl font-light ml-2">
                    Instagram
                  </span>
                </a>
              </div>
              <div className="flex flex-row mb-2">
                <a
                  className="flex flex-row items-center"
                  href="https://www.youtube.com/@illinoisfsae"
                  target="_blank"
                >
                  <img
                    className="bg-white rounded-sm size-[25px] ml-1"
                    src={youtube}
                    alt=""
                  />
                  <span className="text-white text-xl font-light ml-2">
                    YouTube
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;
