import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles/featuresSwiper.css";

// import required modules
import { Pagination } from "swiper/modules";

const Section = styled.section`
  width: 100vw;
  padding: 8rem 1rem;
  background: #030509;
  @media (max-width: 58.75em) {
    padding: 2rem 0 0 0;
  }
`;

const Div = styled.div`
  max-width: 140rem;
  margin: auto;
  height: 100%;
  background-color: #fff;
  position: relative;
`;

export default function Features() {
  return (
    <Section>
      <Div>
        <Swiper
          slidesPerView={1}
          spaceBetween={2}
          breakpoints={{
            // 640: {
            //   slidesPerView: 1,
            //   spaceBetween: 20,
            // },
            940: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1220: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="feature-box">
              <h3 className="feature-heading">Survival Essentials</h3>
              <ul className="feature-list">
                <li>Water purification tablets</li>
                <li>Non perishable food packs</li>
                <li>First Aid kits</li>
                <li>Vitamin supplements</li>
              </ul>
              <div className="view-more">
                Order now <span>&rarr;</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature-box">
              <h3 className="feature-heading">Tech and Gear</h3>
              <ul className="feature-list">
                <li>Clothing</li>
                <li>Navigation Tools</li>
                <li>Energy Cells</li>
                <li>Communication devices</li>
              </ul>
              <div className="view-more">
                Order now <span>&rarr;</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature-box">
              <h3 className="feature-heading">Other</h3>
              <ul className="feature-list">
                <li>Fitness equipment</li>
                <li>Books and multimedia content</li>
                <li>Speeds and growth mediums</li>
                <li>Self defence equipments</li>
              </ul>
              <div className="view-more">
                Order now <span>&rarr;</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature-box">
              <h3 className="feature-heading"></h3>
              <ul className="feature-list">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className="view-more">
                Order now <span>&rarr;</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature-box">
              <h3 className="feature-heading"></h3>
              <ul className="feature-list">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div className="view-more">
                Order now <span>&rarr;</span>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Div>
    </Section>
  );
}
