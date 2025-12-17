import { useState } from "react";

import { RxAvatar } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";
import linkedin_logo from "../assets/company-logos/linkedin-logo.svg";

interface LeadPicProps {
  name: string;
  title: string;
  email: string;
  linkedin: string;
}

const LeadPic = ({ name, title, email, linkedin }: LeadPicProps) => {
  const [copied, setCopied] = useState<boolean>(false);

  const copyEmail = (e: React.MouseEvent<SVGElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1000);
    });
  };
  return (
    <div className="lead-pic flex flex-col items-center mb-5">
      <RxAvatar className="size-[150px]" color="white" />
      <span className="text-white text-xl">{name}</span>
      <span className="text-neutral-400">{title}</span>
      <div className="flex flex-row">
        {copied ? (
          <IoCheckmark className="size-[23px] mx-1 text-green-500" />
        ) : (
          <MdEmail
            onClick={copyEmail}
            className="size-[23px] mx-1 cursor-pointer"
            color="white"
          />
        )}
        <a href={linkedin} target="_blank">
          <img
            className="size-[23px] mx-1 cursor-pointer"
            src={linkedin_logo}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default LeadPic;
