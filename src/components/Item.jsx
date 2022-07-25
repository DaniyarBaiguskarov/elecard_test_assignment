import React from "react";

const Item = ({ item, deleteItem }) => {
  return (
    <div className="items-list__item item">
      <div className="item__close" onClick={() => deleteItem(item.image)}></div>
      <div className="item__description">
        {" "}
        <div className="item__description__line ">
          Название файла:{item.image}
        </div>
        <div className="item__description__line ">
          Размер файла:{item.filesize}
        </div>
        <div className="item__description__line ">
          Дата файла:{new Date(item.timestamp).toLocaleString()}
        </div>
        <div className="item__description__line ">
          Категория:{item.category}
        </div>
      </div>
    </div>
  );
};

export default Item;
