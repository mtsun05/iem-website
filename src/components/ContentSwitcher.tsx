import gsap from "gsap";
import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

interface ContentSwitcherProps {
  items: { label: string; content: React.ReactNode }[];
}

const ContentSwitcher = ({ items }: ContentSwitcherProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const selectorRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    let tl = gsap.timeline();

    let selected = document.querySelector(
      `.item-${activeIndex}`
    ) as HTMLSpanElement | null;
    if (selected && selectorRef) {
      const { offsetLeft, offsetTop, offsetWidth, offsetHeight } = selected;

      gsap.to(selectorRef.current, {
        x: offsetLeft,
        y: offsetTop,
        width: offsetWidth,
        height: offsetHeight,
        duration: 0.5,
        ease: "power2.in",
      });
    }

    tl.fromTo(
      ".img",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power4.inOut",
        duration: 1,
      },
      0
    );
    tl.fromTo(
      ".info-header",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power4.inOut",
        duration: 1,
      },
      0.05
    );
    tl.fromTo(
      ".info-body",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        ease: "power4.inOut",
        duration: 1,
      },
      0.1
    );
  }, [activeIndex]);

  return (
    <div className="flex flex-col w-2/3 rounded-2xl border-[0.25px] border-neutral-400/50 bg-neutral-900">
      <div className="flex flex-row relative justify-around overflow-scroll no-scrollbar bg-neutral-800 pt-8 pb-5 px-5 rounded-t-2xl">
        <div
          ref={selectorRef}
          className="absolute top-0 left-0 h-full inset-y-0 z-0 rounded-full bg-linear-to-r from-[#2c5191] to-[#FA6300]"
        ></div>
        {items.map((item, index) => (
          <span
            key={item.label}
            onClick={() => setActiveIndex(index)}
            className={`${
              activeIndex != index && "hover:bg-neutral-900"
            } item-${index} text-white rounded-full text-lg py-3 px-4 text-nowrap text-right cursor-pointer transition-all duration-300 z-10`}
          >
            {item.label}
          </span>
        ))}
      </div>
      <div className="w-full rounded-xl p-5">{items[activeIndex].content}</div>
    </div>
  );
};

export default ContentSwitcher;
