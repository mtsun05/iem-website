import React, { useState } from "react";

interface ContentSwitcherProps {
  items: { label: string; content: React.ReactNode }[];
}

const ContentSwitcher = ({ items }: ContentSwitcherProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="flex flex-col w-2/3 rounded-2xl border-[0.25px] border-neutral-400/50 bg-neutral-900">
      <div className="flex flex-row justify-around overflow-scroll no-scrollbar bg-neutral-800 p-5 rounded-t-2xl">
        {items.map((item, index) => (
          <span
            key={item.label}
            onClick={() => setActiveIndex(index)}
            className={`${
              activeIndex == index
                ? "bg-linear-to-r from-[#2c5191] to-[#FA6300]"
                : "text-white hover:bg-neutral-800"
            } rounded-full text-lg py-3 px-4 text-nowrap text-right cursor-pointer transition-all duration-300`}
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
