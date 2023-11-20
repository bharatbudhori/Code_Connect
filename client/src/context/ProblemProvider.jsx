import React, { useState } from 'react'
import  ProblemContext  from './ProblemContext';
import SearchFilter from './../components/sub-components/SearchFilter';

function ProblemProvider({children}) {
    const [allProblems, setAllProblems] = useState([]);
    const [filteredProblems, setFilteredProblems] = useState([]);
    const [selectedDifficulty, setSelectedDifficulty] = useState("All");
    const [searchFilter, setSearchFilter] = useState("");
    const [tagsFilter, setTagsFilter] = useState([]);
    const [statusFilter, setStatusFilter] = useState("All");
    
    const value = {
        allProblems,
        setAllProblems,
        filteredProblems,
        setFilteredProblems,
        selectedDifficulty,
        setSelectedDifficulty,
        searchFilter,
        setSearchFilter,
        tagsFilter,
        setTagsFilter,
        statusFilter,
        setStatusFilter
    };

  return (
    <ProblemContext.Provider value={value}>
        {children}
    </ProblemContext.Provider>
  )
}

export default ProblemProvider