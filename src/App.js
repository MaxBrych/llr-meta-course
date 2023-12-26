import "./App.css";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import NavBar from "./components/NavBar";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <>
      <body>
        <NavBar />
        <Hero />
        <Highlights />
        <Testimonials />
        <About />
        <Footer />
      </body>
    </>
  );
}

export default App;
