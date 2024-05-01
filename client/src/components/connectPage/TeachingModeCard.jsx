import React from "react";

const TeachingModeCard = () => {
  return (
    <>
      <div className="rounded bg-gray-800 w-1/3 flex flex-col justify-center items-center p-4">
        <h1 h1 className="text-4xl">Teaching Mode</h1>
        <img src="/Teacher.png" alt="Teacher" className="mt-2 h-72" />
        <div className="my-4 text-white text-justify">
        In Teaching Mode, instructors have the capability to establish a virtual classroom tailored for their students. Within this setup, teachers maintains unrestricted access to review, evaluate and correct the codes from the students. Students are unable to view the codes of their peers. This Unrestricted access empowers teachers to monitor progress effectively and offer personalized guidance, fostering student development.
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

export default TeachingModeCard;