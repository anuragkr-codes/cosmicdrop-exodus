import styled from "styled-components";
import CartIcon from "../assets/Cart.png";

// import Lenis from "@studio-freight/lenis";

// const lenis = new Lenis();

// const scrollToSection = (selector) => {
//   const targetElement = document.querySelector(selector);
//   lenis.scrollTo(targetElement);
// };

const HeaderElement = styled.header`
  position: fixed;
  top: 0;
  z-index: 2222;

  /* width: 100vw; */
  width: 100%;
  height: 6rem;
  padding: 0 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: transparent; */

  color: #fff;
  transition: background-color 0.1s ease;

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

  a:link,
  a:visited {
    color: inherit;
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover,
  a:active {
    color: #ffad31;
  }
`;

const CartLinkDiv = styled.div`
  /* font-size: 3rem; */
  /* font-size: 2.4vw; */
  font-size: clamp(2rem, 2.4vw, 3rem);
  font-weight: 300;
  padding: 1rem 0.4rem 0 0.4rem;
  cursor: pointer;

  /* padding: ${(props) => (props.showCart ? "1rem 0.4rem 0 0.4rem" : 0)}; */
  background-color: ${(props) => (props.showCart ? "#ffad31" : "transparent")};
  border-radius: ${(props) => (props.showCart ? "1.4rem 1.4rem 0 0" : 0)};
  box-shadow: ${(props) => (props.showCart ? "0 20px 0 0 #ffad31" : "initial")};
`;
const CartIconDiv = styled.div`
  position: relative;

  .product-number {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    line-height: 1rem;
    padding: 0.6rem;
    border-radius: 100%;
    background-color: #fff;
    font-size: 1.6rem;
    font-weight: 500;
    color: #0c121f;
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
  display: inline-block;

  @media (max-width: 41.25em) {
    width: 3.4rem;
  }
`;

export default function Header({ cart, showCart, onShowCart, solidBg }) {
  const noOfProductInCart = cart.length;

  return (
    <HeaderElement className={solidBg ? "header-solid-bg" : ""}>
      <FeatureLinkDiv>
        <a href="#products">Our Products</a>
      </FeatureLinkDiv>
      <FeatureLinkDiv>
        <a href="#next-delivery">Next Delivery</a>
      </FeatureLinkDiv>
      <LogoDiv>Cosmicdrop</LogoDiv>
      <FeatureLinkDiv>
        <a href="#testimonials">Testimonials</a>
      </FeatureLinkDiv>
      <CartLinkDiv
        className="cart-link"
        showCart={showCart}
        onClick={onShowCart}
        name="data-lenis-toggle"
      >
        <span>Cart </span>
        <CartIconDiv>
          <Img src={CartIcon} />
          <span className="product-number">{noOfProductInCart}</span>
        </CartIconDiv>
      </CartLinkDiv>
    </HeaderElement>
  );
}
