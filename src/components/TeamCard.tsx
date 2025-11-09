import { useRef } from "react";
import { type IconType } from "react-icons";
import AccordionItem from "./AccordionItem";
import { useIsVisible } from "../util/visibilityDetector";

interface TeamCardProps {
  children: React.ReactNode;
  title: string;
  icon: IconType;
  // iconColor: string;
  subteamNames: string[];
  subteamBodies?: string[];
}

const TeamCard = ({
  children,
  title,
  subteamNames,
  icon: Icon,
  // iconColor,
  subteamBodies,
}: TeamCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const cardIsVisible = useIsVisible(cardRef, 0.3);

  return (
    <div
      ref={cardRef}
      className={`${
        cardIsVisible
          ? "opacity-100 translate-y-0 blur-none"
          : "opacity-0 translate-y-30 blur-lg"
      } transition-all duration-1000 group flex flex-col w-5/6 lg:w-1/4 px-8 p-5 rounded-2xl text-start cursor-default text-white mx-auto lg:mx-5 my-3 border-[0.25px] border-neutral-400/30 bg-neutral-900`}
    >
      <div className="flex flex-col h-fit mt-3">
        <span className="flex flex-row items-baseline text-5xl mt-3 w-fit h-fit">
          <span className="pb-3 bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text text-transparent italic">
            {title}
          </span>
          <Icon
            size={33}
            className="mx-5 text-white drop-shadow-xl drop-shadow-white/0 group-hover:drop-shadow-white/70 transition-all duration-500"
          />
        </span>
        <span className="font-light text-neutral-400">{children}</span>
      </div>
      <span className="bg-slate-300/50 my-2 h-[0.25px] w-full"></span>
      <div className="flex flex-col">
        {subteamNames.map((name, index) => {
          return (
            <AccordionItem
              key={name}
              label={name}
              body={
                subteamBodies && index < subteamBodies.length
                  ? subteamBodies[index]
                  : ""
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default TeamCard;
