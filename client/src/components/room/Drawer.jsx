import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";
import GlobalProvider from "../../context/GlobalProvider";

export default function Drawer({ children, isOpen, setIsOpen, language }) {
  const { memberIndex, setMemberIndex, socket, membersList, username } =
    useContext(GlobalContext);
  // console.log(`Drawing ${membersList} members`);

  const [selectedMemberName, setSelectedMemberName] = useState(null);

  useEffect(() => {
    // Select the first available member upon initial load, excluding self
    if (membersList.length > 0) {
      const firstAvailableMember = membersList.find(
        (member) => member !== username
      );
      if (firstAvailableMember) {
        const index = membersList.indexOf(firstAvailableMember);
        setMemberIndex(index);
        setSelectedMemberName(firstAvailableMember);
      }
    }
  }, [membersList, username]);

  const handleButtonClick = (index, member) => {
    if (memberIndex === index) {
      // Clicking an already active button should deselect it
      setMemberIndex(null);
      setSelectedMemberName(null);
    } else {
      setMemberIndex(index);
      setSelectedMemberName(member);
    }
    // console.log(membersList[memberIndex])
  };

  return (
    <main
      className={
        // " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " + DONE
        " fixed overflow-hidden z-10 backdrop-blur-sm inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-3xl right-0 absolute bg-white h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        {/* <article className="relative w-screen max-w-3xl pb-10 flex flex-col space-y-6 overflow-y-scroll h-full bg-gray-900"> DONE*/}
        <article className="relative w-screen max-w-3xl pb-10 flex flex-col space-y-6 h-full bg-blue-900">
          <header className="p-4 font-bold text-lg">
            {/* Your Pair Programmer's code */}
            {selectedMemberName ? `${selectedMemberName}` : "Select a member"}
          </header>
          <h4
            className="absolute top-4 left-4 text-white py-1"
            style={{ fontSize: "0.8rem" }}
          >
            {`Language Selected: ${language}`}
          </h4>
          <div className="flex right-28 absolute top-2">
            {" "}
            No of Participants: {membersList.length}
          </div>
          <span className="absolute top-4 right-4">
            <button
              // className="text-gray-400 hover:text-gray-800"
              className="text-gray-100 hover:text-gray-800"
              onClick={() => {
                setIsOpen(false);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </span>
          <div className="flex flex-row h-full">
            {/* Sidebar */}
            {/* <div className=" text-gray-700 bg-gray-500 h-[88vh] w-screen"> */}
            <div className=" text-gray-700 bg-gray-500 h-full w-screen">
              {children}
            </div>
            <nav className="bg-blue-900 h-full justify-between flex flex-col ">
              <div className="mt-2 mb-2 w-24 h-full">
                <div className="flex items-start">
                  <ul className=" flex list-none flex-col flex-wrap">
                    {socket &&
                      membersList
                        // .sort((a, b) => a.localeCompare(b))
                        .map((member, index) => {
                          if (member === username) return null;
                          return (
                            <li key={index}>
                              <button
                                className={`hover:bg-600  p-7 pb-1 ${
                                  memberIndex === index ? "bg-blue-500" : ""
                                }`}
                                onClick={() => handleButtonClick(index, member)}
                              >
                                <img
                                  src={`https://api.dicebear.com/7.x/bottts/svg?seed=${member}`}
                                  className="rounded-full  mb-3 mx-auto"
                                  alt="profile"
                                />
                                <h2 className="flex items-center justify-center my-2 rounded text-2xl font-medium  leading-tight text-white">
                                  {member}
                                </h2>
                              </button>
                            </li>
                          );
                        })}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </article>
      </section>

      <section
        className=" w-screen h-full cursor-pointer"
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
