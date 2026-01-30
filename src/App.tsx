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

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
