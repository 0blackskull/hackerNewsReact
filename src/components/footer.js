// import { useRouter } from "next/router";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  // let router = useRouter();
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
    <div>
      <div className="flex flex-row">
        <div className="cursor-pointer">Guidelines | </div>
        <div className="cursor-pointer">FAQ | </div>
        <div className="cursor-pointer">Lists | </div>
        <div className="cursor-pointer">API | </div>
        <div className="cursor-pointer">Security | </div>
        <div className="cursor-pointer">Legal | </div>
        <div className="cursor-pointer">Apply to YC | </div>
        <div className="cursor-pointer">Contact | </div>
      </div>
      SEARCH
      <input
        type="text"
        value={searchVal}
        onChange={handleChange}
        //   onKeyPress={(e) => {
        //     if (e.key === "Enter") {
        //         this.setState({ message: e.target.value },
        //         () => {
        //             alert(this.state.message);
        //         });
        //     }
        // }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            {
              handleSubmit();
            }
          }
        }}
      />
    </div>
  );
};

export default Footer;
