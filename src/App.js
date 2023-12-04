import { Outlet, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CreateAds from "./components/CreateAds";
import { Box } from "@mui/material";
import MediaAdForm from "./components/MediaAdForm";
import TextAdForm from "./components/TextAdForm";
import SuccessPage from "./components/SuccessPage";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Box component="main" sx={{ p: 3, marginTop: "65px" }}>
        <Outlet />
      </Box>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/create-ads",
        element: <CreateAds />,
      },
      {
        path: "/media-ads-fill-data",
        element: <MediaAdForm />,
      },
      {
        path: "/text-ads-fill-data",
        element: <TextAdForm />,
      },
      {
        path: "/form-submitted",
        element: <SuccessPage />,
      },
    ],
  },
]);

export default appRouter;
