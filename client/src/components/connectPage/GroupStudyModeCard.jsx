import React from "react";

const GroupStudyModeCard = () => {
  return (
    <>
      <div className=" rounded bg-gray-800 w-1/3 flex flex-col justify-center items-center p-4 ml-4">
        <h1 className="text-4xl">Group Study Mode</h1>
        <img src="/student.png" alt="student" className="mt-2 w-72 h-34"/>
        <div className="my-4 text-white text-justify">
        In Group Study Mode, students can create a room for their collaborative study sessions. Within these sessions, students have the ability to view the codes of their peers. This enriches their learning experiences to new heights. This exchange of perspectives and approaches not only promotes deeper understanding but also cultivates a supportive learning community. Students are unable to edit the code of other students in the room.
        </div>
        <div className="flex">
          <button className="rounded text-white bg-blue-500 hover:bg-blue-600 mr-2 px-4 py-2"><div className="text-2xl"><b>Create Room</b></div></button>
          <button className="p-1 rounded-lg text-white bg-blue-500 hover:bg-blue-600 flex items-center justify-center">
            <img src="/copy.png" alt="copy" className="w-12" />
          </button>
        </div>
      </div>
    </>
  );
};

export default GroupStudyModeCard;
