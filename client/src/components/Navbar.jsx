/* eslint-disable jsx-a11y/anchor-is-valid */
import { Fragment, useState, u, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { isLoggedin, logout } from "../utlis/loginUtils";
import GlobalContext from "../context/GlobalContext";
import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import useProblems from "./hooks/useProblems";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Problems", href: "/problems", current: false },
  { name: "About Us", href: "/about", current: false },
  { name: "Connect", href: "/connect", current: false },
  // { name: "Join Room", href: "/join", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  useProblems();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isProblemPage, setIsProblemPage] = useState(false);
  // const [loggedIn, setLoggedIn] = useState(isLoggedin());
  const { loggedIn, setLoggedIn, username, email } = useContext(GlobalContext);
  useEffect(() => {
    setLoggedIn(isLoggedin());
  }, [setLoggedIn]);
  const url = useLocation();
  useEffect(() => {
    if (url.pathname === "/problems") {
      setCurrentIndex(1);
    } else if (url.pathname === "/about") {
      setCurrentIndex(2);
    } else if (url.pathname === "/problems/3") {
      setCurrentIndex(3);
    } else if (url.pathname === "/connect") {
      setCurrentIndex(4);
    } else {
      setCurrentIndex(0);
    }
  }, [url.pathname]);

  const location = useLocation();
  useEffect(() => {
    // console.log("Head"+location.pathname);
    if (location.pathname.includes("/problems/")) {
      setIsProblemPage(true);
    } else {
      // console.log("IN ELSE PART");
      setIsProblemPage(false);
    }
  }, [location.pathname]);

  // console.log(url.pathname,"url");
  return (
    <Disclosure
      as="nav"
      className={`${isProblemPage ? "hidden" : ""} bg-gray-800`}
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="w-8 h-8 mr-2 rounded-full"
                    src="mainLogo2.png"
                    alt="logo"
                  />
                  Code Connect
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setCurrentIndex(index)}
                        className={classNames(
                          index === currentIndex
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  {loggedIn ? (
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  ) : null}
                </button> */}

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    {loggedIn ? (
                      <Menu.Button className="flex text-sm rounded-md  ">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-11 w-11 mr-2 rounded-full border-2 border-sky-400 p-1"
                          src={`https://api.dicebear.com/7.x/bottts/svg?seed=${localStorage.getItem(
                            "username"
                          )}`}
                          alt=""
                        />
                        <div className="font-medium text-gray-100 my-auto">
                          <div>{username}</div>
                          {/* <div className="text-sm text-gray-500 dark:text-gray-400">
                            Joined in August 2014
                          </div> */}
                        </div>
                      </Menu.Button>
                    ) : (
                      <Link
                        to="/login"
                        className="text-white bg-gray-600 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        Login
                      </Link>
                    )}
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md  bg-gray-700 text-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                      {/* display username */}
                      <Menu.Item>
                        <div className="z-10  bg-gray-700 divide-y   shadow border-b border-gray-400   ">
                          <div className="px-4 py-3 text-sm ">
                            <div>{username}</div>
                            <div className="font-medium truncate">{email}</div>
                          </div>
                        </div>
                      </Menu.Item>

                      <Menu.Item className="pt-3">
                        {({ active }) => (
                          <Link
                            to={`/u/${localStorage.getItem("username")}`}
                            className={classNames(
                              active ? "bg-gray-600" : "",
                              "block px-4 py-2 text-sm "
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
         
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/"
                            className={classNames(
                              active ? "bg-gray-600" : "",
                              "block px-4 py-2 text-sm "
                            )}
                            onClick={() => {
                              setLoggedIn(false);
                              logout();
                            }}
                          >
                            Log out
                          </Link>
                        )}
                      </Menu.Item>
                      {/* <Menu.Item>
                        <div className="z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div>Bonnie Green</div>
                            <div className="font-medium truncate">
                              name@flowbite.com
                            </div>
                          </div>
                          <ul
                            className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="avatarButton"
                          >
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Dashboard
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Settings
                              </a>
                            </li>
                            <li>
                              <a
                                href="#"
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              >
                                Earnings
                              </a>
                            </li>
                          </ul>
                          <div className="py-1">
                            <a
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                            >
                              Sign out
                            </a>
                          </div>
                        </div>
                      </Menu.Item> */}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  as="a"
                  to={item.href}
                  onClick={() => setCurrentIndex(index)}
                  className={classNames(
                    currentIndex === index
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={currentIndex === index ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
