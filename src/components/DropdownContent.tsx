import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

interface DropdownContentProps {
  labels: string[];
  subtitles: string[];
  links: string[];
  content: string[];
}

gsap.registerPlugin(useGSAP);

const DropdownContent = ({
  labels,
  subtitles,
  links,
  content,
}: DropdownContentProps) => {
  const [contentIndex, setContentIndex] = useState<number>(0);
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let linkTL = gsap.timeline();
      let imgTL = gsap.timeline();

      imgTL.fromTo(
        ".img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        0
      );

      linkTL.from(
        ".link",
        {
          opacity: 0,
          y: -10,
          stagger: 0.1,
        },
        0
      );
    },
    { dependencies: [links], scope: container, revertOnUpdate: true }
  );

  useGSAP(
    () => {
      let imgTL = gsap.timeline();
      imgTL.fromTo(
        ".img",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        },
        0
      );
    },
    { dependencies: [contentIndex], scope: container, revertOnUpdate: true }
  );

  return (
    <div
      ref={container}
      className="flex flex-row text-white p-3 rounded-4xl w-[700px] h-59 backdrop-blur-lg"
      onMouseLeave={() => setContentIndex(0)}
    >
      <div className="w-1/2 flex flex-col mr-3">
        {labels.map((label, index) => (
          <a
            href={links[index]}
            className="link flex flex-col my-1 p-2 rounded-lg hover:bg-neutral-700/60"
            onMouseEnter={() => setContentIndex(index)}
          >
            <span className="text-white text-lg">{label}</span>
            <span className="text-neutral-400 text-sm">{subtitles[index]}</span>
          </a>
        ))}
      </div>
      <div className="w-[0.25px] bg-neutral-400/50 rounded-full h-full"></div>
      <div className="flex justify-center items-center ml-3 w-1/2 bg-linear-to-r from-[#2c5191] to-[#FA6300] rounded-2xl">
        <img
          className="img w-[150px] h-[150px]"
          src={
            contentIndex < content.length ? content[contentIndex] : content[0]
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default DropdownContent;
