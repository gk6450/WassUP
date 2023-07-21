import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsFilter } from "react-icons/bs";

function SearchBar() {
  const [{contactSearch }, dispatch] = useStateProvider();

  return (
    <div className="flex bg-search-input-container-background py-3 pl-5 items-center h-14">
      <div className="flex bg-panel-header-background items-center gap-5 px-3 py-1 rounded-lg flex-grow">
        <BiSearchAlt2 className="cursor-pointer text-l text-panel-header-icon" />
        <input
          type="text"
          placeholder="Search or Start a new chat"
          className="bg-transparent text-sm focus:outline-none text-white w-full"
          onChange={e=>dispatch({type:reducerCases.SET_CONTACT_SEARCH,contactSearch:e.target.value})}
        />
      </div>
      <div className="pr-5 pl-3">
        <BsFilter className="cursor-pointer text-l text-panel-header-icon" />
      </div>
    </div>
  );
}

export default SearchBar;
