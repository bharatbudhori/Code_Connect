import React from 'react'
import { NavLink } from "react-router-dom";
import TerminalIcon from '@mui/icons-material/Terminal';

const Output = () => {
  return (

   <div>
    <div className="p-4 bg-gray-800 text-gray-200">
          <div className="flex justify-between items-center">
            <div className="flex items-center pl-8">
              <TerminalIcon className="h-8 w-8 text-white" />
            </div>
            {/* MOBILE NAV ICON */}
            <div className="md:hidden block absolute top-4 right-8 fixed">
              <button aria-label="navigation" type="button" className="md:hidden text-gray-200 transition duration-300 focus:outline-none focus:text-white hover:text-white"><i className="fas fa-bars text-3xl" id="bars" />          </button>
            </div>
            {/* NAVIGATION - LARGE SCREENS */}
            <div className="hidden md:flex">
              <ul className="hidden md:flex">
                <li className="text-lg pr-8 ">
                    <NavLink to="/code_env/custom_input" className={({isActive})=>`transition duration-300 ${isActive ? "text-yellow-500 underline":""} focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500`} style={{textUnderlineOffset: '8px'}}>
                        Custom Input
                    </NavLink>
                </li>
                <li className="text-lg pr-8">
                    <NavLink to="/code_env/your_output" href className={({isActive})=>`transition duration-300 ${isActive ? "text-yellow-500 underline":""} focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500`} style={{textUnderlineOffset: '8px'}}>
                        Your Output
                    </NavLink>
                </li>
                <li className="text-lg pr-8">
                  <NavLink to="expected_output"  className={({isActive})=>`transition duration-300 ${isActive ? "text-yellow-500 underline":""} focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500`} style={{textUnderlineOffset: '8px'}}>
                    Expected Output
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="hidden md:flex">
              <a href="#"><i className="fab fa-facebook text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500" /></a>
              <a href="#"><i className="fab fa-linkedin text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500" /></a>
              <a href="#"><i className="fab fa-instagram text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500" /></a>
              <a href="#"><i className="fab fa-twitter text-2xl pr-8 transition duration-300 focus:text-yellow-500 hover:text-yellow-500" /></a>
            </div>
          </div>
          {/* MOBILE MENU */}
          <div id="mobileMenu" className="hidden flex w-full mx-auto py-8 text-center">
            <div className="flex flex-col justify-center items-center w-full">
              <a href="#" className="block text-gray-200 cursor-pointer py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{textUnderlineOffset: '8px'}}>Home</a>
              <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{textUnderlineOffset: '8px'}}>About</a>
              <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{textUnderlineOffset: '8px'}}>Blog</a>
              <a href="#" className="block text-gray-200 cursor-pointer mt-1 py-3 transition duration-300 focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500" style={{textUnderlineOffset: '8px'}}>Contact</a>
            </div>
          </div>
        </div>
      </div>

  )
}

export default Output




// import { Fragment, useState } from "react";
// import { Disclosure, Menu, Transition } from "@headlessui/react";
// import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { Link } from "react-router-dom";
// import TerminalIcon from '@mui/icons-material/Terminal';

// const navigation = [
//   { name: "Output", href: "/Output2", current: true },
//   { name: "Team", href: "/room", current: false },
//   { name: "Projects", href: "#", current: false },
//   { name: "Code", href: "/code_env", current: false },
// ];

// function classNames(...classes) {
//   return classes.filter(Boolean).join(" ");
// }

// export default function Navbar() {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   return (
//     <Disclosure as="nav" className="bg-gray-800">
//       {({ open }) => (
//         <>
//           <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
//             <div className="relative flex h-16 items-center justify-between">
//               <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
//                 {/* Mobile menu button*/}
//                 <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
//                   <span className="absolute -inset-0.5" />
//                   <span className="sr-only">Open main menu</span>
//                   {open ? (
//                     <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
//                   ) : (
//                     <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
//                   )}
//                 </Disclosure.Button>
//               </div>
//               <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
//                 <div className="flex flex-shrink-0 items-center">
//                   <TerminalIcon className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="hidden sm:ml-6 sm:block">
//                   <div className="flex space-x-4">
//                     {navigation.map((item, index) => (
//                       <Link
//                         key={item.name}
//                         to={item.href}
//                         onClick={() => setCurrentIndex(index)}
//                         className={classNames(
//                           index === currentIndex
//                             ? "bg-gray-900 text-white"
//                             : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                           "rounded-md px-3 py-2 text-sm font-medium"
//                         )}
//                         aria-current={item.current ? "page" : undefined}
//                       >
//                         {item.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <Disclosure.Panel className="sm:hidden">
//             <div className="space-y-1 px-2 pb-3 pt-2">
//               {navigation.map((item, index) => (
//                 <Link
//                   key={item.name}
//                   as="a"
//                   to={item.href}
//                   onClick={() => setCurrentIndex(index)}
//                   className={classNames(
//                     currentIndex === index
//                       ? "bg-gray-900 text-white"
//                       : "text-gray-300 hover:bg-gray-700 hover:text-white",
//                     "block rounded-md px-3 py-2 text-base font-medium"
//                   )}
//                   aria-current={currentIndex === index ? "page" : undefined}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </div>
//           </Disclosure.Panel>
//         </>
//       )}
//     </Disclosure>
//   );
// }
