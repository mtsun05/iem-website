import pic from "@/assets/pres_pic1.jpg";
import { useState } from "react";

const PresentationInfo = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className="flex flex-col m-3 text-left items-center">
      {!imageLoaded && (
        <div className="w-full h-[450px] object-cover  rounded-2xl mx-2 mb-5 bg-neutral-800 animate-pulse" />
      )}

      <img
        className={`img w-full h-[450px] object-cover rounded-2xl mx-2 mb-5 ${
          imageLoaded ? "block" : "hidden"
        }`}
        src={pic}
        alt=""
        onLoad={() => setImageLoaded(true)}
      />
      <div className="flex flex-col mx-2">
        <span className="info-header text-white text-5xl mb-3">
          Reach the future.
        </span>
        <span className="info-body text-white font-light">
          Connect with our talented members through company presentations.
          Events we've had in the past include car shows from Rivian, tech talks
          from Tesla, recruiting events from Blue Origin and John Deere, just to
          name a few. These are a great opportunity to inform our engineers
          about your product and connect for future employment opportunities.
        </span>
      </div>
    </div>
  );
};

export default PresentationInfo;
