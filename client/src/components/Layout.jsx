import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import GlobalProvider from "../context/GlobalProvider";

function Layout() {
  return (
    <>
    <GlobalProvider>
      <Navbar/>
      <Outlet />
    </GlobalProvider>
    </>
  );
}

export default Layout;
