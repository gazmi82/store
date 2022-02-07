import React from "react";
import {
  NavBar,
  Header,
  FirstSlider,
  GenderSection,
  BrandSection,
  NewItemSlide,
  FySlide,
  Footer,
} from "../components";
import { png, svg } from "../assets";
import "./HomePage.scss";
import { Buttons } from "../components";

const Dots = () => {
  return (
    <div className="list-dots my-5">
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
      <span />
    </div>
  );
};

const HomePage = () => {
  return (
    <>
      <section className="first-section">
        <Header />
        <NavBar />
        <img src={png.FirstBanner} className="w-100" />
      </section>
      <section className="second-section mx-auto">
        <div className="content-wrapp text-uppercase my-4">
          <img src={svg.BagBlack} />
          <p>explore brands</p>
        </div>
        <Dots />
        <div className="content-wrapp text-uppercase my-4">
          <img src={svg.TicketBlck} />
          <p>insert flight information</p>
        </div>
        <Dots />
        <div className="content-wrapp text-uppercase my-4">
          <img src={svg.ShopBlck} />
          <p>book & pick up at terminal</p>
        </div>
      </section>
      <section className="third-section">
        <div className="content-wrapper">
          <div className="content">
            <div>
              <div className="first-item text-uppercase">
                <img alt="" src={png.BlueShoes} />
                <h3>shoes selection</h3>
                <Buttons text="shop now" className="btn btnWhite semiBold" />
              </div>
            </div>
            <div>
              <div className="second-item text-uppercase">
                <img alt="" src={png.Sunglass} />
                <div>
                  <h5>sunglass season</h5>
                  <a className="link link-white">go to sunglasses</a>
                </div>
              </div>
              <div className="second-item text-uppercase">
                <img alt="" src={png.Whilshoes} />
                <div>
                  <h5>the sandal symbol</h5>
                  <a className="link link-white">go to sandals</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="fourth-section my-5">
        <FirstSlider />
      </section>

      <NewItemSlide />

      <GenderSection />

      <FySlide />

      <BrandSection />

      <Footer />
    </>
  );
};

export default HomePage;
