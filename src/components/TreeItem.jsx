import React, { useState } from "react";
import TreeLeafItem from "./TreeLeafItem.jsx";

const TreeItem = ({ item }) => {
  const [fullCard, setFullCard] = useState(false); //отображение полного пути
  const [isActive, setIsActive] = useState(false); //сворачивание ветви

  let children = null;
  const flag = item[1] instanceof Array; //флаг для проверки является ли теущий элкмент последним в дереве

  const toggle = (e) => {
    if (!flag) {
      setFullCard(!fullCard);
    } else {
      setIsActive(!isActive);
    }
  };

  if (flag) {
    children = (
      <ul className={isActive ? "active " : "nested "}>
        {item[1].map((item, index) => {
          return <TreeItem item={item} key={index} />;
        })}
      </ul>
    );
  }

  return (
    <li className="tree__branch">
      <div onClick={(e) => toggle(e)}>
        {fullCard ? (
          <TreeLeafItem item={item[1]} />
        ) : (
          <div className="tree__branch__name">{item[0]}</div>
        )}
      </div>

      {children}
    </li>
  );
};

export default TreeItem;
