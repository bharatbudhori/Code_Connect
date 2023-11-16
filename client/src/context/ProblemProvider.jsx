import React, { useState } from 'react'
import  ProblemContext  from './ProblemContext';

function ProblemProvider({children}) {
    const [problems, setProblems] = useState([]);
    const [filteredProblems, setFilteredProblems] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");
    
    const value = {
        problems,
        setProblems,
        filteredProblems,
        setFilteredProblems,
        selectedDifficulty,
        setSelectedDifficulty
    };

  return (
    <ProblemContext.Provider value={value}>
        {children}
    </ProblemContext.Provider>
  )
}

export default ProblemProvider