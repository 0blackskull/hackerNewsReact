import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState("");
  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };
  const handleSubmit = (e) => {
    localStorage.setItem('search', searchVal);
    navigate("/search");

  };

  return (
    <div className="grid  place-items-center">
      <div className="flex flex-row text-[8pt] space-x-1.5">
        <div className="cursor-pointer">Guidelines  | </div>
        <div className="cursor-pointer">FAQ | </div>
        <div className="cursor-pointer">Lists | </div>
        <div className="cursor-pointer">API | </div>
        <div className="cursor-pointer">Security | </div>
        <div className="cursor-pointer">Legal | </div>
        <div className="cursor-pointer">Apply to YC | </div>
        <div className="cursor-pointer">Contact | </div>
      </div>
      <div className="flex flex-row text-[13px]">
      Search : 
      <input
        type="text"
        value={searchVal}
        className="border border-black ml-1 h-[18px] mt-1 mb-2"
        onChange={handleChange}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            {
              handleSubmit();
            }
          }
        }}
      />
      </div>
    </div>
  );
};

export default Footer;
