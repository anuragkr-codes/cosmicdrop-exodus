import Landing from "./components/Landing";
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
      <Landing />
      <Spacer />
    </>
  );
}

export default App;
