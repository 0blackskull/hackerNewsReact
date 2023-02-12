import React from "react";

const Topbar = () => {
  return (
    <div className="h-[25px]  mt-3 bg-[#ff6600] items-center pt-[2px] flex flex-row p-[2px]">
      <img
        src="https://news.ycombinator.com/y18.gif"
        width="18"
        height="18"
        className="border border-white border-solid ml-3 "
      ></img>
      <div className=" h-[18px] leading-[12pt]  align-[inherit]  flex items-center justify-between py-2 px-2">
        <span className="text-[14px] font-serif text-[#000000] leading-3">
          <b className="mr-[5px] font-bold">
            <a>Hacker News</a>
          </b>
          <a className="text-[10pt] leading-[12pt] pl-[2px] text-[#222222]">
            new
          </a>{" "}
          |{" "}
          <a className="text-[10pt] leading-[12pt] pl-[2px] text-[#222222]">
            past
          </a>{" "}
          |{" "}
          <a className="text-[10pt] leading-[12pt] pl-[2px] text-[#222222]">
            comments
          </a>{" "}
          |{" "}
          <a className="text-[10pt] leading-[12pt] pl-[2px] text-[#222222]">
            ask
          </a>{" "}
          |{" "}
          <a className="text-[10pt] leading-[12pt] pl-[2px] text-[#222222]">
            show
          </a>{" "}
          |{" "}
          <a className="text-[10pt] leading-[12pt] pl-[2px] text-[#222222]">
            jobs
          </a>{" "}
          |{" "}
          <a className="text-[10pt] leading-[12pt] pl-[2px] text-[#222222]">
            submit
          </a>
        </span>
      </div>
    </div>
  );
};

export default Topbar;
