import React, { useState, useEffect } from "react";
import axios from "axios";
import TestPage from "./TestPage";
import Pagination from "./Pagination";

const ExploreAgric = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(45);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setPosts(res.data);
      setLoading(false);
    };
    fetchPosts();
  }, []);

  const lastPosts = currentPage * postPerPage;
  const firstPosts = lastPosts - postPerPage;
  const currentPosts = posts.slice(firstPosts, lastPosts);

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);

  return (
    <div>
      <TestPage posts={currentPosts} loading={loading} />
      <Pagination
        postsPerPage={postPerPage}
        totalPosts={posts.length}
        paginate={paginate}
      />
    </div>
  );
};

export default ExploreAgric;
