import React from "react";
import "./Pagination.css";
import arrowLeft from "./arrowLeft.png";
import arrowRight from "./arrowRight.png";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="paginationContainer">
      <ul className="pagination-Ul">
        <div className="paginationPrev wide">
          <p>Previous</p>
          <img src={arrowLeft} alt="" />
        </div>
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-Li active">
            <a
              onClick={() => paginate(number)}
              href="!#"
              className="pagination-link"
            >
              {number}
            </a>
          </li>
        ))}
        <div className="paginationNext">
          <img src={arrowRight} alt="" />
          <p>Next</p>
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
