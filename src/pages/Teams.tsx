import { useRef } from "react";
import TeamCard from "../components/TeamCard";

import { BiSolidZap } from "react-icons/bi";
import { FaGear } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";

import {
  ElectricalNames,
  MechNames,
  LogNames,
  ElectricalBodies,
} from "../util/teamData";
import { useIsVisible } from "../util/visibilityDetector";

const Teams = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const textIsVisible = useIsVisible(textRef, 0.3);
  return (
    <div className="flex flex-col justify-center text-center my-20">
      <div
        ref={textRef}
        className={`${
          textIsVisible ? "opacity-100 " : "opacity-0 translate-y-30 blur-lg"
        } transition-all duration-1000 flex flex-col justify-center mb-5 mx-10`}
      >
        <span className="text-white text-7xl w-fit mx-auto mb-3">
          Our Teams
        </span>
      </div>
      <div className="flex flex-col w-full lg:flex-row lg:justify-center">
        <TeamCard
          title="Electrical"
          icon={BiSolidZap}
          // iconColor="#d6c242"
          subteamNames={ElectricalNames}
          subteamBodies={ElectricalBodies}
        >
          Our electrical subteams design, test, and implement our high and low
          voltage systems. From hardware and software, all the way to sensors
          and analysis. You will get the opportunity to learn industry standard
          design and manufacturing techniques.
        </TeamCard>
        <TeamCard
          title="Mechanical"
          icon={FaGear}
          // iconColor="#737373ff"
          subteamNames={MechNames}
        >
          Our mechanical subteams design, validate, and manufacture the physical
          components of our vehicle. You will get the opportunity to learn
          industry standard design and validation methods, as well as use
          industry specific CAD, FEA, and simulation software.
        </TeamCard>
        <TeamCard
          title="Logistical"
          icon={FaChartBar}
          // iconColor="#4a5ee0"
          subteamNames={LogNames}
        >
          Our logistical subteams handle the business, media, and infrastructure
          aspects of our team. They build relationships, manage funds, and
          create infrastructure. You will get the opportunity to work on a large
          team with internationally sized challenges.
        </TeamCard>
      </div>
    </div>
  );
};

export default Teams;
