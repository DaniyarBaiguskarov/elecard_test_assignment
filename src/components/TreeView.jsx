import React from "react";
import TreeItemsList from "./TreeItemsList.jsx";

const TreeView = ({ items }) => {
  console.log(items);
  return (
    <div className="main__tree tree">
      <TreeItemsList items={items} />
    </div>
  );
};

export default TreeView;
