import { useState, useEffect } from "react";
import styled from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles/featuresSwiper.css";

import ShopCategory from "./ShopCategory";
import Overlay from "./Overlay";

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
  const [productData, setProductData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleSelectedCategory = function (category) {
    setSelectedCategory(category);
  };

  useEffect(() => {
    async function fetchProductData() {
      try {
        const res = await fetch("/products.json");
        const data = await res.json();
        setProductData(data);
      } catch (er) {
        console.log("Error fetching product data");
      }
    }

    fetchProductData();
  }, []);

  return (
    <Section>
      <Div>
        <H2>Our Products</H2>
        {selectedCategory && (
          <>
            <Overlay onClick={handleSelectedCategory} />
            <ShopCategory
              category={selectedCategory}
              onSelectCategory={handleSelectedCategory}
            />
          </>
        )}
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
          {productData.map((category) => (
            <SwiperSlide key={category.category}>
              <div
                className="feature-box"
                onClick={() => handleSelectedCategory(category.category)}
              >
                <h3 className="feature-heading">{category.category}</h3>
                <ul className="feature-list">
                  {category.items.map((product) => (
                    <li key={product.id}>{product.name}</li>
                  ))}
                </ul>
                <div className="view-more">
                  Order now <span>&rarr;</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Div>
    </Section>
  );
}
