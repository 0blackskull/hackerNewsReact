import React, { useState } from "react";
import Dropdown from "./components/dropDown";

const Search = () => {
  const [filterType, setFilterType] = useState("All");
  const [filterTime, setFilterTime] = useState("All time");
  const [filterSort, setFilterSort] = useState("Popularity");
  const filterValues = [
    ["All", "Stories", "Comments"],
    ["Popularity", "Date"],
    ["All time", "Last 24H", "Past Week", "Past Month", "Past Year"],
  ];
  const handleSelectType = (value) => {
    setFilterType(value);
  };
  const handleSelectTime = (value) => {
    setFilterTime(value);
  };
  const handleSelectSort = (value) => {
    setFilterSort(value);
  };
  return (
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
  );
};

export default Search;
