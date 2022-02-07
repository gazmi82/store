import React from "react";
import { png } from "../../assets";
import "./GenderSection.scss";
import Buttons from "../Buttons";

const GenderSection = () => {
  return (
    <>
      <div className="gender">
        <div>
          <img src={png.Chanel} />
          <Buttons text="female" className="btn_ btnWhite semiBold" />
        </div>
        <div>
          <img src={png.Dior} />
          <Buttons text="male" className="btn_ btnWhite semiBold" />
        </div>
      </div>
    </>
  );
};

export default GenderSection;
