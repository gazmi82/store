import React from "react";
import "./NewItem.scss";
import { png, svg } from "../../assets";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Navigation]);

const NewItemSlider = () => {
  return (
    <div className="new-in">
      <h3>New In</h3>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
      <div className="new-in-slider">
        <div className="prev-slide">
          <img alt="" src={svg.Next} />
        </div>
        <div className="next-slide">
          <img alt="" src={svg.Next} />
        </div>
        <Swiper
          navigation={{
            nextEl: ".next-slide",
            prevEl: ".prev-slide",
          }}
          spaceBetween={26}
          slidesPerView={4}
          scrollbar={{ draggable: true }}
          speed={1000}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
        >
          {Items.map((el, index) => (
            <SwiperSlide key={index}>
              <Slide item={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Slide = ({ item }) => {
  return (
    <div className="slide-wrapper">
      {item.promo && <div className="slide-wrapper-promo">Promo</div>}
      <div className="slide-wrapper-img">
        <img src={item.img} alt="" />
      </div>
      <div className="d-flex flex-column  my-3">
        <p className="slide-wrapper-title">{item.title}</p>
        <p className="slide-wrapper-description">{item.description}</p>
        <div>
          <span className="slide-wrapper-price">€ {item?.price}</span>
        </div>
        <p className="slide-wrapper-vat">{item.vat}</p>
      </div>
    </div>
  );
};

const Items = [
  {
    promo: true,
    img: png.Coute,
    title: "Brand name",
    description: "Black Coat with Frogs",
    price: "830.00",
    vat: "*VAT excluded",
  },
  {
    promo: false,
    img: png.Shirt,
    title: "Brand name",
    description: "Half Sleeves Multicolor Shirt",
    price: "135.00",
    vat: "*VAT excluded",
  },
  {
    promo: false,
    img: png.SweatShirt,
    title: "Brand name",
    description: "Black Leather Ankle Boots",
    price: "900.00",
    vat: "*VAT excluded",
  },
  {
    promo: true,
    img: png.Shoes,
    title: "Brand name",
    description: "Cream Sweater",
    price: "650.00",
    vat: "*VAT excluded",
  },
  {
    promo: false,
    img: png.Vino,
    title: "Brand name",
    description: "Champagne",
    price: "900.00",
    vat: "*VAT excluded",
  },
];

export default NewItemSlider;
