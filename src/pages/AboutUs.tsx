import { useIsVisible } from "../util/visibilityDetector.ts";
import { useRef } from "react";

import team_pic from "../assets/iem-team-pic.png";
import team_pic_2 from "../assets/iem-team-2.jpg";
import car_pic from "../assets/iem-car-pic.png";
import landing_card_1 from "../assets/landing-card-1.png";
import landing_card_2 from "../assets/landing-card-2.png";
import LeadPic from "@/components/LeadPic.tsx";
import car_pic2 from "@/assets/iem_car_pic_3.jpg";
import car_pic3 from "@/assets/iem_car_pic_4.jpg";
import car_pic4 from "@/assets/iem_car_pic5.jpg";
import rivian_pic from "@/assets/rivian_pic2.jpg";
import car_pic5 from "@/assets/Motorsports-13.jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx";

function AboutUs() {
  const summaryRef = useRef<HTMLDivElement>(null);
  const summaryIsVisible = useIsVisible(summaryRef, 0.2);

  const captainsRef = useRef<HTMLDivElement>(null);
  const captainsIsVisible = useIsVisible(captainsRef, 0.2);

  const subteamsRef = useRef<HTMLDivElement>(null);
  const subteamsIsVisible = useIsVisible(subteamsRef, 0.2);

  const historyRef = useRef<HTMLDivElement>(null);
  const historyIsVisible = useIsVisible(historyRef, 0.2);
  return (
    <>
      <div className="flex justify-center container min-w-screen">
        <div className="flex flex-col min-h-screen w-2/3">
          <div
            ref={summaryRef}
            className={`transition-all ease-in-out duration-1000 flex mt-20 ${
              summaryIsVisible
                ? "opacity-100 blur-none translate-y-0"
                : "opacity-0 blur-lg translate-y-20"
            } transition-all duration-1000`}
          >
            <div className="flex flex-col">
              <span className="text-white font-[450] text-7xl mb-3">
                Empowering the <br />
                <span className="text-transparent bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text italic">
                  next generation
                </span>{" "}
                of engineers.
              </span>
              <span className="text-xl font-light text-neutral-400">
                As one of the foremost engineering clubs at a leading
                engineering institution, our annual mission is to build a
                competition-ready vehicle while providing unmatched real-world
                project-based experience to our members.
              </span>
              <Carousel className="my-5 rounded-2xl" opts={{ loop: true }}>
                <CarouselContent className="flex">
                  <CarouselItem>
                    <div>
                      <img
                        className="rounded-2xl h-[600px] w-full object-cover"
                        src={car_pic5}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <img
                        className="rounded-2xl h-[600px] w-full object-cover"
                        src={team_pic}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <img
                        className="rounded-2xl h-[600px] w-full object-cover"
                        src={rivian_pic}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <img
                        className="rounded-2xl h-[600px] w-full object-cover"
                        src={car_pic4}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <img
                        className="rounded-2xl h-[600px] w-full object-cover"
                        src={car_pic3}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <img
                        className="rounded-2xl h-[600px] w-full object-cover"
                        src={car_pic2}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <img
                        className="rounded-2xl h-[600px] w-full object-cover"
                        src={team_pic_2}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <img
                        className="rounded-2xl h-[600px] w-full object-cover"
                        src={car_pic}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <img
                        className="rounded-2xl h-[600px] w-full object-cover"
                        src={landing_card_1}
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div>
                      <img
                        className="rounded-2xl h-[600px] w-full object-cover"
                        src={landing_card_2}
                      />
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious className="cursor-pointer bg-black text-white border-none hover:text-neutral-400 hover:bg-black  scale-150  transition duration-300 left-5" />
                <CarouselNext className="cursor-pointer bg-black text-white border-none hover:text-neutral-400 hover:bg-black scale-150 transition duration-300 right-5" />
              </Carousel>
            </div>
          </div>

          <div className="transition-all duration-1000 flex mt-20">
            <div className="flex flex-col w-full">
              <div
                ref={captainsRef}
                className={`${
                  captainsIsVisible
                    ? "opacity-100 blur-none translate-y-0"
                    : "opacity-0 blur-lg translate-y-30"
                } transition-all duration-1000 my-5`}
              >
                <span className="text-white font-[450] text-5xl">Captains</span>
                <div className="mt-10 grid grid-cols-2 grid-rows-1">
                  <LeadPic
                    name="Ethan Peng"
                    title="Captain"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/ethanccpeng/"
                  />
                  <LeadPic
                    name="Pranav Budhia"
                    title="Mechanical Captain"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/pranav-budhia/"
                  />
                </div>
              </div>
              <div
                ref={subteamsRef}
                className={`${
                  subteamsIsVisible
                    ? "opacity-100 blur-none translate-y-0"
                    : "opacity-0 blur-lg translate-y-30"
                } transition-all duration-1000 my-5`}
              >
                <span className="text-white font-[450] text-5xl">
                  Subteam Leads
                </span>
                <div className="mt-10 w-full grid grid-cols-4 grid-rows-1">
                  <LeadPic
                    name="Derin Sozen"
                    title="Infrastructure"
                    email="dsozen@illinois.edu"
                    linkedin="https://www.linkedin.com/in/derin-sozen/"
                  />
                  <LeadPic
                    name="Jamie Pruett"
                    title="Software"
                    email="jpruett@illinois.edu"
                    linkedin="https://www.linkedin.com/in/jdspruett/"
                  />
                  <LeadPic
                    name="Avi Patel"
                    title="Business"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/avi-patel-b210b3274/"
                  />
                  <LeadPic
                    name="Ryan Men"
                    title="Low Voltage"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/ryan-men/"
                  />
                  <LeadPic
                    name="Satvik Reddy"
                    title="Circuit Design"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/satvik-reddy-uiuc/"
                  />
                  <LeadPic
                    name="Riddhika Parmar"
                    title="Cockpit"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/riddhika-parmar/"
                  />
                  <LeadPic
                    name="Ariela Libova"
                    title="Integration"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/ariela-libova/"
                  />
                  <LeadPic
                    name="Michael Wagner"
                    title="Vehicle Dynamics"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/michael-wagner-21a637276/"
                  />
                  <LeadPic
                    name="Tate Leventhal"
                    title="Aerodynamics"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/tateleventhal/"
                  />
                  <LeadPic
                    name="Dhriti Chichila"
                    title="Powertrain"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/dhriti-chichila/"
                  />
                  <LeadPic
                    name="Andre Chen"
                    title="Outboard Structures"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/andre-e-chen/"
                  />

                  <LeadPic
                    name="David Melchor"
                    title="Chassis"
                    email="idk@illinois.edu"
                    linkedin="https://www.linkedin.com/in/davidmelchorh/"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            ref={historyRef}
            className={`transition-all ease-in-out duration-1000 flex mt-20 ${
              historyIsVisible
                ? "opacity-100 blur-none translate-y-0"
                : "opacity-0 blur-lg translate-y-20"
            } transition-all duration-1000`}
          >
            <div>
              <span className="text-white font-[450] text-7xl mb-3">
                Our History
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
