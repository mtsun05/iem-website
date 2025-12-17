import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useRef } from "react";

interface TimelineEventProps {
  year: string;
  event: string;
  desc: string;
  index: number;
}

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const TimelineEvent = ({ year, event, desc, index }: TimelineEventProps) => {
  const eventRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={eventRef}
      className={`event-${index} absolute inset-x-0 -translate-y-2.5 flex flex-col items-center`}
    >
      <div className="rounded-full w-4 h-4 bg-white mb-3"></div>
      <div className="flex flex-col bg-neutral-900 p-5 rounded-2xl w-80 h-fit">
        <span className="text-2xl font-bold bg-linear-to-r from-[#2c5191] to-[#FA6300] bg-clip-text text-transparent w-fit">
          {year}
        </span>
        <span className="text-white italic font-light">{event}</span>
        <span className="text-neutral-400 font-light">{desc}</span>
      </div>
    </div>
  );
};

const events = [
  {
    year: "1979",
    event: "Illini Motorsports",
    desc: "Illini Motorsports is founded at UIUC as an engineering club, specializing in combustion vehicles",
  },
  {
    year: "2010",
    event: "Illini Hybrid Racing",
    desc: "Illini Hybrid Racing is founded at UIUC in 2010, focusing on designing competitive hybrid vehicles",
  },
  {
    year: "2013",
    event: "Illini Formula Electric",
    desc: "Illini Hybrid Racing becomes Illini Formula Electric, now focused solely on designing fully electric vehicles",
  },
  {
    year: "2023",
    event: "IM and IFE Merge",
    desc: "Illini Motorsports and IFE merge into IEM, designing and building both electric and combustion vehicles",
  },
];

const HistoryTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const timeline = timelineRef.current;

    if (timeline) {
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: timeline,
          start: "top 60%",
          end: "+=2500",
          scrub: 1,
          pin: ".container",
          pinSpacing: "margin",
        },
      });

      tl.fromTo(
        lineRef.current,
        {
          scaleX: "0%",
        },
        {
          scaleX: "100%",
          duration: 1,
          ease: "power4.out",
        }
      );

      let entryTime = 1;
      for (let i = 0; i < events.length; i++) {
        tl.fromTo(
          // entry animation
          `.event-${i}`,
          {
            x: 800,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power4.out",
          },
          entryTime
        )
          .to(`.event-${i}`, { duration: 0.8 })
          .to(`.event-${i}`, {
            // exit animation
            x: "-=700",
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          });

        entryTime += 1.8;
      }

      if (lineRef.current) {
        const width = lineRef.current.offsetWidth;
        let position = -(width / 2 - 30);
        let timeOffset = 0;
        for (let i = 0; i < events.length; i++) {
          tl.fromTo(
            `.event-${i}`,
            {
              x: -800,
            },
            {
              x: `${position}`,
              opacity: 1,
              duration: 1,
              ease: "back.out",
            },
            8.5 - timeOffset
          );

          position += (width - 60) / (events.length - 1);
          timeOffset += 0.1;
        }
      }
    }
    ScrollTrigger.refresh(true);
  }, []);

  return (
    <div ref={timelineRef} className="my-10 min-h-[200px]">
      <div
        ref={lineRef}
        className="h-1 rounded-full w-full bg-neutral-600"
      ></div>
      <div className="relative">
        {events.map(({ year, event, desc }, index) => {
          return (
            <TimelineEvent
              key={index}
              year={year}
              event={event}
              desc={desc}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HistoryTimeline;
