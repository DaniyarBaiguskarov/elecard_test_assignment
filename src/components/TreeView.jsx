import React from "react";
import TreeItemsList from "./TreeItemsList.jsx";

const TreeView = ({ items }) => {
  return (
    <div className="main__tree tree">
      <TreeItemsList items={items} />
    </div>
  );
};

export default TreeView;
