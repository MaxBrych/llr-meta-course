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
      <head>
        <title>Little Lemon Restaurant</title>
        <meta name="og:title" content="Little Lemon Restaurant" />
        <meta
          name="og:description"
          content="Get the best food in town at Little Lemon Restaurant. Open Monday to Friday, 9 to 5, in the Great Lake area."
        />
        <meta
          name="og:image"
          content="https://cdn.discordapp.com/attachments/911669935363752026/1189192695827144744/llr_image.jpg?ex=659d4500&is=658ad000&hm=c68bd6a0f884fd8a0816ba559aab02f833c41e7082c0c756f492b17336d246d7&"
        />{" "}
      </head>

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
