import React, { useContext } from "react";
import GlobalContext from "../../context/GlobalContext";

export default function Drawer({ children, isOpen, setIsOpen, language }) {
  const {
      memberIndex,
      setMemberIndex,
      socket,
      memberCount,
  } = useContext(GlobalContext);
  // console.log(`Drawing ${memberCount} members`);

  const handleButtonClick = (index) => {
    if (memberIndex === index) {
      // Clicking an already active button should deselect it
      setMemberIndex(null);
    } else {
      setMemberIndex(index);
    }
    // console.log(memberCount[memberIndex])
  };

  return (
    <main
      className={
        // " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        " fixed overflow-hidden z-10 bg-yellow-300 bg-opacity-25 inset-0 transform ease-in-out " +
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
        {/* <article className="relative w-screen max-w-3xl pb-10 flex flex-col space-y-6 overflow-y-scroll h-full bg-gray-900"> */}
        <article className="relative w-screen max-w-3xl pb-10 flex flex-col space-y-6 overflow-y-scroll h-[88vh] bg-green-900">
          <header className="p-4 font-bold text-lg">
            {/* Your Pair Programmer's code */}
            {memberCount.length}
          </header>
          <h4
            className="absolute top-4 left-4 text-white py-1"
            style={{ fontSize: "0.8rem" }}
          >
            {`Language Selected: ${language}`}
          </h4>
          <div className="flex right-28 absolute top-2"> No of Participants: {memberCount.length}</div>
          <span className="absolute top-4 right-4">
            <button
              // className="text-gray-400 hover:text-gray-800"
              className="text-pink-400 hover:text-gray-800"
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
            <div className=" text-gray-700 bg-red-500 h-[88vh] w-screen">
              {children}
            </div>
            <nav
              className="bg-gray-900 justify-between flex flex-col "
              //  style={{
              //   position: "absolute",
              //   right: "0px",
              //   top: "200px",
              //   zIndex: "100",
              //   borderRadius: "50px 0px 0px 50px",
              // }}
            >
              <div className="mt-10 mb-10 w-24">
                <div class="flex items-start">
                  <ul className=" flex list-none flex-col flex-wrap">
                    {socket && memberCount?.map((member, index) => {
                      return (
                        <li key={index}>
                          <button
                            className={`hover:bg-600 p-3 pb-1 ${memberIndex === index ? 'bg-blue-500' : ''}`}
                            onClick={() => handleButtonClick(index)}
                          >
                            <img
                              src="/ansh.jpeg"
                              className="rounded-full w-25 mb-3 mx-auto"
                              alt="profile"
                              />
                              <h2 className="flex items-center justify-center my-2 rounded text-xs font-medium  leading-tight text-white">{member}</h2>
                          </button>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </article>
      </section>

      <section
        className=" bg-orange-300 w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
