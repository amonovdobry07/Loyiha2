import { initReactI18next } from "react-i18next";
import i18n from "i18next"
import "./App.css";
import AboutUs from "./companents/AboutUs/AboutUs";
import Contact from "./companents/Contact/Contact";
import Navbar from "./companents/Navbar";
import Products from "./companents/Products/Products";
import translationUz from "./Locales/translationUz"
import translationEn from "./Locales/translationEn"
import translationRu from "./Locales/translationRu"


i18n.use(initReactI18next).init({
  resources: {
    uz: { translation: translationUz },
    en: { translation: translationEn },
    ru: { translation: translationRu }
  },
  lng: "uz",
  fallbackLng: "uz"

})


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
