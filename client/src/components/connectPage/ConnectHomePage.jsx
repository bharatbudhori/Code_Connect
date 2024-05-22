import React from "react";
import TeachingModeCard from "./TeachingModeCard";
import GroupStudyModeCard from "./GroupStudyModeCard";

const ConnectHomePage = () => {
  return (
    <>
      
      <div className="flex justify-center items-center my-4">
        <TeachingModeCard/>
        <GroupStudyModeCard/>
      </div>
    </>
  );
};

export default ConnectHomePage;
