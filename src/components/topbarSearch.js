import { React, useState } from "react";
import settings from "../setting.png"
const Topbar = ({handleSelectquery}) => {
  const [searchVal, setsearchVal] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setsearchVal(e.target.value);
    handleSelectquery(e.target.value);
    localStorage.setItem("search", e.target.value);
  };

  return (
    <div className="h-[60px]  bg-[#FF742B] items-center  flex flex-row ">
      <img
        src="//d1sz9gun5ag95e.cloudfront.net/packs/media/images/logo-hn-search-a822432b.png"
        width="48"
        height="18"
        className=" ml-3 mt-1.5"
      ></img>

      <span className="text-[18px] font-serif text-[#222222] leading-3 flex flex-col ml-2">
        <a>Search </a>
        <a className="pt-2 space-x-2"> Hacker News</a>
      </span>

      <div className="flex flex-row w-[80%]">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="44"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        color="#FF742B"
        stroke-linejoin="round"
        className="bg-white ml-6"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
        <input
          type="text"
          className="h-[44px] w-[90%] border-none focus:outline-none"
          value={searchVal}
          onChange={handleChange}
        />
        
      </div>
      <img
        src={settings}
        width="20"
        height="58"
        className="bg-[#FF742B] ml-[-2rem] mt-1.5"
      ></img>
      <a className="ml-2 text-[18px] font-semibold">Settings</a>
    </div>
  );
};

export default Topbar;
