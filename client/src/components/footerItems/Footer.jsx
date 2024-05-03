import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure } from "@headlessui/react";
import Privacypolicy from "./PrivacyPolicy";

function Footer() {
  const [isProblemPage, setIsProblemPage] = useState(false);
  const location = useLocation();
  useEffect(() => {
    // console.log("Foot=" + location.pathname);
    if (location.pathname.includes("/problems/")) {
      setIsProblemPage(true);
    } else {
      setIsProblemPage(false);
    }
  }, [location.pathname]);

  return (
    <Disclosure
      as="nav"
      className={`${isProblemPage ? "hidden" : ""} bg-gray-800`}
    >
      {({ open }) => (
        <>
          <footer className=" fixed p-6 bottom-0 w-full bg-gray-800">
            <div className="max-w-screen-md mx-auto">
              <div className="flex flex-wrap sm:justify-center items-center">
                <ul className="flex font-bold mb-0 sm:mr-2">
                  <li>
                    <small>
                      <Privacypolicy/>
                    </small>
                  </li>
                </ul>
                <span className="hidden sm:inline-block text-gray-500 dark:text-gray-400">
                  {"{"}" "{"}"}|{"{"}" "{"}"}
                </span>
                <p className="font-bold mb-0 sm:ml-2 text-gray-500 dark:text-a1">
                  <small>
                    Created with &nbsp;
                    <svg
                      role="graphics-symbol"
                      aria-label="love"
                      focusable="false"
                      viewBox="0 0 512 512"
                      width={14}
                      height={14}
                      className="inline-block fill-red-600 dark:fill-red-500"
                    >
                      <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3.0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z" />
                    </svg>
                  </small>
                </p>
              </div>
              <p className="font-bold mb-0 sm:text-center text-gray-500 dark:text-a1">
                <small>
                  Copyright © 2020 - <span id="copyright-year">2024</span>
                  {"{"}" "{"}"}
                </small>
              </p>
            </div>
          </footer>
        </>
      )}
    </Disclosure>
  );
}
export default Footer;
