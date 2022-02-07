import React from "react";
import "./Footer.scss";
import { svg } from "../../assets";

const Footer = () => {
  return (
    <footer>
      <div>
        <div>
          <p>How it works</p>
        </div>
        <div>
          <p>FAQ’s</p>
        </div>
        <div>
          <p>Need Help?</p>
        </div>
      </div>
      <div>
        <div>
          <div className="footer-map">
            <ul>
              <li>Shooping</li>
              <li>How to shop</li>
              <li>FAQs</li>
              <li>Brands</li>
              <li>Customer Care</li>
            </ul>
            <ul>
              <li>SERVICES</li>
              <li>VIP Lounge</li>
              <li>Parking Lots</li>
              <li>Banks and Exchange</li>
              <li>Club</li>
              <li>Program</li>
            </ul>
            <ul>
              <li>AIRPORT</li>
              <li>Airports</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
              <li>Lorem ipsum</li>
            </ul>
            <ul>
              <li>CHECK YOUR ORDER</li>
              <li>
                Easily check your order’s status by entering your email and the
                code you received.
              </li>
              <li>
                <a className="link" href="#">
                  TRACK ORDERDS
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-socila-icons">
            <img src={svg.Facebook} alt="" />
            <img src={svg.Youtube} alt="" />
            <img src={svg.Twitter} alt="" />
            <img src={svg.Instagram} alt="" />
          </div>
          <div className="footer-company-logo">
            <img src={svg.Logo} alt="" />
          </div>
          <div className="footer-bottom">
            <p>Content Copyright 2021 Eurostep P.IVA 8952089525758</p>
            <div>
              <p>Privacy policy</p>
              <p>Cookies</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
