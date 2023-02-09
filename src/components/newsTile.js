import NewsSection from "./newsSection";
import Axios from "axios";
import React, { useState, useEffect } from "react";


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
  const handlePageChange = (event, value) => {
    setPage(value);
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

  const displayStories = stories.map((story) => (
    <div>
      <NewsSection data={story} />
    </div>
  ));
  console.log(stories.id)
  return (
    <div>
      {/* {isLoading && <Typography sx={{ margin: '17.5rem' }} variant="h4" component="div"> Loading ....</Typography>} */}
      <div className="SortedStories">
        {!isLoading && displayStories}
      </div>
    </div>
  );
};

export default Tile;
