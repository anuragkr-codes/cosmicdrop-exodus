import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";

const Div = styled.div`
  position: fixed;
  top: 50vh;
  left: 50vw;
  z-index: 888;
  transform: translate(-50%, -50%);
  padding: 2rem 3vw;
  border-radius: 6px;

  @media (max-width: 41.25em) {
    /* width: 90vw; */
  }

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
  font-size: 4vw;
  font-size: clamp(3.2rem, 4vw, 6rem);
  font-weight: 500;
  white-space: nowrap;
  margin-bottom: 4vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1vh;

  .cross {
    display: inline-block;
    scale: 1.2;
    cursor: pointer;
    color: #fff;
  }
`;

const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  column-gap: 3.2vw;
  row-gap: 2vh;
  align-items: center;

  @media (max-width: 41.25em) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 2vw;
  }
`;

const DivProductName = styled.div`
  font-size: 3rem;
  font-size: clamp(2.2rem, 2vw, 3rem);
  white-space: nowrap;
  @media (max-width: 41.25em) {
    grid-column: span 3;
    white-space: normal;
  }
`;
const DivProductPrice = styled.div`
  font-size: 3rem;
  font-size: clamp(2.2rem, 2vw, 3rem);
  white-space: nowrap;
`;

const Select = styled.select`
  border-radius: 2.5rem;
  width: 8rem;
  text-align: center;
  cursor: pointer;
  font-size: clamp(1.8rem, 1.4vw, 2.2rem);
  color: #012a4a;
  align-self: stretch;
`;

const Button = styled.div`
  font-size: 2rem;
  font-size: clamp(1.8rem, 1.4vw, 2.2rem);
  color: #012a4a;
  background-color: #fff;
  padding: 1rem 2rem;
  border-radius: 2.4rem;
  cursor: pointer;
  white-space: nowrap;
`;

export default function ShopCategory({
  category,
  onSelectCategory,
  productsData,
  onAddToCart,
}) {
  const handleEscapeKeyPress = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onSelectCategory("");
      }
    },
    [onSelectCategory]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [handleEscapeKeyPress]);

  return (
    <Div category={category}>
      <H3>
        <span>{category}</span>
        <span className="cross" onClick={() => onSelectCategory("")}>
          &times;
        </span>
      </H3>
      <GridDiv>
        {productsData
          .find((categoryProducts) => categoryProducts.category === category)
          ?.items.map((product) => (
            <Product
              category={category}
              product={product}
              key={product.id}
              onAddToCart={onAddToCart}
            ></Product>
          ))}
      </GridDiv>
    </Div>
  );
}

function Product({ category, product, onAddToCart }) {
  const [quantity, setQuantity] = useState(0);
  const handleSetQuantity = function (e) {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = function () {
    if (quantity === 0) return;

    const cartItem = {
      category,
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
    };
    onAddToCart(cartItem);
    setQuantity(0);
  };

  return (
    <>
      <DivProductName>{product.name}</DivProductName>
      <DivProductPrice>&#8377; {product.price}</DivProductPrice>
      <Select value={quantity} onChange={handleSetQuantity}>
        {Array.from({ length: 16 }).map((_, index) => (
          <option value={index} key={index}>
            {index <= 9 ? `0${index}` : `${index}`}
          </option>
        ))}
      </Select>
      <Button onClick={handleAddToCart}>Add to Cart</Button>
    </>
  );
}
