import React, { useState, useEffect } from "react";
import Axios from "axios";
import DateAgo from "./dateAgo";

const NewsSection = ({ data, index }) => {

  const [show, setShow] = useState(true);
  const [s2, sets2] = useState("abc.com");

  const handleClick = () => {
   setShow(false);
 };


  const shorturl = (urlLong) => {
    let url = urlLong;
    let domain = url ? (new URL(url)) : "";
    let ret = domain.hostname;
    ret = "" + ret?.replace("www.", "");
    let a= ret?.toString();
    return a;
  }

  return (
   show &&(
    <>
      <div className="flex flex-col ml-3 mt-2">
        <div className="flex flex-row  ">
        <div className="text-[#828282] text-[10pt] font-serif cursor-pointer">
        <a href={data?.url}>{data?.id}{index}.{" "}</a>
      </div>
          <div className="ml-2 break-words text-[10pt] text-[#000000] font-serif">
            {data?.title}
          </div>
          <div className="ml-2 cursor-pointer text-[8pt] text-[#828282] mt-[2px]">
            (<a href={data?.url}>{shorturl(data?.url)}</a>)
          </div>
        </div>
        <div className="flex flex-row  ml-4 items-start text-[7pt] text-[#828282]">
            <div className=" ml-[2px] ">{data?.points} points by {data?.author} {" "}</div>
            <div className=" ml-[2px] "> <DateAgo date={data?.created_at} /></div>
            <div className=" ml-1 cursor-pointer" onClick={handleClick}> | hide  </div>
            <div className="ml-1 cursor-pointer"> | {data?.children?.length} comments</div>
        </div>
        
      </div>
    </>)
  );
};

export default NewsSection;
