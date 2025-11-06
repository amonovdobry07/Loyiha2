import "./App.css";
import AboutUs from "./companents/AboutUs/AboutUs";
import Contact from "./companents/Contact/Contact";
import Navbar from "./companents/Navbar";
import Products from "./companents/Products/Products";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AboutUs />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
