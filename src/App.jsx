import Header from "./components/Header";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTAEnd from "./components/CTAEnd";
import TimerSection from "./components/TimerSection";
// import Footer from "./components/Footer";
import Spacer from "./components/Spacer";

import { useState, useEffect } from "react";
//Smooth Scroll
import Lenis from "@studio-freight/lenis";

const lenis = new Lenis();

// lenis.on("scroll", (e) => {
//   console.log(e);
// });

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
//Smooth Scroll Done

function App() {
  const [cart, setCart] = useState([]);

  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    async function fetchProductData() {
      try {
        const res = await fetch("products.json");
        const data = await res.json();
        setProductsData(data);
      } catch (er) {
        console.log("Error fetching data");
      }
    }

    fetchProductData();
  }, []);

  const handleSetCart = function (product) {
    console.log(product);
    const exists = cart.some((p) => p.id === product.id);
    if (exists) {
      setCart((prevCart) =>
        prevCart.map((p) =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + product.quantity }
            : p
        )
      );
    } else {
      setCart((prevCart) => [...prevCart, product]);
    }
  };

  return (
    <>
      <Header cart={cart} />
      <Landing />
      <Features
        productsData={productsData}
        cart={cart}
        onAddToCart={handleSetCart}
      />
      <TimerSection />
      <Testimonials />
      <CTAEnd />
      {/* <Spacer /> */}
      {/* <Spacer /> */}
    </>
  );
}

export default App;
