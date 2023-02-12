import React, { useState, useEffect } from "react";
import Axios from "axios";
import DateAgo from "./dateAgo";

const NewsSection = ({ data, index}) => {

  const [show, setShow] = useState(true);
  const [s2, sets2] = useState("abc.com");

  const handleClick = () => {
   setShow(false);
 };

  return (
   show &&(
    <>
      <div className="flex flex-col ml-3">
        <div className="flex flex-row  ">
        <div className="text-[#828282] text-[10pt] font-serif cursor-pointer">
        <a href={data?.url}>{data?.id}</a>
      </div>
          <div className="ml-2 break-words text-[10pt] text-[#000000] font-serif">
            {data?.title===null?data?.story_title:data?.title}
          </div>
          <div className="ml-2 cursor-pointer text-[8pt] text-[#828282] mt-[2px]">
            (<a href={data?.url}>{data?.url===null?data?.story_url:data?.url}</a>)
            {/* (<a href={data?.url}>{data?.url}</a>) */}
          </div>
        </div>
        <div className="flex flex-row  ml-4">
            <div className="text-[7pt] text-[#828282] ">{data?.points} points | {data?.author} | </div>
            <div className="text-[7pt] text-[#828282] ml-[2px] "> <DateAgo date={data?.created_at} /></div>
            <div className="text-[7pt] text-[#828282] ml-1 cursor-pointer"> | {data?.children?.length} comments</div>
        </div>
      </div>
    </>)
  );
};

export default NewsSection;
