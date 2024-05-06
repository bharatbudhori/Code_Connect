import React from "react";

export default function Drawer({ children, isOpen, setIsOpen, language }) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
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
        <article className="relative w-screen max-w-3xl pb-10 flex flex-col space-y-6 overflow-y-scroll h-full bg-gray-900">
          <header className="p-4 font-bold text-lg">
            {/* Your Pair Programmer's code */}
            Bhagavath's code
          </header>
          <h4
            className="absolute top-4 left-4 text-white py-1"
            style={{ fontSize: "0.8rem" }}
          >
            {`Language Selected: ${language}`}
          </h4>
          <div className="flex right-28 absolute top-2"> No of Participants: 5</div>
          <span className="absolute top-4 right-4">
            <button
              className="text-gray-400 hover:text-gray-800"
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
            <div className=" text-gray-700 bg-gray-500 h-screen w-screen">
              {children}
            </div>
            <nav
              className="bg-gray-900 w-28  justify-between flex flex-col "
              //  style={{
              //   position: "absolute",
              //   right: "0px",
              //   top: "200px",
              //   zIndex: "100",
              //   borderRadius: "50px 0px 0px 50px",
              // }}
            >
              <div className="mt-10 mb-10">
                <div>
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQGk1IcPa0-G_g/profile-displayphoto-shrink_200_200/0/1700127327417?e=1720656000&v=beta&t=IEQDaJYEXWLlzD5u9vRVp5qMkAo9pbS9U2JlhW3YCeo"
                    className="rounded-full w-10 h-10 mb-3 mx-auto"
                    alt="profile"
                  />
                  <h2 className="flex items-center justify-center my-2 rounded text-xs font-medium  leading-tight text-white ">
                    {" "}
                    Anshdeep{" "}
                  </h2>
                </div>

                <div class="flex items-start">
                  <ul className="me-4 flex list-none flex-col flex-wrap ps-0">
                    <li className="flex-grow text-center">
                      <a
                        href="#pills-profile03"
                        className="my-2 block rounded bg-gray-700 px-7 pb-3.5 pt-4 text-xs font-medium  leading-tight text-white "
                      >
                        <img
                          src="https://media.licdn.com/dms/image/D4D03AQFqlG4bn8rn6A/profile-displayphoto-shrink_200_200/0/1675432541643?e=1720656000&v=beta&t=Rd4oEomzW7B-i8NAB1HVxKN8lCpwwTCyimxKS4CfhcE"
                          className="rounded-full w-10 h-10 mb-3 mx-auto"
                          alt="profile"
                        />
                        Bhagavath
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="my-3 ">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQF2C6kJOb5DWw/profile-displayphoto-shrink_200_200/0/1692419814095?e=1720656000&v=beta&t=A_Yu0MqABVZeoY9xiFMcCVGBeX9DSilkhHvOgOVrP0M"
                    className="rounded-full w-10 h-10 mb-3 mx-auto"
                    alt="profile"
                  />
                  <h2 className="flex items-center justify-center rounded text-xs font-medium  leading-tight text-white ">
                    {" "}
                    Bharat
                  </h2>
                </div>

                <div className="my-3">
                  <img
                    src="https://media.licdn.com/dms/image/D4D03AQG11UoklB2fNQ/profile-displayphoto-shrink_200_200/0/1700520178447?e=1720656000&v=beta&t=qPi6Wxish63XtGTV_l8HMzHg4WPnpigKr7rxpkWLKJk"
                    className="rounded-full w-10 h-10 mb-3 mx-auto"
                    alt="profile"
                  />
                  <h2 className="flex items-center justify-center rounded text-xs font-medium  leading-tight text-white  ">
                    {" "}
                    Ekaspreet
                  </h2>
                </div>
              </div>
            </nav>
          </div>
        </article>
      </section>

      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
