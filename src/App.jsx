import Header from "./components/Header";
import Landing from "./components/Landing";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CTAEnd from "./components/CTAEnd";
// import Footer from "./components/Footer";
import Spacer from "./components/Spacer";

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
  return (
    <>
      <Header />
      <Landing />
      <Features />
      <Testimonials />
      <CTAEnd />
      {/* <Spacer /> */}
      {/* <Spacer /> */}
    </>
  );
}

export default App;
