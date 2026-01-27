import { useIsVisible } from "../util/visibilityDetector.ts";
import { useRef, useState } from "react";

import ButtonLink from "../components/ButtonLink.tsx";
import CompanyBanner from "../components/CompanyBanner.tsx";
import CountUp from "../components/Counter.tsx";
import { companyIcons, sponsorIcons } from "../util/companyIcons.ts";

import video from "../assets/IEM-video-final.mp4";
import team_pic from "../assets/iem-team-pic.png";
import landing1 from "../assets/landing-card-1.png";
import landing2 from "../assets/landing-card-2.png";
import rivianpic from "@/assets/rivian_pic2.jpg";
import team_pic2 from "@/assets/iem-team-pic2.jpg";

import { IoPeopleSharp } from "react-icons/io5";
import { ImBooks } from "react-icons/im";
import { FaUserGraduate } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaWrench } from "react-icons/fa";
import { FaLayerGroup } from "react-icons/fa6";
import { FaHandshakeSimple } from "react-icons/fa6";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

function Home() {
  const engineeringRef = useRef<HTMLSpanElement>(null);
  const engineeringVisible = useIsVisible(engineeringRef, 0.2);

  const welcomeSpanRef = useRef<HTMLSpanElement>(null);
  const welcomeSpanVisible = useIsVisible(welcomeSpanRef, 0.2);

  const excellenceRef = useRef<HTMLSpanElement>(null);
  const excellenceVisible = useIsVisible(excellenceRef, 0.2);

  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerVisible = useIsVisible(bannerRef, 0.2);

  const offerRef = useRef<HTMLDivElement>(null);
  const offerVisible = useIsVisible(offerRef, 0.2);

  const statsRef = useRef<HTMLDivElement>(null);
  const statsVisible = useIsVisible(statsRef, 0.2);

  const expRequired = useRef<HTMLDivElement>(null);
  const expVisible = useIsVisible(expRequired, 0.2);

  const contentImg = useRef<HTMLDivElement>(null);
  const contentImgVisible = useIsVisible(contentImg, 0.2);

  const countContainer = useRef<HTMLDivElement>(null);

  const majors = [
    "Aerospace Engineering",
    "Mechanical Engineering",
    "Business",
    "Electrical Engineering",
    "Computer Science",
    "Systems Engineering",
    "Accounting",
  ];

  const [majorSelection, setMajorSelection] = useState<string>(majors[0]);
  const [exiting, setExiting] = useState<boolean>(false);

  const [contentSource, setContentSource] = useState<string>(landing1);
  const [activeContent, setActiveContent] = useState<string>("engineering");

  useGSAP(() => {
    if (!statsVisible) return;
    const intervalId = setInterval(() => {
      setExiting(true);
      setTimeout(() => {
        setMajorSelection((prev) => {
          let index = majors.indexOf(prev);
          return majors[(index + 1) % majors.length];
        });

        setExiting(false);
      }, 500);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [statsVisible]);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: contentImg.current,
          start: "top 80%",
        },
      });
      tl.fromTo(
        ".selector",
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.3,
          stagger: 0.1,
        },
      );
    },
    { dependencies: [] },
  );

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: offerRef.current,
          start: "center 90%",
        },
      });

      tl.fromTo(
        ".bento-section",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.2,
          ease: "power2.inOut",
        },
      );
    },
    { scope: offerRef, dependencies: [] },
  );

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: countContainer.current,
          start: "top 80%",
        },
      });

      tl.fromTo(
        ".count-card",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          stagger: 0.2,
        },
      );
    },
    { scope: countContainer, dependencies: [] },
  );

  return (
    <>
      <div className="container min-w-screen">
        <div className="min-h-screen flex flex-col items-center">
          <video
            className="video object-cover relative min-w-screen h-[102vh]"
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
          </video>

          <div className="mid-container -bottom-20 pb-50 h-fit w-full absolute">
            <div className="flex flex-col items-center text-7xl md:text-9xl text-white/90 font-semibold mx-20">
              <span
                ref={engineeringRef}
                className={`${
                  engineeringVisible
                    ? "translate-x-0 opacity-100 blur-none"
                    : "-translate-x-30 opacity-0 blur-lg"
                } transition-all duration-1000`}
              >
                Engineering
              </span>
              <span
                ref={excellenceRef}
                className={`${
                  excellenceVisible
                    ? "translate-x-0 opacity-100 blur-none"
                    : "translate-x-30 opacity-0 blur-lg"
                } transition-all duration-1000 mb-5`}
              >
                Excellence.
              </span>
              <div
                className={`${
                  engineeringVisible
                    ? "opacity-100 blur-none"
                    : "opacity-0 blur-lg"
                } transition-all duration-1000 delay-500 flex flex-row`}
              >
                <ButtonLink marginRight path="/teams">
                  Our Teams
                </ButtonLink>
                <ButtonLink path="/join">Join Us</ButtonLink>
              </div>
            </div>
          </div>

          <div
            ref={bannerRef}
            className="flex flex-col mx-auto w-3/4 justify-between pt-30"
          >
            <div
              ref={bannerRef}
              className={`${
                bannerVisible
                  ? "translate-y-0 blur-none opacity-100"
                  : "translate-y-30 blur-lg opacity-0"
              } transition-all duration-1000 gap-4`}
            >
              <div className="flex flex-row items-center gap-10">
                <span className="text-white mx-3 text-xl font-extralight">
                  Outcomes
                </span>
                <CompanyBanner icons={companyIcons} />
              </div>
              <div className="flex flex-row items-center gap-10">
                <span className="text-white mx-3 text-xl font-extralight">
                  Sponsors
                </span>
                <CompanyBanner icons={sponsorIcons} />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center transition-all duration-1000 pt-30 w-5/6 xl:w-3/4">
            <span
              ref={welcomeSpanRef}
              className={`${
                welcomeSpanVisible
                  ? "translate-y-0 opacity-100 blur-none"
                  : "translate-y-30 opacity-0 blur-lg"
              } transition-all duration-1000 font-[450] overflow-hidden text-left text-6xl sm:text-7xl mb-15`}
            >
              <span className="text-white">
                We are <br />
              </span>
              <span className="bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text text-transparent italic z-10">
                Illini Electric Motorsports.
              </span>
            </span>

            <div className="flex flex-col-reverse md:flex-row justify-between gap-10">
              <div className="flex flex-col md:w-1/2 gap-4">
                {/*menu*/}
                <div
                  onClick={() => {
                    setContentSource(landing1);
                    setActiveContent("engineering");
                  }}
                  className={`${activeContent == "engineering" && "bg-neutral-900"} selector flex flex-col rounded-2xl px-6 py-4 cursor-pointer hover:bg-neutral-900 transition-all duration-300 active`}
                >
                  <div className="flex flex-row items-center gap-3">
                    <FaWrench className="text-white size-5 mb-2" />
                    <span className="text-white text-2xl mb-2">
                      An Engineering Club
                    </span>
                  </div>
                  <span
                    className={`${activeContent == "engineering" ? "max-h-30 opacity-100 translate-x-0" : "max-h-0 opacity-0 translate-x-2"} transition-all duration-500 overflow-hidden text-neutral-400`}
                  >
                    We utilize CAD design, prototyping, manufacturing, and
                    software development to build our car and the
                    tools/infrastructure surrounding it
                  </span>
                </div>
                <div
                  onClick={() => {
                    setContentSource(landing2);
                    setActiveContent("teams");
                  }}
                  className={`${activeContent == "teams" && "bg-neutral-900"} selector flex flex-col rounded-2xl px-6 py-4 cursor-pointer hover:bg-neutral-900 transition-all duration-300`}
                >
                  <div className="flex flex-row items-center gap-3">
                    <FaLayerGroup className="text-white size-5 mb-2" />
                    <span className="text-white text-2xl mb-2">
                      A Team Project
                    </span>
                  </div>
                  <span
                    className={`${activeContent == "teams" ? "max-h-30 opacity-100 translate-x-0" : "max-h-0 opacity-0 translate-x-2"} transition-all duration-500 overflow-hidden text-neutral-400`}
                  >
                    With 12 subteams working on one car, collaboration and
                    communication are crucial to the success of the project
                  </span>
                </div>
                <div
                  onClick={() => {
                    setContentSource(team_pic);
                    setActiveContent("community");
                  }}
                  className={`${activeContent == "community" && "bg-neutral-900"} selector flex flex-col rounded-2xl px-6 py-4 cursor-pointer hover:bg-neutral-900 transition-all duration-300`}
                >
                  <div className="flex flex-row items-center gap-3">
                    <FaHandshakeSimple className="text-white size-5 mb-2" />
                    <span className="text-white text-2xl mb-2">
                      A Community
                    </span>
                  </div>

                  <span
                    className={`${activeContent == "community" ? "max-h-30 opacity-100 translate-x-0" : "max-h-0 opacity-0 translate-x-2"} transition-all duration-500 overflow-hidden text-neutral-400`}
                  >
                    Working hard together brings us closer, forming a tight-knit
                    and talent-rich community that breaks through challenges
                    together
                  </span>
                </div>
              </div>
              <div
                ref={contentImg}
                className={`${
                  contentImgVisible
                    ? "translate-y-0 opacity-100 blur-none"
                    : "translate-y-20 opacity-0 blur-lg"
                } transition-all duration-1000 md:w-1/2 lg:h-[400px]`}
              >
                {/*content*/}
                <img
                  className="rounded-2xl object-contain"
                  src={contentSource}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <div ref={offerRef} className="flex flex-col w-3/4 mx-auto pt-30">
            <span
              className={`${
                offerVisible
                  ? "translate-y-0 opacity-100 blur-none"
                  : "translate-y-20 opacity-0 blur-lg"
              } transition-all duration-1000 text-7xl w-fit text-white mb-10`}
            >
              <span className="bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text text-transparent italic">
                Maximize
              </span>{" "}
              <br />
              your experience.
            </span>
            <div className="flex flex-col">
              <div className="grid grid-cols-5 gap-4">
                <div className="bento-section flex flex-row p-5 bg-neutral-900 rounded-2xl gap-5 col-span-3">
                  <img
                    className="w-2/3 object-cover shrink-0 rounded-xl"
                    src={rivianpic}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-white text-3xl mb-3">
                      Networking with Top Companies
                    </span>
                    <span className="text-neutral-400 font-light">
                      We host networking events with companies like{" "}
                      <span className="text-white">
                        John Deere, Rivian, Boeing, GM, SpaceX, and others.
                      </span>{" "}
                      Build your network and learn about these fantastic
                      companies!
                    </span>
                  </div>
                </div>
                <div className="bento-section flex flex-col p-5 bg-neutral-900 rounded-2xl col-span-2">
                  <span className="text-white text-3xl mb-3">
                    Constant Growth Opportunities
                  </span>
                  <span className="text-neutral-400 font-light">
                    We are always on the lookout for things to improve within
                    our projects. There is always something to work on, whether
                    you are a complete beginner or a seasoned expert!
                  </span>
                </div>
                <div className="bento-section flex flex-col p-5 bg-neutral-900 rounded-2xl col-span-2">
                  <span className="text-white text-3xl mb-3">
                    Unmatched Engineering Experience
                  </span>
                  <span className="text-neutral-400 font-light">
                    We offer the opportunity to design, prototype, and build
                    with industry-standard tools. Sharpen your skillset with
                    tools like CAD (PTC Creo), GitLab, Docker, Matlab, and
                    others.
                  </span>
                </div>
                <div className="bento-section flex flex-row p-5 bg-neutral-900 rounded-2xl gap-5 col-span-3">
                  <img
                    className="w-2/3 object-cover shrink-0 rounded-xl"
                    src={team_pic2}
                    alt=""
                  />
                  <div className="flex flex-col">
                    <span className="text-white text-3xl mb-3">
                      Massive Professional Network
                    </span>
                    <span className="text-neutral-400 font-light">
                      Our project leads are very experienced and talented
                      people, and always willing to help. Connect to learn more
                      about their experiences, engineering, recruiting, and
                      tools.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center mx-auto ease-in-out w-5/6 xl:w-3/4 duration-1000 justify-center py-30">
            <div
              ref={statsRef}
              className={`${
                statsVisible
                  ? "translate-y-0 opacity-100 blur-none"
                  : "translate-y-20 opacity-0 blur-lg"
              } flex flex-col w-full justify-start transition-all duration-1000 pt-20 pb-15 px-5 md:px-15`}
            >
              <div
                className={`text-left mb-10 transition-all duration-1000 z-10 `}
              >
                <span className="text-white text-2xl font-light">
                  We have students in <br />
                </span>

                <span
                  className={`${
                    exiting
                      ? "opacity-0 translate-y-4 blur-lg"
                      : "opacity-100 translate-y-0 blur-none"
                  }  text-transparent text-6xl sm:text-[85px] bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text transition-all duration-1000 pb-5 inline-block italic w-fit`}
                >
                  {majorSelection}
                </span>
              </div>
              <div
                ref={countContainer}
                className="grid grid-cols-2 gap-4 text-center w-full text-white"
              >
                <div className="count-card flex flex-row justify-center gap-8 items-center bg-neutral-900 rounded-2xl py-5 transition-color duration-300">
                  <IoPeopleSharp className="size-[4em]" />
                  <CountUp end={2000} duration={4000} label="Members" />
                </div>
                <div className="count-card flex flex-row justify-center gap-8 items-center bg-neutral-900 rounded-2xl py-5 transition-color duration-300">
                  <ImBooks className="size-[4em]" />
                  <CountUp end={20} duration={1500} label="Majors" />
                </div>
                <div className="count-card flex flex-row justify-center gap-8 items-center bg-neutral-900 rounded-2xl py-5 transition-color duration-300">
                  <FaUserGraduate className="size-[4em]" />
                  <CountUp end={1000} duration={3000} label="Alumni" />
                </div>
                <div className="count-card flex flex-row justify-center gap-8 items-center bg-neutral-900 rounded-2xl py-5 transition-color duration-300">
                  <FaGlobeAmericas className="size-[4em]" />
                  <CountUp end={4} duration={800} label="Continents" />
                </div>
              </div>
            </div>
            <div
              ref={expRequired}
              className={`${expVisible ? "opacity-100 translate-y-0 blur-none" : "opacity-0 translate-y-20 blur-lg"} transition-all duration-1000 flex flex-col w-full mt-10`}
            >
              <div className="flex flex-col justify-between gap-5 items-center">
                <span className="text-5xl text-white text-center font-light">
                  No experience required.
                </span>
                <div className="flex flex-row">
                  <ButtonLink marginRight path="/teams">
                    Our Teams
                  </ButtonLink>
                  <ButtonLink path="/join">Join Us</ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
