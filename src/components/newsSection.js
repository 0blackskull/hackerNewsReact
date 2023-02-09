import React, { useState, useEffect } from "react";
import Axios from "axios";
import DateAgo from "./dateAgo";

const NewsSection = ({ data, index }) => {

  const [show, setShow] = useState(true);
  const [s2, sets2] = useState("abc.com");

  const handleClick = () => {
   setShow(false);
 };
  // var s2 = data?.url?.substring(7);

  // useEffect(() => {

  // }, [])

  const shorturl = (urlLong) => {
    var url = urlLong;
    var len = url?.length;
    var s = "";
    for (var i = 0; i < len; i++) {
      if (url[i] === '.') {
          while (url[i+1] !== '/') {
              i++;
              s += url[i];
          }
          break;
      }
    }
    return s;
  }

  // useEffect(() => {
  //   sets2(shorturl(data?.url));
  // }, [])

  return (
   show &&(
    <>
      <div className="flex flex-col ml-3">
        <div className="flex flex-row  ">
        <div className="text-[#828282] text-[10pt] font-serif cursor-pointer">
        <a href={data?.url}>{data?.id}{index}.{" "}</a>
      </div>
          <div className="ml-2 break-words text-[10pt] text-[#000000] font-serif">
            {data?.title}
          </div>
          <div className="ml-2 cursor-pointer text-[8pt] text-[#828282] mt-[2px]">
            (<a href={data?.url}>{shorturl(data?.url)}</a>)
            {/* (<a href={data?.url}>{data?.url}</a>) */}
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
