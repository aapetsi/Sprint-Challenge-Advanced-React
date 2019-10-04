import React from "react";
import uuid from "uuid";

const Pagination = ({ playersPerPage, totalPlayers, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPlayers / playersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      {pageNumbers.map(pageNumber => (
        <li key={uuid()}>
          <a onClick={() => paginate(pageNumbers)} href="!#">
            {pageNumber}
          </a>
        </li>
      ))}
    </nav>
  );
};

export default Pagination;
