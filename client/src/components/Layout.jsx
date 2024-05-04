import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import GlobalProvider from "../context/GlobalProvider";
import Footer from "./footerItems/Footer";

function Layout() {
  return (
    <>
      <GlobalProvider>
        <Navbar />
        <div className="min-h-[74vh]">
          <Outlet />
        </div>
        {/* <Footer /> */}
      </GlobalProvider>
    </>
  );
}

export default Layout;
