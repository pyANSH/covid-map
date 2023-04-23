import { createBrowserRouter } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Map from "./pages/Maps/Map";
import Home from "./pages/Home/Home";
import Layout from "./layout/Layout";
import Dashboard from "./pages/Dashboard/Dashboard";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout children={<Home />} />,
  },
  {
    path: "/contact",
    element: <Layout children={<Contact />} />,
  },
  {
    path: "/map",
    element: <Layout children={<Map />} />,
  },
  {
    path: "/dashboard",
    element: <Layout children={<Dashboard />} />,
  },
]);
