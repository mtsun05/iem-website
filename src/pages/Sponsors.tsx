import SponsorDisplay from "@/components/SponsorDisplay";
import {
  goldIcons,
  lithiumIcons,
  orangeIcons,
  blueIcons,
} from "@/util/companyIcons";
import ShinyText from "../components/external/ShinyText";
import { FiArrowRight } from "react-icons/fi";
import { useRef } from "react";
import { useIsVisible } from "@/util/visibilityDetector";

const Sponsors = () => {
  const header = useRef(null);
  const headerVisible = useIsVisible(header, 0.3);
  const lithium = useRef(null);
  const lithiumVisible = useIsVisible(lithium, 0.3);
  const gold = useRef(null);
  const goldVisible = useIsVisible(gold, 0.3);
  const orange = useRef(null);
  const orangeVisible = useIsVisible(orange, 0.3);
  const blue = useRef(null);
  const blueVisible = useIsVisible(blue, 0.3);

  return (
    <div className="flex justify-center container min-w-screen">
      <div className="flex flex-col min-h-screen">
        <div
          ref={header}
          className={`${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 blur-lg translate-y-30"
          } transition-all duration-1000 mt-20 border-b-[0.25px] border-neutral-400/30 px-40 pb-20`}
        >
          <span className="text-center text-7xl text-white mb-3">
            <span className="text-transparent bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text italic">
              Our sponsors
            </span>{" "}
            <br /> make what we do possible.
          </span>
          <a
            className={`group relative items-center flex flex-row text-neutral-400 text-xl cursor-pointer text-nowrap w-fit py-3 transition-all duration-300 gap-1`}
            href="/sponsor-info"
          >
            <span className="font-light group-hover:text-neutral-300 transition-all duration-300">
              Learn the why and how of becoming a sponsor today
            </span>
            <FiArrowRight className="absolute -right-5 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2" />
          </a>
        </div>
        <div className="border-b-[0.25px] border-neutral-400/30">
          <div
            ref={lithium}
            className={`${
              lithiumVisible
                ? "opacity-100"
                : "opacity-0 blur-lg translate-y-30"
            } transition-all duration-1000 flex flex-col items-center py-8 border-x-[0.25px] border-neutral-400/30 mx-40`}
          >
            <ShinyText
              color="lithium"
              speed={3}
              className="text-2xl italic mb-5"
              text="Lithium Level"
            />
            <SponsorDisplay icons={lithiumIcons} iconSizePx={210} />
          </div>
        </div>
        <div className="border-b-[0.25px] border-neutral-400/30">
          <div
            ref={gold}
            className={`${
              goldVisible ? "opacity-100" : "opacity-0 blur-lg translate-y-30"
            } transition-all duration-1000 flex flex-col items-center py-8 p-6 border-x-[0.25px] border-neutral-400/30 mx-40`}
          >
            <ShinyText
              color="gold"
              speed={3}
              className="text-2xl italic mb-5"
              text="Gold Level"
            />
            <SponsorDisplay icons={goldIcons} iconSizePx={120} />
          </div>
        </div>
        <div className="border-b-[0.25px] border-neutral-400/30">
          <div
            ref={orange}
            className={`${
              orangeVisible ? "opacity-100" : "opacity-0 blur-lg translate-y-30"
            } transition-all duration-1000 flex flex-col items-center py-8 p-6 border-x-[0.25px] border-neutral-400/30 mx-40`}
          >
            <ShinyText
              color="orange"
              speed={3}
              className="text-2xl italic mb-5"
              text="Orange Level"
            />
            <SponsorDisplay icons={orangeIcons} iconSizePx={100} />
          </div>
        </div>
        <div
          ref={blue}
          className={`${
            blueVisible ? "opacity-100" : "opacity-0 blur-lg translate-y-30"
          } transition-all duration-1000 flex flex-col items-center py-8 p-6 border-x-[0.25px] border-neutral-400/30 mx-40`}
        >
          <ShinyText
            color="blue"
            speed={3}
            className="text-2xl italic mb-5"
            text="Blue Level"
          />
          <SponsorDisplay icons={blueIcons} iconSizePx={100} />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
