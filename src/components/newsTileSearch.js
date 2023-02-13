import NewsSearch from "./newsSearch";
import Axios from "axios";
import React, { useState, useEffect } from "react";

const NewsTileSearch = ({ dateRange, page, query, sort, type }) => {
  const [stories, setStories] = useState([]);
  const [maxPages, setMaxPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [qry,setQry] = useState(localStorage.getItem('search'));
  const [pageinSearch, setpageinSearch] = useState(page);

  function getSortedStories(pages = page) {
    const filterSortString =
      sort === "byPopularity" ? "search" : "search_by_date";
    let timeStamp = Date.now();
    let filterTypeString = "";

    if (type === "all") {
      filterTypeString = "(story,comment)";
    } else if (type === "stories") {
      filterTypeString = "story";
    } else if (type === "comment") {
      filterTypeString = "comment";
    }

    if (dateRange === "last24h") {
      timeStamp -= 24 * 60 * 60 * 1000;
    } else if (dateRange === "pastWeek") {
      timeStamp -= 7 * 24 * 60 * 60 * 1000;
    } else if (dateRange === "pastMonth") {
      timeStamp -= 30 * 24 * 60 * 60 * 1000;
    } else if (dateRange === "pastYear") {
      timeStamp -= 365 * 24 * 60 * 60 * 1000;
    }
    const filterTimeString =
      dateRange !== "all"
        ? `&numericFilters=created_at_i>${timeStamp / 1000}`
        : "";

    return Axios.get(
      `http://hn.algolia.com/api/v1/${filterSortString}?query=${query}&tags=${filterTypeString}${filterTimeString}&page=${pageinSearch}&hitsPerPage=${30}`
    );
  }

  const handlePageChange = (value) => {
    // setPage(value+1);
    setIsLoading(true);
    getSortedStories(value - 1).then((storiesData) => {
      setStories(storiesData.data.hits);
      setMaxPages(storiesData.data.nbPages);
      setIsLoading(false);
    });
  };
  useEffect(() => {
      getSortedStories(0).then((storiesData) => {
        setStories(storiesData.data.hits);
        setMaxPages(storiesData.data.nbPages);
      });

  }, [dateRange, query, sort, type, qry, pageinSearch]);

  useEffect(() => {
      setpageinSearch(page);
  }, [page])

  const displayStories = stories?.map((story, index) => (
    <div>
      <NewsSearch data={story} index={index + 1} />
    </div>
  ));

  const pagination = (counter) => {
    let current = 1;
    let arr = [];
    let shownum = 10;
    let count = counter > shownum ? shownum : counter;

    while (current <= count) {
      arr.push(current);
      current++;
    }
  
    const pager = arr.map((i) =>
      <button className = "border-solid border ml-2 pl-2 pr-2 mt-5 mb-5 border-[#9D9D9D]" 
        onClick = {(e) => setpageinSearch(i)}          
      >{i}</button> 
    );

    return (
      <div className = "grid  place-items-center grid-row">
        <div className="flex flex-row space-x-1.5">
        {pager}
        {(counter >= shownum) ? (<button className = "border-solid border ml-2 pl-2 pr-2 mt-5 mb-5 border-[#9D9D9D]"           
      > >> </button>) : (<></>)}
      </div>
      </div>
    );

  };

  return (
    <>
      <div>
        {/* {isLoading && <Typography sx={{ margin: '17.5rem' }} variant="h4" component="div"> Loading ....</Typography>} */}
        <div className="SortedStories">{!isLoading && displayStories}</div>
        {/* <button className="cursor-pointer" >More</button> */}
      </div>
      <div>
          {pagination(maxPages)}
      </div>
      
    </>
  );
};

export default NewsTileSearch;
