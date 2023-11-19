import React, { useState } from 'react'
import  ProblemContext  from './ProblemContext';

function ProblemProvider({children}) {
    const [allProblems, setAllProblems] = useState([]);
    const [filteredProblems, setFilteredProblems] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");

    
    const value = {
        allProblems,
        setAllProblems,
        filteredProblems,
        setFilteredProblems,
        selectedDifficulty,
        setSelectedDifficulty,
       
    };

  return (
    <ProblemContext.Provider value={value}>
        {children}
    </ProblemContext.Provider>
  )
}

export default ProblemProvider