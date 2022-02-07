import React from "react";
import "./FySlide.scss";
import { png, svg } from "../../assets";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Navigation]);

const FySlide = () => {
  return (
    <div className="fy">
      <h5>for you</h5>
      <p>Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
      <div className="fy-slider">
        <div className="prev-s">
          <img alt="" src={svg.Next} />
        </div>
        <div className="next-s">
          <img alt="" src={svg.Next} />
        </div>
        <Swiper
          navigation={{
            nextEl: ".next-s",
            prevEl: ".prev-s",
          }}
          spaceBetween={26}
          slidesPerView={3}
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
          {Items.map((el) => (
            <SwiperSlide key={el.id}>
              <Slide item={el} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Items = [
  { id: 1, img: png.Sneeaker, text: "shoes" },
  { id: 2, img: png.Food, text: "Food & beverage" },
  { id: 3, img: png.Watch, text: "Jewerly" },
  { id: 4, img: png.Purse, text: "Other" },
];

const Slide = ({ item }) => {
  return (
    <div className="slide-card">
      <img alt="" src={item.img} />
      <p>{item.text}</p>
    </div>
  );
};

export default FySlide;
