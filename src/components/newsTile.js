import NewsSection from "./newsSection";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "./footer";
import Topbar from "./topbar";

const Tile = () => {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(0);
  const [maxPages, setMaxPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  function getSortedStories(pagenum = 0) {
    return Axios.get(
      `http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${pagenum}&hitsPerPage=${30}`
    );
  }
  const handlePageChange = (value) => {
    setPage(value + 1);
    setIsLoading(true);
    getSortedStories(value - 1).then((storiesData) => {
      setStories(storiesData.data.hits);
      setMaxPages(storiesData.data.nbPages);
      setIsLoading(false);
    });
  };

  const handlemore = (e) => {
    e.preventDefault();
    setPage(page + 1);
    setStories([]);
  };

  // useEffect(() => {

  // }, [page])

  useEffect(() => {
    if (stories.length === 0) {
      getSortedStories(page).then((storiesData) => {
        setStories(storiesData.data.hits);
        setMaxPages(storiesData.data.nbPages);
      });
    }
  }, [page]);

  const displayStories = stories.map((story, index) => (
    <div>
      <NewsSection data={story} index={30 * page + (index + 1)} />
    </div>
  ));
  return (
    <div className="w-[86%] items-center ml-[7%] bg-[#F6F6EF]">
      <Topbar />
      <div>
        {/* {isLoading && <Typography sx={{ margin: '17.5rem' }} variant="h4" component="div"> Loading ....</Typography>} */}
       {!isLoading && displayStories}
        <button className="cursor-pointer ml-3 pt-4 text-[10pt]" onClick={handlemore}>
          More
        </button>
        <div className="h-[2px] mt-5 mb-5 bg-[#ff6600]"></div>
      </div>
      <Footer />
    </div>
  );
};

export default Tile;
