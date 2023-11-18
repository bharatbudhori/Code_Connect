import React from 'react'

const SearchFilter = () => {
  return (
   <>
    <div className="relative inline-block  ">
        <div className="flex flex-row">
            <input
            type="text"
            name="search" 
            className=" w-60 sm:text-sm rounded-md bg-gray-800 focus:border-gray-800 outline-none pl-3 py-3"
            placeholder="Search"
            />
            <button
            type="button"
            className="ml-2 w-50 inline-flex justify-center py-3 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700"
            >
            Search
            </button>
        </div>

       
    </div>

   </>
  )
}

export default SearchFilter