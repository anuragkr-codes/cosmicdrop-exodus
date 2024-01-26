import styled from "styled-components";
import CartIcon from "../assets/Cart.png";

const HeaderElement = styled.header`
  position: fixed;
  top: 0;
  z-index: 999;

  width: 100vw;
  /* width: 100%; */
  height: 6rem;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  color: #fff;

  @media (max-width: 41.25em) {
    padding: 4.4rem 2rem;
  }

  .cart-link {
    display: flex;
    align-items: center;
  }
`;

const FeatureLinkDiv = styled.div`
  /* font-size: 3rem; */
  /* font-size: 2.4vw; */
  font-size: clamp(2rem, 2.4vw, 3rem);
  font-weight: 300;

  @media (max-width: 41.25em) {
    display: none;
  }
`;

const LogoDiv = styled.div`
  font-size: clamp(2.2rem, 2.6vw, 3.2rem);
  font-weight: 400;
  text-transform: uppercase;

  @media (max-width: 41.25em) {
    font-weight: 500;
  }
`;

const Img = styled.img`
  width: 4.4rem;

  @media (max-width: 41.25em) {
    width: 3.4rem;
  }
`;

export default function Header() {
  return (
    <HeaderElement>
      <FeatureLinkDiv>Our items</FeatureLinkDiv>
      <FeatureLinkDiv>Testimonials</FeatureLinkDiv>
      <LogoDiv>Cosmicdrop</LogoDiv>
      <FeatureLinkDiv>Next Delivery</FeatureLinkDiv>
      <FeatureLinkDiv className="cart-link">
        <span>Cart </span>
        <Img src={CartIcon} />
      </FeatureLinkDiv>
    </HeaderElement>
  );
}
