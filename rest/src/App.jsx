import { useEffect, useRef, useState } from "react";
import {
  Hero,
  Navigation,
  Stories,
  Testimonials,
  Recomendations,
  Menu,
  Tips,
  Booking,
  Footer,
  FAB,
} from "./components";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const storiesRef = useRef([]);
  const setRef = el => {
    if (el && !storiesRef.current.includes(el)) storiesRef.current.push(el);
  };
  const observeStories = () => {
    const options = { threshold: 0.35 };
    const cb = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsScrolled(true);
        }
      });
    };
    const observer = new IntersectionObserver(cb, options);
    observer.observe(storiesRef.current[0]);
  };
  useEffect(() => {
    observeStories();
  }, [storiesRef]);

  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Stories setRef={setRef} />
      <Testimonials />
      <Recomendations />
      <Menu />
      <Tips />
      <Booking />
      <Footer />
      {isScrolled && <FAB />}
    </div>
  );
}

export default App;
