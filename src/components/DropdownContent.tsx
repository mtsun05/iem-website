import { useState } from "react";

interface DropdownContentProps {
  labels: string[];
  subtitles: string[];
  links: string[];
  content: string[];
}

const DropdownContent = ({
  labels,
  subtitles,
  links,
  content,
}: DropdownContentProps) => {
  const [contentIndex, setContentIndex] = useState<number>(0);

  return (
    <div className="flex flex-row text-white p-3 rounded-4xl w-[700px] h-59 backdrop-blur-lg">
      <div className="w-1/2 flex flex-col mr-3">
        {labels.map((label, index) => (
          <a
            href={links[index]}
            className="flex flex-col my-1 p-2 rounded-xl transition-colors duration-300 hover:bg-neutral-800/90"
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
          className="w-[150px] h-[150px] transition-all duration-300"
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
