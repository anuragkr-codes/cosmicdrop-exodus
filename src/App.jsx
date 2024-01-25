import Header from "./components/Header";
import Landing from "./components/Landing";
import Features from "./components/Features";
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
      <Spacer />
    </>
  );
}

export default App;
