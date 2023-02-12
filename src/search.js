import React, { useState } from "react";
import Dropdown from "./components/dropDown";
import NewsTileSearch from "./components/newsTileSearch";
import TopbarSearch from "./components/topbarSearch"

const Search = () => {

  const [dateRange, setdateRange] = useState("all");
  const [page, setpage] = useState("0");
  const [query, setquery] = useState("all"); // query is the search eneterd by user
  const [sort, setsort] = useState("byPopularity");
  const [type, settype] = useState("all"); // tags in api docs  

  const filterValues = [
    ["All", "Stories", "Comments"],
    ["Popularity", "Date"],
    ["All time", "Last 24H", "Past Week", "Past Month", "Past Year"],
  ];

  const handleSelectType = (value) => {
    if (value === "All") {
      settype("all");
    }
    if (value === "Stories") {
      settype("story");
    }
    if (value === "Comments") {
      settype("comment");
    }
  };
  const handleSelectTime = (value) => {
    if (value === "All time") setdateRange("all");
    if (value === "Last 24h") setdateRange("last24h");
    else if (value === "Past Week") setdateRange("pastWeek");
    else if (value === "Past Month") setdateRange("pastMonth");
    // else if (value === "Past Year") setdateRange("pastYear");

    else setdateRange("pastYear");

  };
  const handleSelectSort = (value) => {
    if (sort === "Popularity")
      setsort("byPopularity");
    else 
      setsort("byDate");
  };
  return (
    <div className="w-[86%] items-center ml-[7%] bg-[#F6F6EF]">

    <TopbarSearch />

    <div className="flex flex-row ml-2">
      <div className="flex flex-row">
        Search
        <Dropdown
          handleSelect={handleSelectType}
          values={filterValues[0]}
          filter="type"
          label="Search"
          defaultValue={filterValues[0][0]}
        />
      </div>
      <div className="ml-2 flex flex-row">
        by
        <Dropdown
          handleSelect={handleSelectSort}
          values={filterValues[1]}
          filter="sort"
          label="by"
          defaultValue={filterValues[1][0]}
        />
      </div>
      <div className="ml-2 flex flex-row">
        for
        <Dropdown
          handleSelect={handleSelectTime}
          values={filterValues[2]}
          filter="time"
          label="for"
          defaultValue={filterValues[2][0]}
        />
      </div>
    </div>

    <NewsTileSearch  
        dateRange = {dateRange} 
        page = {page}
        query = {localStorage.getItem('search')}
        sort = {sort} 
        type = {type}
    />

    </div>
  );
};

export default Search;
