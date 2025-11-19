import "./Navbar.css";
import { MdPhonelinkRing } from "react-icons/md";
import { TbMapPin2 } from "react-icons/tb";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import picture1 from "../assets/pictures/picture1.jpg";
import picture2 from "../assets/pictures/picture2.jpg";
import picture3 from "../assets/pictures/picture3.jpg";
import { useTranslation } from "react-i18next";
import Logo from "../assets/pictures/Logo.png"
import HeroText from "./HeroText";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bar, setbar] = useState(false);

  const [backImage, setBackImage] = useState(0)

  const images = [picture1, picture2, picture3]




  useEffect(() => {
    const interval = setInterval(() => {
      setBackImage((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  // useEffect(() => {
  //   AOS.init({
  //     duration: 5000, // global duration ms — endi hamma data-aos elementlari 1000ms bo'ladi
  //     once: false,    // sahifa scroll qaytib kelganda qaytadan animatsiya bo'lsinmi
  //   });
  // }, []);

  const { t, i18n } = useTranslation()

  return (
    <nav style={{ backgroundImage: `url(${images[backImage]})` }}>
      {/* 🔹 Overlay qo‘shildi */}
      <div className="overlay"></div>

      <div className="header-back-bg">
        {/* ===========================
                Header Logo and Phone, Map Container
                ==========================*/}
        <div className="header-contact-container">
          <div className="header-logo">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              <img src={Logo} alt="" style={{ width: "100px" }} />
            </h1>
          </div>

          {/* =================================
                    Header top Phone Number and map
                    ================================= */}
          <div className="header-phone-container">
            <div className="phone-icon">
              <div className="icon" data-aos="fade-up" data-aos-duration="1000">
                <MdPhonelinkRing />
              </div>
              <span className="span-icon"></span>
              <div className="icon-text" data-aos="fade-up" data-aos-duration="1000">
                <p>{t(`number`)}</p>
                <a href="tel:+998993851755">
                  <h4>+(998) 99 385 17 55</h4>
                </a>
              </div>
            </div>

            <div className="map-icon">
              <div className="m-icon" data-aos="fade-up" data-aos-duration="1000">
                <TbMapPin2 />
              </div>
              <span className="span-m-icon"></span>
              <div className="m-icon-text " data-aos="fade-up" data-aos-duration="1000">
                <p>{t(`manzil`)}</p>
                <a href="">
                  <h4>Buxoro Viloyat</h4>
                </a>
              </div>
            </div>
          </div>

          <div className="header-bars" onClick={() => setbar(!bar)}>
            <HiMiniBars3BottomRight />
          </div>
        </div>

        <div className="header-nav-links-container" >
          <div className="header-nav-links-left"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
            <ul>
              <a href="">
                <li>{t(`boshSahifa`)}</li>
              </a>
              <a href="#About">
                <li>{t(`bizHaqimizda`)}</li>
              </a>
              <a href="#Pruduct">
                <li>{t(`tavarlar`)}</li>
              </a>
              <a href="#Contact">
                <li>{t(`boglanish`)}</li>
              </a>

              <li className="DropDrop"

                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}>
                Market Place ▼
                {open && (
                  <ul className="DropDawnMenu">
                    <li><a href="">Ozon</a></li>
                    <li><a href="">Wilberries</a></li>
                    <li><a href="">Uzum Market</a></li>
                    <li><a href="">Yandex Market</a></li>
                  </ul>
                )}
              </li>

            </ul>
          </div>

          <div className="header-mav-links-right">
            <button className="colsultation-button"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0">
              <select name="language"
                id="language"
                onChange={(e) => {
                  i18n.changeLanguage(e.target.value)
                }}
                defaultValue="uz"
              >
                <option value="uz">🇺🇿 Uzbek</option>
                <option value="ru">🇷🇺 Russian</option>
                <option value="en">🇬🇧 English</option>
              </select>
            </button>
          </div>
        </div>

        {/* Mobile Container */}
        <div className={`close ${bar ? "closePage" : ""}`}>
          <IoMdClose onClick={() => setbar(!bar)} />
        </div>
      </div>

      <div className={`mobile-header-container ${bar ? "active" : ""}`}>
        <ul className="mobile-ul">
          <a href="">
            <li>{t(`boshSahifa`)}</li>
          </a>
          <a href="#About">
            <li onClick={() => setbar(false)}>{t(`bizHaqimizda`)}</li>
          </a>
          <a href="#Pruduct">
            <li onClick={() => setbar(false)} >{t(`tavarlar`)}</li>
          </a>
          <a href="#Contact">
            <li onClick={() => setbar(false)} >{t(`boglanish`)}</li>
          </a>
          <a style={{ cursor: "pointer" }}>
            <li
              className="Mobile-Drop-Dawn"
              onClick={() => setIsMobile(!isMobile)}
            >
              Market Place ▼
              {isMobile && (
                <ul className="MobileDropDawn-menu">
                  <li>
                    <a href="">Ozon</a>
                  </li>
                  <li>
                    <a href="">Wildberries</a>
                  </li>
                  <li>
                    <a href="">Yandex Market</a>
                  </li>
                  <li>
                    <a href="">Uzum Market</a>
                  </li>
                </ul>
              )}
            </li>
          </a>
        </ul>
        <div className="mobile-links">
          <select name="language" id="language"
            onChange={(e) => {
              i18n.changeLanguage(e.target.value)
            }}
            defaultValue="uz">
            <option value="uz">🇺🇿 Uzbek</option>
            <option value="ru">🇷🇺 Russian</option>
            <option value="en">🇬🇧 English</option>
          </select>
        </div>
      </div>

      {/* Hero text */}

      <div className="hero-text-wrapper">
        <HeroText key={i18n.language} text={t("mexnat")} />
      </div>
    </nav>
  );
};

export default Navbar;
