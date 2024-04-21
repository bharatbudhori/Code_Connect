import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Disclosure} from "@headlessui/react";

// function Footer() {
//     return (
//         <>
//             <footer className="bg-white shadow  dark:bg-gray-800">
//                 <div className="w-full mx-auto max-w-screen-xl p-4 ">
//                     <span className="text-sm text-white sm:text-center dark:text-white">
//                         © 2023{" "}
//                         <Link to="/" className="hover:underline">
//                             CodeDual™
//                         </Link>
//                         . All Rights Reserved.
//                     </span>
//                     <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
//                         <li>
//                             <Link to="/about" className="hover:underline me-4 md:me-6">
//                                 About
//                             </Link>
//                         </li>
//                         <li>
//                             <a href="https://drive.google.com/file/d/1RUo47ZSg9yUz8qhZJolC0upJm1_ikrZj/view?usp=sharing" target="_blank" className="hover:underline me-4 md:me-6">
//                                 Privacy Policy
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </footer>
//         </>
//     )
// }


function Footer (){ 
    const [isProblemPage, setIsProblemPage] = useState(false);
    const location = useLocation();
    useEffect(() => {
      console.log("Foot="+location.pathname);
        if (location.pathname.includes("/problems/")) {
            setIsProblemPage(true);
        }
    }, [location]);

    return(
        <Disclosure as="nav" className={`${isProblemPage ? "hidden" : ""} bg-gray-800`}>
        {({ open }) => (
            <>
                <footer class="p-6"><div class="max-w-screen-md mx-auto"><div class="flex flex-wrap sm:justify-center items-center"><ul class="flex font-bold mb-0 sm:mr-2"><li><small><a href="https://drive.google.com/file/d/1RUo47ZSg9yUz8qhZJolC0upJm1_ikrZj/view?usp=sharing" className="hover:underline mr-1">Privacy</a></small></li></ul><span class="hidden sm:inline-block text-gray-500 dark:text-gray-400"> | </span><p class="font-bold mb-0 sm:ml-2 text-gray-500 dark:text-a1"><small>Created with &nbsp;
                <svg role="graphics-symbol" aria-label="love" focusable="false" viewBox="0 0 512 512" width="14" height="14" class="inline-block fill-red-600 dark:fill-red-500"><path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3.0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg></small></p></div><p class="font-bold mb-0 sm:text-center text-gray-500 dark:text-a1"><small>Copyright © 2020 - <span id="copyright-year">2024</span> </small></p></div></footer> 
            </>
        )}
        </Disclosure>
    );
}
export default Footer