import { useContext, useEffect } from "react";
import GlobalContext from "../../context/GlobalContext";
import ProblemSet from "../problemListPage/ProblemSet";
import useSocket from "../hooks/useSocket";
import { useLocation } from "react-router-dom";
import Lottie from "lottie-react";
// import groovyWalkAnimation from "./groovyWalk.json";
import animation from "./animation.json";
import ShareModal from "./ShareModal";

function WaitingRoom() {
  const { membersList, loggedIn, setRoomId, roomAdmin, username } =
    useContext(GlobalContext);
  console.log(membersList);
  const connectToRoom = useSocket();
  const location = useLocation();
  const roomId = location.pathname.split("/")[2];
  console.log(roomId);

  //connect to room with username and roomId
  useEffect(() => {
    console.log("useEffect called in waiting room", loggedIn, roomId);
    setRoomId(roomId);
    if (loggedIn) {
      connectToRoom();
      console.log("connected to room");
    }
  }, [loggedIn]);

  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-2xl font-bold">Please login to continue</div>
      </div>
    );
  }
  return (
    <>
      <div className="flex bg-gray">
        <aside className="h-screen bg-gray sticky top-0 border-r-2 p-6 pt-10 whitespace-nowrap z-10 closed shadow-xl w-1/3">
          <div className="mb-10 flex items-center justify-center underline underline-offset-2 text-xl ">
            Users
          </div>

          <div className="w-full max-w-sm ">
            <ul className="my-4 space-y-3">
              {/* <li>
                <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                  <img
                    src="https://avatars.githubusercontent.com/u/7221389?v=4"
                    className="w-8 h-8 rounded-full"
                    alt="user"
                  />
                  <span className="flex-1 ms-3 whitespace-nowrap">
                    Anshdeep
                  </span>
                  <span className="hidden xl:inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                    Admin
                  </span>
                </div>
              </li> */}
              {membersList.map((member, index) => (
                <li key={index}>
                  <div className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                    <img
                      src={`https://api.dicebear.com/7.x/bottts/svg?seed=${member}`}
                      className="w-8 h-8 rounded-full"
                      alt="user"
                    />
                    <span className="flex-1 ms-3 whitespace-nowrap">
                      {member}
                    </span>

                    {roomAdmin === member ? (
                      <span className="hidden xl:inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                        Admin
                      </span>
                    ) : null}
                  </div>
                </li>
              ))}
            </ul>
            {/* <div>
              <a
                href="#"
                className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline dark:text-gray-400"
              >
                <svg
                  className="w-3 h-3 me-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Why do I need to connect with my wallet?
              </a>
            </div> */}
          </div>
        </aside>
        <div className="w-full">
          {roomAdmin === username ? (
            <div className="bg-gray text-white text-center p-2">
              You are the admin of this room
              <main className="px-6 py-8 lg:px-8 bg-gray flex flex-col gap-6 ">
                Select a Question
                <ProblemSet />
              </main>
              <ShareModal />
            </div>
          ) : (
            <>
              <div className="flex flex-col justify-center items-center">
                <div className="text-3xl text-white text-center  pt-14">
                  Waiting for the admin to select a question
                </div>
                <div className="">
                  <Lottie
                    animationData={animation}
                    loop={true}
                    className="h-[500px]"
                  />
                </div>
              </div>
              
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default WaitingRoom;
