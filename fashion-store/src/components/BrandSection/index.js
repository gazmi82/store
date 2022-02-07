import React from "react";
import "./BrandSection.scss";
const brands = [
  "tod’s",
  "furla",
  "gucci",
  "prada",
  "chanel",
  "hogan",
  "bulgari",
  "armani",
  "church’s",
  "kenzo",
  "burberry",
  "just cavalli",
  "dior",
  "christian luoboutin",
  "damiani",
  "moschino",
  "elisabetta franchi",
  "hermes",
  "tiffany & co",
  "luis vuitton",
];

const BrandSection = () => {
  return (
    <div className="brand-list">
      <h5>Our brands</h5>
      <div>
        {brands.map((el, index) => (
          <div className="brand-name text-uppercase" key={index}>
            {el}
          </div>
        ))}
        <div className="bottom">BRAND A-Z</div>
      </div>
    </div>
  );
};

export default BrandSection;
