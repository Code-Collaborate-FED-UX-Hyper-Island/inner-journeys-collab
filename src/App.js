import React from "react";
import VideoCarousel from "./components/VideoCarousel/VideoCarousel";
import "./App.css";
import LandingPageMain from "./pages/LandingPage/LandingPageMain";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import AboutUs from "./pages/AboutUs/AboutUs";
import EventsAndRetreats from "./pages/EventsAndRetreats/EventsAndRetreats";
import Concerts from "./pages/Concerts/Concerts";
import ContactUsPage from "./pages/ContactUsPage/ContactUsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <LandingPageMain />,
      },
      {
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/events",
        element: <EventsAndRetreats />,
      },
      {
        path: "/concerts",
        element: <Concerts />,
      },
      {
        path: "/contact",
        element: <ContactUsPage />,
      },
      {
        path: "/home",
        element: <LandingPageMain />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
