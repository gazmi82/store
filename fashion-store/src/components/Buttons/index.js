import React from "react";
import "./Buttons.scss";

const Buttons = ({ text, className }) => {
  return (
    <>
      <button className={className}>
        <label>{text}</label>
      </button>
    </>
  );
};

export default Buttons;
