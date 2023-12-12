import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
    return (
        <>
            <footer className="bg-white rounded-lg shadow  dark:bg-gray-800">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                    <span className="text-sm text-white sm:text-center dark:text-white">
                        © 2023{" "}
                        <Link to="/" className="hover:underline">
                            CodeDual™
                        </Link>
                        . All Rights Reserved.
                    </span>
                    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                        <li>
                            <Link to="/about" className="hover:underline me-4 md:me-6">
                                About
                            </Link>
                        </li>
                        <li>
                            <a href="https://drive.google.com/file/d/1RUo47ZSg9yUz8qhZJolC0upJm1_ikrZj/view?usp=sharing" target="_blank" className="hover:underline me-4 md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer