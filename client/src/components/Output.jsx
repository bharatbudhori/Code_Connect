import React, { useContext, useEffect, useState } from 'react'
import TerminalIcon from '@mui/icons-material/Terminal';
import Testcases from './Testcases';
import YourOutput from './YourOutput';
import ExpectedOutput from './ExpectedOutput';
import CodeEditorContext from '../context/CodeEditorContext';

const Output = () => {
  const { activeComponent, setActiveComponent } = useContext(CodeEditorContext);

  const showComponent = (component) => {
    setActiveComponent(component);
  };

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
                <li className="text-lg pr-8">
                  <button onClick={ ()=>showComponent('testcases') } className={ `transition duration-300 ${activeComponent === 'testcases' ? "text-yellow-500 underline":""} focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500`} style={{textUnderlineOffset: '8px'}}>
                    Testcases
                  </button>
                </li>
                <li className="text-lg pr-8">
                    <button onClick={ ()=>showComponent('your output') } className={ `transition duration-300 ${activeComponent === 'your output' ? "text-yellow-500 underline":""} focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500`} style={{textUnderlineOffset: '8px'}}>
                        Your Output
                    </button>
                </li>
                <li className="text-lg pr-8">
                  <button onClick={ ()=>showComponent('expected output') } className={ `transition duration-300 ${activeComponent === 'expected output' ? "text-yellow-500 underline":""} focus:outline-none focus:text-yellow-500 focus:underline hover:underline hover:text-yellow-500`} style={{textUnderlineOffset: '8px'}}>
                    Expected Output
                  </button>
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
        { activeComponent === 'testcases' && <Testcases /> }
        { activeComponent === 'your output' && <YourOutput /> }
        { activeComponent === 'expected output' && <ExpectedOutput /> }
      </div>

  )
}

export default Output
