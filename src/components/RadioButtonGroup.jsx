import React from "react";

const RadioButtonGroup = ({ items, handleFunc, active }) => {
  return (
    <div className="radiobuttons-group">
      {items.map((item, index) => {
        return (
          <div
            className="radiobuttons-group__radiobutton-wrapper radiobutton"
            key={index}
          >
            <input
              className="radiobutton__input"
              type="radio"
              value={item.type}
              onChange={(e) => handleFunc(e)}
              checked={active === item.type}
            />
            <div className="radiobutton__text">{item.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RadioButtonGroup;
