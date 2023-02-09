import React, { useState, useEffect } from "react";
import Axios from "axios";
import DateAgo from "./dateAgo";

const NewsSection = ({ data },{index}) => {

  const [show, setShow] = useState(true);


  const handleClick = () => {
   setShow(false);
 };
  var s2 = data?.url?.substring(7);
  return (
   show &&(
    <>
      <div className="flex flex-col ml-3">
        <div className="flex flex-row  ">
        <div className="text-[#828282] text-[10pt] font-serif cursor-pointer">
        <a href={data?.url}>{data?.id}.{" "}</a>
      </div>
          <div className="ml-2 break-words text-[10pt] text-[#000000] font-serif">
            {data?.title}
          </div>
          <div className="ml-2 cursor-pointer text-[8pt] text-[#828282] mt-[2px]">
            (<a href={data?.url}>{s2}</a>)
          </div>
        </div>
        <div className="flex flex-row  ml-4">
            <div className="text-[7pt] text-[#828282] ">{data?.points} points by {data?.author} {" "}</div>
            <div className="text-[7pt] text-[#828282] ml-[2px] "> <DateAgo date={data?.created_at} /></div>
            <div className="text-[7pt] text-[#828282] ml-1 cursor-pointer" onClick={handleClick}> | hide  </div>
            <div className="text-[7pt] text-[#828282] ml-1 cursor-pointer"> | {data?.children?.length} comments</div>
        </div>
      </div>
    </>)
  );
};

export default NewsSection;
