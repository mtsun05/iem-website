import { useIsVisible } from "../util/visibilityDetector.ts";
import { useEffect, useRef, useState } from "react";

import ButtonLink from "../components/ButtonLink.tsx";
import video from "../assets/IEM-video-final.mp4";
import team_pic from "../assets/iem-team-pic.png";
import CompanyBanner from "../components/CompanyBanner.tsx";
import CountUp from "../components/Counter.tsx";
import { companyIcons, sponsorIcons } from "../util/companyIcons.ts";
import landing1 from "../assets/landing-card-1.png";
import landing2 from "../assets/landing-card-2.png";

import { FaUserTie } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa";
import { RiUserCommunityLine } from "react-icons/ri";
import { GrGrow } from "react-icons/gr";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Home() {
  // const historyRef = useRef<HTMLDivElement>(null);
  // // const historyIsVisible = useIsVisible(historyRef);
  const EngineeringRef = useRef<HTMLSpanElement>(null);
  const EngineeringVisible = useIsVisible(EngineeringRef, 0.2);

  const WelcomeSpanRef = useRef<HTMLSpanElement>(null);
  const WelcomeSpanVisible = useIsVisible(WelcomeSpanRef, 0.2);

  const ExcellenceRef = useRef<HTMLSpanElement>(null);
  const ExcellenceVisible = useIsVisible(ExcellenceRef, 0.2);

  const bannerRef = useRef<HTMLDivElement>(null);
  const bannerIsVisible = useIsVisible(bannerRef, 0.2);

  const offerRef = useRef<HTMLDivElement>(null);
  const offerIsVisible = useIsVisible(offerRef, 0.2);

  const statsRef = useRef<HTMLDivElement>(null);
  const statsIsVisible = useIsVisible(statsRef, 0.2);

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

  useEffect(() => {
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
  }, []);

  return (
    <>
      <div className="container min-w-screen p-0">
        <div className="min-h-screen flex flex-col justify-center">
          <video
            className="video object-cover relative min-w-screen h-[102vh]"
            autoPlay
            loop
            muted
          >
            <source src={video} type="video/mp4" />
          </video>

          <div className="mid-container -bottom-35 pb-50 h-fit w-full absolute">
            <div className="flex flex-col items-center text-7xl md:text-9xl text-white/90 font-semibold mx-20">
              <span
                ref={EngineeringRef}
                className={`${
                  EngineeringVisible
                    ? "translate-x-0 opacity-100 blur-none"
                    : "-translate-x-30 opacity-0 blur-lg"
                } transition-all duration-1000`}
              >
                Engineering
              </span>
              <span
                ref={ExcellenceRef}
                className={`${
                  ExcellenceVisible
                    ? "translate-x-0 opacity-100 blur-none"
                    : "translate-x-30 opacity-0 blur-lg"
                } transition-all duration-1000 mb-5`}
              >
                Excellence.
              </span>
              <div
                className={`${
                  EngineeringVisible
                    ? "translate-y-0 opacity-100 blur-none"
                    : "translate-y-30 opacity-0 blur-lg"
                } transition-all duration-1000 delay-500 flex flex-row`}
              >
                <ButtonLink marginRight path="/teams">
                  Our Teams
                </ButtonLink>
                <ButtonLink path="/join">Join Us</ButtonLink>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start transition-all duration-1000 border-y-[0.25px] border-neutral-400/30 py-20 w-fit">
            <span
              ref={WelcomeSpanRef}
              className={`${
                WelcomeSpanVisible
                  ? "translate-y-0 opacity-100 blur-none"
                  : "translate-y-30 opacity-0 blur-lg"
              } transition-all duration-1000 text-neutral-400 xl:w-fit text-left text-4xl sm:text-6xl mb-5 md:mx-60`}
            >
              <span className="font-light">
                Welcome to <br />
              </span>
              <span
                className={`${
                  WelcomeSpanVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-100 opacity-0"
                } inline-block transition-all duration-1000 ease-[cubic-bezier(0.3,0.8,0.3,1.1)] bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text text-transparent text-6xl sm:text-8xl italic z-10`}
              >
                Illini Electric Motorsports.{" "}
              </span>
            </span>
            <div
              className={`${
                WelcomeSpanVisible
                  ? "opacity-100 blur-none translate-y-0"
                  : "opacity-0 blur-lg translate-y-30"
              } transition-all duration-1000 delay-500 flex flex-col xl:flex-row items-center justify-center mx-10 md:mx-20`}
            >
              <div className="landing-card items-center flex flex-col md:flex-row xl:flex-col w-full md:w-2/3 xl:w-1/4 border-[0.25px] border-neutral-400/30 bg-neutral-900 p-5 rounded-2xl mx-5 mt-5 hover:-translate-y-2 transition-transform duration-500">
                <img
                  className="w-9/10 md:w-1/2 xl:h-[220px] xl:w-[400px] border-[0.25px] border-white/50 rounded-lg object-cover xl:mb-3"
                  src={landing1}
                  alt=""
                />
                <div className="flex flex-col md:mx-5 xl:mx-0 my-0">
                  <span className="text-white text-2xl mb-2">
                    An Engineering Club
                  </span>
                  <span className="text-neutral-400 font-light text-base">
                    With our electrical, mechanical, and logistical teams (and a
                    multitude of different subteams under each), we engage in
                    every aspect of an engineering project, from design and
                    prototyping to software development to club infrastructure
                    to manufacturing.
                  </span>
                </div>
              </div>
              <div className="landing-card items-center flex flex-col md:flex-row xl:flex-col w-full md:w-2/3 xl:w-1/4 border-[0.25px] border-neutral-400/30 bg-neutral-900 p-5 rounded-2xl mx-5 mt-5 hover:-translate-y-2 transition-transform duration-500">
                <img
                  className="w-9/10 md:w-1/2 xl:h-[220px] xl:w-[400px] border-[0.25px] border-white/50 rounded-lg object-cover mb-5"
                  src={landing2}
                  alt=""
                />
                <div className="flex flex-col md:mx-5 xl:mx-0 my-0">
                  <span className="text-white text-2xl mb-2">
                    A Team Project
                  </span>
                  <span className="text-neutral-400 font-light text-base">
                    Our teams do very different things, but are all focused on a
                    common goal: building a competition-ready car. Effectively
                    managing this ambitious project is challening, and requires
                    us to plan, collaborate, and work hard to meet deadlines.
                  </span>
                </div>
              </div>
              <div className="landing-card items-center flex flex-col md:flex-row xl:flex-col w-full md:w-2/3 xl:w-1/4 border-[0.25px] border-neutral-400/30 bg-neutral-900 p-5 rounded-2xl mx-5 mt-5 hover:-translate-y-2 transition-transform duration-500">
                <img
                  className="w-9/10 md:w-1/2 xl:h-[220px] xl:w-[400px] border-[0.25px] border-white/50 rounded-lg object-cover mb-5"
                  src={team_pic}
                  alt=""
                />
                <div className="flex flex-col md:mx-5 xl:mx-0 my-0">
                  <span className="text-white text-2xl mb-2">A Community</span>
                  <span className="text-neutral-400 font-light text-base">
                    With everyone unified under a common goal, our teams must
                    work together closely and communicate effectively in order
                    to achieve our goal. We aim to unite people from all
                    backgrounds and disciplines in an effort to build a strong,
                    tight-knit community.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            ref={bannerRef}
            className="flex flex-col mx-auto w-3/4 xl:w-2/3 justify-between border-x-[0.25px] border-neutral-400/30 py-10 px-10"
          >
            <div
              ref={bannerRef}
              className={`${
                bannerIsVisible
                  ? "translate-y-0 blur-none opacity-100"
                  : "translate-y-30 blur-lg opacity-0"
              } transition-all duration-1000`}
            >
              <div className="flex flex-col items-center">
                <span className="text-neutral-400 text-xl font-extralight">
                  Driving real outcomes for our engineers
                </span>
                <CompanyBanner icons={companyIcons} goesLeft />
              </div>
              <div className="flex flex-col items-center">
                <span className="text-neutral-400 text-xl font-extralight">
                  IEM is powered by
                </span>
                <CompanyBanner icons={sponsorIcons} goesLeft />
              </div>
            </div>
          </div>

          <div
            ref={offerRef}
            className={`transition-all duration-1000 flex justify-center border-[0.25px] border-neutral-400/30 py-20 ${
              offerIsVisible
                ? "translate-y-0 opacity-100 blur-none"
                : "translate-y-20 opacity-0 blur-lg"
            }`}
          >
            <div className="flex flex-col p-10 rounded-lg w-full items-center justify-center">
              <span className="text-6xl text-white mb-8">Level up with</span>
              <div className="flex flex-col mx-15 w-5/6 xl:w-3/5">
                <div className="flex flex-col">
                  <Carousel className="relative mx-10" opts={{ loop: true }}>
                    <CarouselContent className="-ml-10 py-10">
                      <CarouselItem className="flex justify-center md:basis-3/5 pl-10">
                        <div className="flex flex-col border-[0.25px] border-neutral-400/30 rounded-2xl bg-neutral-900 p-5 ">
                          <div className="flex justify-between items-center mb-5">
                            <span className="text-white text-2xl">
                              Company Events
                            </span>
                            <FaUserTie className="text-white size-[25px]" />
                          </div>
                          <span className="text-neutral-400 text-base font-extralight">
                            We host networking events with companies like John
                            Deere, Rivian, Boeing, GM, SpaceX, and others. Build
                            your network and learn about these fantastic
                            companies!
                          </span>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="flex justify-center md:basis-3/5 pl-10">
                        <div className="flex flex-col border-[0.25px] border-neutral-400/30 rounded-2xl bg-neutral-900 p-5 ">
                          <div className="flex justify-between items-center mb-5">
                            <span className="text-white text-2xl">
                              Constant Growth Opportunities
                            </span>
                            <GrGrow className="text-green-500 size-[25px]" />
                          </div>
                          <span className="text-neutral-400 text-base font-extralight">
                            We are always on the lookout for things to improve
                            within our projects. There is always something to
                            work on, whether you are a complete beginner or a
                            seasoned expert!
                          </span>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="flex justify-center md:basis-3/5 pl-10">
                        <div className="flex flex-col border-[0.25px] border-neutral-400/30 rounded-2xl bg-neutral-900 p-5 ">
                          <div className="flex justify-between items-center mb-5">
                            <span className="text-white text-2xl">
                              Hands-on Experience
                            </span>
                            <FaToolbox className="text-orange-400 size-[25px]" />
                          </div>
                          <span className="text-neutral-400 text-base font-extralight">
                            We offer the opportunity to design, prototype, and
                            build with industry-standard tools. Sharpen your
                            skillset with tools like CAD (PTC Creo), GitLab,
                            Docker, Matlab, and others.
                          </span>
                        </div>
                      </CarouselItem>
                      <CarouselItem className="flex justify-center md:basis-3/5 pl-10">
                        <div className="flex flex-col border-[0.25px] border-neutral-400/30 rounded-2xl bg-neutral-900 p-5 ">
                          <div className="flex justify-between items-center mb-5">
                            <span className="text-white text-2xl">
                              Strong and Experienced Network
                            </span>
                            <RiUserCommunityLine className="text-blue-300 size-[25px]" />
                          </div>
                          <span className="text-neutral-400 text-base font-extralight">
                            Our project leads are very experienced and talented
                            people, and always willing to help. Connect to learn
                            more about their experiences, engineering,
                            recruiting, and tools.
                          </span>
                        </div>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="cursor-pointer bg-black text-white border-none hover:text-neutral-400 hover:bg-black scale-150  transition duration-300 -left-20" />
                    <CarouselNext className="cursor-pointer bg-black text-white border-none hover:text-neutral-400 hover:bg-black scale-150 transition duration-300 -right-20" />
                    <div className="absolute xl:opacity-100 opacity-0 right-0 top-0 rotate-180 gradient-left-black h-full w-[100px] z-10"></div>
                    <div className="absolute xl:opacity-100 opacity-0 left-0 top-0 gradient-left-black h-full w-[100px] z-10"></div>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`flex flex-col items-center mx-auto ease-in-out w-3/4 xl:w-2/3 duration-1000 justify-center border-x-[0.25px] border-neutral-400/30 py-20 px-10`}
          >
            <div
              ref={statsRef}
              className="flex flex-row w-full justify-start transition-all duration-1000"
            >
              <span
                className={`${exiting ? "translate-y-15" : "translate-y-0"} ${
                  statsIsVisible
                    ? "translate-y-0 opacity-100 blur-none"
                    : "translate-y-20 opacity-0 blur-lg"
                }} text-neutral-400 text-2xl font-light text-left mb-5 transition-all duration-1000 z-10 `}
              >
                <span className="">
                  We have students in <br />
                </span>

                <span
                  className={`${
                    exiting
                      ? "opacity-0 translate-y-4 blur-lg"
                      : "opacity-100 translate-y-0 blur-none"
                  }  text-transparent text-6xl sm:text-[85px] bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text transition-all duration-1000 pb-5 inline-block italic`}
                >
                  {majorSelection}
                </span>
              </span>
            </div>
            <div className="flex flex-col items-center w-full transition-all ease-in-out z-10 duration-1000 justify-center">
              <div className="flex flex-col text-center border-neutral-400/30 bg-linear-to-b w-full from-neutral-900 from-30% h-[100px] to-[#0f0f0f] px-10 pt-10 pb-60 xl:pb-40 rounded-t-3xl delay-1500 border-x-[0.25px] border-t-[0.25px] border-netural-400/50">
                <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
                  <CountUp end={2000} duration={4000} label="Members" />
                  <CountUp end={20} duration={1500} label="Majors" />
                  <CountUp end={1000} duration={3000} label="Alumni" />
                  <CountUp end={4} duration={800} label="Continents" />
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full my-10">
              <div className="flex flex-col xl:flex-row justify-between items-center">
                <span className="text-4xl text-white font-light">
                  No experience required.
                </span>
                <div className="flex flex-row">
                  <ButtonLink marginRight path="/teams">
                    Explore our Teams
                  </ButtonLink>
                  <ButtonLink path="/join">Discover how to Join</ButtonLink>
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
