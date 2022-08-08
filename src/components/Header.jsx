import React from "react";
import Functioanlity from "./Functioanlity.jsx";

const Header = ({
  sorts,
  views,
  handleView,
  handleSort,
  view,
  sort,
  handleRefresh,
}) => {
  return (
    <header>
      <div className="header">
        {" "}
        <Functioanlity
          handleView={handleView}
          handleSort={handleSort}
          sort={sort}
          view={view}
          sorts={sorts}
          views={views}
          handleRefresh={handleRefresh}
        />
      </div>
    </header>
  );
};

export default Header;
