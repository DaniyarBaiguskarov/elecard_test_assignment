import React from "react";
import RadioButtonGroup from "./RadioButtonGroup.jsx";

const Functioanlity = ({
  sorts,
  views,
  handleView,
  handleSort,
  view,
  sort,
  handleRefresh,
}) => {
  return (
    <div className="header__functionality functionality">
      <div className="functionality__view view">
        <RadioButtonGroup items={views} handleFunc={handleView} active={view} />
        <div className="refresh" onClick={handleRefresh}>
          refersh
        </div>
      </div>
      {view === "cards" && (
        <div className="functionality__sort sort">
          {" "}
          <RadioButtonGroup
            items={sorts}
            handleFunc={handleSort}
            active={sort}
          />
        </div>
      )}
    </div>
  );
};

export default Functioanlity;
