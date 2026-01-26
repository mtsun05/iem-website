import React from "react";

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
      } group relative items-center flex flex-row text-white text-xl bg-neutral-800 border-[0.25px] border-neutral-400/30 hover:bg-neutral-900 hover:border-neutral-400/50 cursor-pointer text-nowrap rounded-full w-fit px-4 py-3 transition-all duration-300 gap-1`}
      href={path}
    >
      <span className="font-light">{children}</span>
    </a>
  );
};

export default ButtonLink;
