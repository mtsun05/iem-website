import React from "react";

import { FiArrowUpRight } from "react-icons/fi";

interface ButtonLinkProps {
  children: React.ReactNode;
  path: string;
  marginRight?: boolean;
}

const ButtonLink = ({ children, path, marginRight }: ButtonLinkProps) => {
  return (
    <a
      className={`${
        marginRight && "mr-3"
      } group relative items-center flex flex-row text-white text-xl bg-black/50 ring ring-white/20 hover:pr-10 cursor-pointer text-nowrap rounded-2xl w-fit px-4 py-3 transition-all duration-300 gap-1`}
      href={path}
    >
      <span className="font-light">{children}</span>
      <FiArrowUpRight className="absolute opacity-0 right-4 transition-all duration-300 translate-y-3 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0" />
    </a>
  );
};

export default ButtonLink;
