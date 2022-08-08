import React from "react";

const Pages = ({ totalPages, handlePageChange, currentPage }) => {
  const arr = [...Array(totalPages).fill(0)];

  const changePage = (e) => {
    handlePageChange(+e.target.innerHTML);
  };

  return (
    <div className="pages-list">
      {arr.map((item, index) => (
        <div
          className={
            index + 1 === currentPage
              ? "pages-list__page page_active"
              : "pages-list__page page"
          }
          onClick={changePage}
          key={index}
        >
          {index + 1}
        </div>
      ))}
    </div>
  );
};

export default Pages;
