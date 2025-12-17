import pic from "@/assets/landing-card-1.png";
import { useState } from "react";

const SocialInfo = () => {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  return (
    <div className="flex flex-col m-3 text-left">
      {!imageLoaded && (
        <div className="w-full h-[450px] object-cover rounded-2xl mx-2 mb-5 bg-neutral-800 animate-pulse" />
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
        <span className="info-header text-white text-5xl mb-3 ">
          Showcase your products.
        </span>
        <span className="info-body text-white font-light">
          Beyond placing your logo on our products, some levels of partnership
          allow us to show off your specific contributions to our mission.
          Orange members are given a social media story, while Lithium and Gold
          members are entitled to a social media post on top of that where we
          showcase how your products and support helped us achieve our goals.
        </span>
      </div>
    </div>
  );
};

export default SocialInfo;
