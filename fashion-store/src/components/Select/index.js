import React from "react";
import "./Select.scss";

const Select = () => {
  return (
    <div className="content-select d-flex justify-content-between">
      <select>
        <option className="regularFont">italian</option>
        <option className="regularFont">italian</option>
        <option className="regularFont">italian</option>
        <option className="regularFont">italian</option>
      </select>
      <div className="check regularFont">Check your order </div>
    </div>
  );
};

export default Select;
