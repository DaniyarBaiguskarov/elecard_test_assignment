import React, { useState } from "react";
import ItemsList from "./ItemsList.jsx";
import Pages from "./Pages.jsx";

const CardsView = ({ items, deleteItem }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(items.length / 30);
  const currentPageItems = items.slice((page - 1) * 30, (page - 1) * 30 + 30);
  function handlePageChange(page) {
    setPage(page);
  }

  return (
    <>
      <ItemsList items={currentPageItems} deleteItem={deleteItem} />
      <Pages
        totalPages={totalPages}
        handlePageChange={handlePageChange}
        currentPage={page}
      />
    </>
  );
};

export default CardsView;
