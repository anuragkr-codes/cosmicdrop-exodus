import styled from "styled-components";
import Overlay from "./Overlay";
import React, { useEffect, useCallback } from "react";

const Section = styled.section`
  position: fixed;
  top: 6rem;
  right: 4rem;
  z-index: 1111;
  overflow: auto;
  max-height: 100%;
  margin-left: 2rem;

  background-color: #ffad31;
  border-radius: 1.4rem 0 1.4rem 1.4rem;

  color: #fff;

  @media (max-width: 41.25em) {
    right: 2rem;
    top: 6.4rem;
  }
`;

const GridDiv = styled.div`
  padding: 4rem 3.2rem 8rem 3.2rem;
  display: grid;
  grid-template-columns: 0.5fr 2fr 1fr 1fr 1fr 1fr;
  row-gap: 1.4rem;
  column-gap: 1rem;
  justify-items: start;
  font-size: 2.8rem;
  font-size: clamp(1.6rem, 2vw, 3rem);
  @media (max-width: 41.25em) {
    column-gap: 0.6rem;
    padding: 4rem 1.6rem 8rem 1.6rem;
  }
`;

const P = styled.p`
  padding: 4rem 3.2rem 8rem 3.2rem;
  font-size: clamp(1.6rem, 2vw, 3rem);
  @media (max-width: 41.25em) {
    padding: 4rem 1.6rem 8rem 1.6rem;
  }
`;

const HeadingSpan = styled.span`
  display: inline-block;
  text-transform: uppercase;
  font-weight: 500;
  color: #060911;
  margin-bottom: 1.8rem;

  &.name-heading {
    grid-column: span 3;
  }

  &.name-heading,
  &.qty-heading {
    justify-self: center;
  }
`;

const NameSpan = styled.span`
  white-space: nowrap;
  grid-column: span 2;
  @media (max-width: 41.25em) {
    white-space: normal;
  }
`;

const PriceSpan = styled.span``;
const QtySpan = styled.span`
  color: #012a4a;
  justify-self: center;
`;
const TotalSpan = styled.span``;

const TotalDiv = styled.div`
  grid-column: 2/ -1;
  border-top: 2px solid #000;
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 2fr 1fr;
  row-gap: 0.4rem;
  margin-top: 1rem;
  padding: 1.6rem 0;
`;

const TotalHeadingSpan = styled.span`
  text-transform: uppercase;
  display: inline-block;
`;

const TotalValueSpan = styled.span`
  display: inline-block;
`;

const RemoveSpan = styled.span`
  display: inline-block;
  scale: 0.6;
`;

export default function Cart({ cart, onDeleteCart, onEscKey }) {
  const handleEscapeKeyPress = useCallback(
    (event) => {
      if (event.key === "Escape") {
        onEscKey();
      }
    },
    [onEscKey]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeKeyPress);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
    };
  }, [handleEscapeKeyPress]);

  const subtotal = Number(
    cart
      .reduce(
        (accumulator, product) =>
          accumulator + product.price * product.quantity,
        0
      )
      .toFixed(2)
  );

  const total = Number((0.9 * subtotal).toFixed(2));
  const tax = Number((0.18 * total).toFixed(2));
  const grandTotal = Number((total + tax).toFixed(2));

  return (
    <>
      <Overlay zIndex={999} />
      <Section>
        {cart.length ? (
          <GridDiv>
            <HeadingSpan className="name-heading">Items</HeadingSpan>
            <HeadingSpan>Price</HeadingSpan>
            <HeadingSpan className="qty-heading">Qty</HeadingSpan>
            <HeadingSpan>Total</HeadingSpan>
            {cart.map((product) => (
              <React.Fragment key={product.id}>
                <RemoveSpan onClick={() => onDeleteCart(product.id)}>
                  ❌
                </RemoveSpan>
                <NameSpan>{product.name}</NameSpan>
                <PriceSpan>&#8377; {product.price}</PriceSpan>
                <QtySpan>
                  {product.quantity <= 9
                    ? `0${product.quantity}`
                    : product.quantity}
                </QtySpan>
                <TotalSpan>
                  &#8377; {product.price * product.quantity}
                </TotalSpan>
              </React.Fragment>
            ))}
            <TotalDiv>
              <TotalHeadingSpan>Subtotal</TotalHeadingSpan>
              <TotalValueSpan>&#8377; {subtotal}</TotalValueSpan>
              <TotalHeadingSpan>Coupon</TotalHeadingSpan>
              <TotalValueSpan>Exodus(-10%)</TotalValueSpan>
              <TotalHeadingSpan>Total</TotalHeadingSpan>
              <TotalValueSpan>{total}</TotalValueSpan>
              <TotalHeadingSpan>Tax (18%)</TotalHeadingSpan>
              <TotalValueSpan>{tax}</TotalValueSpan>
              <TotalHeadingSpan>Grand Total</TotalHeadingSpan>
              <TotalValueSpan>&#8377; {grandTotal}</TotalValueSpan>
            </TotalDiv>
          </GridDiv>
        ) : (
          <P>Your cart is empty. Add some items to your cart.</P>
        )}
      </Section>
    </>
  );
}
