import React from "react";
import Item from "./Item.jsx";

const ItemsList = ({ items, deleteItem }) => {
  return (
    <div className="main__items-list items-list">
      {items.map((item, index) => (
        <Item
          className="items-list__item"
          item={item}
          key={index}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  );
};

export default ItemsList;
