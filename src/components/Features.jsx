import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles/featuresSwiper.css";

const Section = styled.section`
  width: 100vw;
  /* width: 100%; */
  padding: 8rem 1rem;
  background: #030509;
  @media (max-width: 58.75em) {
    padding: 2.4rem 0 2.4rem 1rem;
  }
`;

const Div = styled.div`
  max-width: 140rem;
  margin: auto;
  margin: 4rem auto;
  height: 100%;
  position: relative;
`;

const H2 = styled.h2`
  text-transform: uppercase;
  background: inherit;
  font-size: clamp(3.4rem, 6vw, 6rem);
  font-weight: 500;
  color: #fff;
`;

export default function Features() {
  return (
    <Section>
      <Div>
        <H2>Our Products</H2>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
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
                <li>Space Suit</li>
                <li>GPS Device</li>
                <li>Solar Powered Cells</li>
                <li>Long Range Walkie-talkie</li>
              </ul>
              <div className="view-more">
                Order now <span>&rarr;</span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="feature-box">
              <h3 className="feature-heading">Eco Cultivation</h3>
              <ul className="feature-list">
                <li>Portable Hydrophonic Systems</li>
                <li>Biodegradable seed pods</li>
                <li>Compact soil testing kits</li>
                <li>Plant nutrient solutions</li>
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
                <li>Portable Drones</li>
                <li>Self defence equipments</li>
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
