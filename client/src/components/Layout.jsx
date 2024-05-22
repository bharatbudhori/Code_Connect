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
    <>
      <ToastContainer />
      <GlobalProvider>
        <ProblemProvider>
          <Navbar />
          {/* <div className="min-h-[74vh] mb-48"> */}
            <Outlet />
          {/* </div> */}
        </ProblemProvider>
        {/* <Footer /> */}
      </GlobalProvider>
    </>
  );
}

export default Layout;
