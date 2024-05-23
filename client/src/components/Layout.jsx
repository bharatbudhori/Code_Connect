import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import GlobalProvider from "../context/GlobalProvider";
import Footer from "./footerItems/Footer";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ProblemProvider from "../context/ProblemProvider";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <ToastContainer />
      <GlobalProvider>
        <ProblemProvider>
          <Navbar />
          <div className="flex-grow">
            <Outlet />
          </div>
        </ProblemProvider>
      </GlobalProvider>
      <Footer />
    </div>
  );
}

export default Layout;
