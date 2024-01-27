import styled from "styled-components";
import { useState, useEffect } from "react";
import React from "react";

const Div = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;
  z-index: 888;
  transform: translate(-50%, -50%);
  padding: 2rem 4rem;
  border-radius: 6px;

  ${({ category }) => {
    switch (category) {
      case "Survival Essentials":
        return `
          background: #ff6b00;
          box-shadow: 0 0 10rem 0 hsla(25, 100%, 50%, 0.5);
        `;
      case "Tech and Gear":
        return `
          background: #146ef5;
          box-shadow: 0 0 10rem 0 hsla(216, 92%, 52%, 0.5);
        `;
      case "Eco Cultivation":
        return `
          background: #ed52cb;
          box-shadow: 0 0 10rem 0 hsla(313, 81%, 63%, 0.5);
        `;
      case "Others":
        return `
          background: #00d722;
          box-shadow: 0 0 10rem 0 hsla(129, 100%, 42%, 0.5);
        `;
      default:
        return `
          background-color: #34495e;
          box-shadow: 0 0 10rem 0 hsla(210, 25%, 31%, 0.5); 
        `;
    }
  }};
`;

const H3 = styled.h3`
  color: #000;
  font-size: 6rem;
  font-weight: 500;
  white-space: nowrap;
  margin-bottom: 4vh;
`;
const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
  column-gap: 6vw;
  row-gap: 2vh;
  /* align-items: center; */
`;

const DivProductName = styled.div`
  font-size: 3rem;
  white-space: nowrap;
`;
const DivProductPrice = styled.div`
  font-size: 3rem;
  white-space: nowrap;
`;

const Select = styled.select`
  border-radius: 2.5rem;
  width: 8rem;
  text-align: center;
  cursor: pointer;
  font-size: 2.2rem;
  color: #012a4a;
`;

const AddButtonDiv = styled.div`
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.div`
  font-size: 2.4rem;
  color: #012a4a;
  font-weight: 500;
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 2.4rem;
  cursor: pointer;
`;

export default function ShopCategory({ category, onSelectCategory }) {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    async function fetchProductData() {
      try {
        const res = await fetch("products.json");
        const data = await res.json();
        setProductsData(data);
        console.log(data);
      } catch (er) {
        console.log("Error fetching data");
      }
    }

    fetchProductData();
  }, []);

  return (
    <Div category={category}>
      <H3>{category}</H3>
      <GridDiv>
        {productsData
          .find((categoryProducts) => categoryProducts.category === category)
          ?.items.map((product) => (
            <React.Fragment key={product.id}>
              <DivProductName>{product.name}</DivProductName>
              <DivProductPrice>&#8377; {product.price}</DivProductPrice>
              <Select>
                {Array.from({ length: 15 }).map((_, index) => (
                  <option value={index + 1} key={index}>
                    {index + 1 <= 9 ? `0${index + 1}` : `${index + 1}`}
                  </option>
                ))}
              </Select>
            </React.Fragment>
          ))}
      </GridDiv>
      <AddButtonDiv>
        <Button>Add to Cart</Button>
      </AddButtonDiv>
    </Div>
  );
}
