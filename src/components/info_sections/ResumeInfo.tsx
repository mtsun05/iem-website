import pic from "@/assets/iem-team-pic.png";
import { useState } from "react";

const PresentationInfo = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className="flex flex-col m-3 text-left">
      {!imageLoaded && (
        <div className="w-full h-113 rounded-2xl mx-2 mb-5 bg-neutral-800 animate-pulse" />
      )}

      <img
        className={`img w-full h-[450px] object-cover rounded-2xl mx-2 mb-5 ${
          imageLoaded ? "block" : "hidden"
        }`}
        src={pic}
        alt=""
        onLoad={() => setImageLoaded(true)}
      />
      <div className="flex flex-col ml-2">
        <span className="info-header text-white text-5xl mb-3">
          Access our elite talent.
        </span>
        <span className="info-body text-white font-light">
          When partnered with IEM, you're given access to our team resume book.
          Our members routinely work with industry-standard tools and specialize
          in various fields, including electrical engineering, mechanical
          engineering, computer science, and many more. Add to your recruitment
          pool through a partnership with IEM.
        </span>
      </div>
    </div>
  );
};

export default PresentationInfo;
