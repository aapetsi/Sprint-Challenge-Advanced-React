import React from "react";
import uuid from "uuid";

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      {pageNumbers.map(pageNumber => (
        <li key={uuid()}>
          <a onClick={() => paginate(pageNumber)} href="!#">
            {pageNumber}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
