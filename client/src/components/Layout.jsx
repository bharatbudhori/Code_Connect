import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import GlobalProvider from "../context/GlobalProvider";
import Footer from "./Footer";

function Layout() {
  return (
    <>
    <GlobalProvider>
      <Navbar/>
      <Outlet />
      <Footer/>
    </GlobalProvider>
    </>
  );
}

export default Layout;
