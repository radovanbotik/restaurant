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
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Stories />
      <Testimonials />
      <Recomendations />
      <Menu />
      <Tips />
      <Booking />
      <Footer />
      <FAB />
    </div>
  );
}

export default App;
