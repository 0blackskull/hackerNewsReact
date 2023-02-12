import NewsSection from "./newsSection";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import Footer from "./footer";


const Tile = () => {
  const [stories, setStories] = useState([]);
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  function getSortedStories(page = 0) {
    return Axios.get(
      `http://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}&hitsPerPage=${30}`
    );
  }
  const handlePageChange = ( value) => {
    setPage(value+1);
    setIsLoading(true);
    getSortedStories(value - 1).then((storiesData) => {
      setStories(storiesData.data.hits);
      setMaxPages(storiesData.data.nbPages);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    if (stories.length === 0) {
      getSortedStories(0).then((storiesData) => {
        setStories(storiesData.data.hits);
        setMaxPages(storiesData.data.nbPages);
      });
    }
  }, []);

  // var index = 2;

  const displayStories = stories.map((story, index) => (
    <div>
      <NewsSection data={story} index = {index+1}/>
    </div>
  ));
  return (
    <><div>
      {/* {isLoading && <Typography sx={{ margin: '17.5rem' }} variant="h4" component="div"> Loading ....</Typography>} */}
      <div className="SortedStories">
        {!isLoading && displayStories}
      </div>
      <button className="cursor-pointer" >More</button>
    </div><Footer /></>
  );
};

export default Tile;
