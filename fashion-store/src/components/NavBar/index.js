import React from "react";
import "./NavBar.scss";
import Select from "../Select";
import { svg } from "../../assets";
import Buttons from "../Buttons";

const NavBar = ({ className }) => {
  const navElement = [
    { id: 1, name: "shops" },
    { id: 2, name: "brands" },
    { id: 3, name: "products" },
    { id: 4, name: "services" },
  ];
  return (
    <div className="nav-content">
      <nav className="nav-select position-absolute">
        <Select />
        <div className="nav-header d-flex justify-content-between align-items-center">
          <div className="nav-header-left d-flex justify-content-between align-items-center">
            <img className="mx-3" src={svg.Logo} />
            <h3 className="text-uppercase">Brand logo</h3>
          </div>

          <ul className="d-flex m-0 text-uppercase lightFont">
            {navElement.map((el) => (
              <li key={el.id}>{el.name}</li>
            ))}
            <li>
              <img className="mx-3" src={svg.SearchWht} />
            </li>
          </ul>
          <div>
            <img className="mx-2" src={svg.PlaneWhite} />
            <img className="mx-2" src={svg.BagWhite} />
          </div>
        </div>
      </nav>
      <div className="banner-content">
        <div className="line" />
        <div>
          <h2>
            EVER SEEN <br />
            SOMETHING LIKE THIS?
          </h2>
          <p>
            Electric blues, cotton-candy pinks, and citrus greens: Fall’s
            <br />
            palette is all over the color wheel.
          </p>
          <Buttons
            text="DISCOVER NEW COLLECTION"
            className="btnBlack btn_ semiBold"
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
