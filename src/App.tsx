import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Layout from "./Layout";
import Join from "./pages/Join";
import Cars from "./pages/Cars";
import AboutUs from "./pages/AboutUs";
import Sponsors from "./pages/Sponsors";
import SponsorInfo from "./pages/SponsorInfo";
import { useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { RoughEase } from "gsap/EasePack";
import logo from "./assets/iem-logo-white.svg";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(RoughEase);
gsap.registerPlugin(SplitText);
gsap.registerPlugin(useGSAP);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "teams",
        element: <Teams />,
      },
      {
        path: "join",
        element: <Join />,
      },
      {
        path: "cars",
        element: <Cars />,
      },
      {
        path: "sponsors",
        element: <Sponsors />,
      },
      {
        path: "sponsor-info",
        element: <SponsorInfo />,
      },
    ],
  },
]);

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  useGSAP(() => {
    let split = SplitText.create(".loading-span", { type: "chars" });
    let tl = gsap.timeline({ onComplete: onComplete });

    tl.fromTo(
      split.chars,
      { opacity: 0 },
      { opacity: 1, stagger: { amount: 0.5 }, repeat: 2, yoyo: true },
      0
    )
      .fromTo(
        ".logo",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.25,
          ease: "power2.in",
        },
        1.5
      )
      .to(
        ".loading-screen",
        {
          filter: "blur(20px)",
          duration: 1,
        },
        3.25
      )
      .to(
        ".loading-screen",
        {
          opacity: 0,
          duration: 1,
        },
        3.25
      );
  }, []);
  return (
    <div className="loading-screen flex flex-col fixed top-0 min-h-full min-w-full justify-center bg-[#0f0f0f] items-center z-1000">
      <span className="loading-span text-neutral-800 text-[300px] italic font-bold">
        LOADING
      </span>
      <img
        className="logo absolute size-2/3 opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        src={logo}
        alt=""
      />
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const animationDone = () => {
    setLoading(false);
  };

  return (
    <>
      {/* {loading && <LoadingScreen onComplete={animationDone} />} */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
