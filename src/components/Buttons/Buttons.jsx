import "./Buttons.scss";
import React from "react";

const Buttons = ({ type, className, onClick, children }) => {
  return (
    <>
      <button type={type} className={className} onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Buttons;
