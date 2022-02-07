import React from "react";
import "./FirstSlider.scss";
import { png, svg } from "../../assets";
import { SwiperSlide, Swiper } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
SwiperCore.use([Navigation]);

const SlideContent = [
  {
    id: 1,
    title: "international coctails",
    text_content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    link: "#",
  },
  {
    id: 2,
    title: "international coctails",
    text_content:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam",
    link: "#",
  },
];

const SlideItem = ({ data }) => {
  return (
    <div className="slide-content">
      <div className="space" />
      <div>
        <h4 className="text-uppercase">{data.title}</h4>
        <p className="text-capitalize">{data.text_content}</p>
        <a href={data.link}>Shop Now</a>
      </div>
    </div>
  );
};

const FirstSlider = () => {
  return (
    <div className="first-slider">
      <div className="prev">
        <img alt="" src={svg.Next} />
      </div>
      <div className="next">
        <img alt="" src={svg.Next} />
      </div>
      <Swiper
        navigation={{
          nextEl: ".next",
          prevEl: ".prev",
        }}
        spaceBetween={0}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        speed={1000}
        loop
        className="slide_cc"
      >
        <img src={png.Video} alt="" />
        {SlideContent.map((el) => (
          <SwiperSlide key={el.id}>
            <SlideItem data={el} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FirstSlider;
