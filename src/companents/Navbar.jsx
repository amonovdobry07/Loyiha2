import "./Navbar.css";
import { MdPhonelinkRing } from "react-icons/md";
import { TbMapPin2 } from "react-icons/tb";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import picture1 from "../assets/pictures/picture1.jpg";
import picture2 from "../assets/pictures/picture2.jpg";
import picture3 from "../assets/pictures/picture3.jpg";
import TextType from './TextType';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [bar, setbar] = useState(false);

  const [backImage, setBackImage] = useState(0)

  const images = [picture1, picture2, picture3]

  useState(() => {
    const interval = setInterval(() => {
      setBackImage((prev) => (prev + 1) % images.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // useEffect(() => {
  //   AOS.init({
  //     duration: 5000, // global duration ms — endi hamma data-aos elementlari 1000ms bo'ladi
  //     once: false,    // sahifa scroll qaytib kelganda qaytadan animatsiya bo'lsinmi
  //   });
  // }, []);

  return (
    <nav style={{ backgroundImage: `url(${images[backImage]})` }}>
      {/* 🔹 Overlay qo‘shildi */}
      <div className="overlay" data-aos="zoom-in" data-aos-duration="2000" ></div>

      <div className="header-back-bg">
        {/* ===========================
                Header Logo and Phone, Map Container
                ==========================*/}
        <div className="header-contact-container">
          <div className="header-logo">
            <h1 data-aos="fade-up" data-aos-duration="1000">Amonoff</h1>
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
                <p>Phone Number:</p>
                <a href="tel:+998884056888">
                  <h4>+(998) 88 405 68 88</h4>
                </a>
              </div>
            </div>

            <div className="map-icon">
              <div className="m-icon" data-aos="fade-up" data-aos-duration="1000">
                <TbMapPin2 />
              </div>
              <span className="span-m-icon"></span>
              <div className="m-icon-text " data-aos="fade-up" data-aos-duration="1000">
                <p>Location:</p>
                <a href="">
                  <h4>Buxoro Shaxar</h4>
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
                <li>Home</li>
              </a>
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Section</li>
              </a>
              <a href="">
                <li>Contact</li>
              </a>
              <a style={{ cursor: "pointer" }}>
                <li
                  className="DropDawn"
                  onMouseEnter={() => setOpen(true)}
                  onMouseLeave={() => setOpen(false)}
                >
                  Market Place ▼
                  {open && (
                    <ul className="DropDawn-menu">
                      <a href="">
                        <li>Ozon</li>
                      </a>
                      <a href="">
                        <li>WildBerries</li>
                      </a>
                      <a href="">
                        <li>Yandex Market</li>
                      </a>
                      <a href="">
                        <li>Uzum Market</li>
                      </a>
                    </ul>
                  )}
                </li>
              </a>
            </ul>
          </div>

          <div className="header-mav-links-right">
            <button className="colsultation-button"
              data-aos="fade-zoom-in"
              data-aos-easing="ease-in-back"
              data-aos-delay="300"
              data-aos-offset="0">
              <select name="language" id="language">
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
            <li>Home</li>
          </a>
          <a href="">
            <li>About</li>
          </a>
          <a href="">
            <li>Service</li>
          </a>
          <a href="">
            <li>Contact</li>
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
          <select name="language" id="language">
            <option value="uz">🇺🇿 Uzbek</option>
            <option value="ru">🇷🇺 Russian</option>
            <option value="en">🇬🇧 English</option>
          </select>
        </div>
      </div>

      {/* Hero text */}
      <div className="hero-text">
        <div className="hero-text-in">
          <TextType
            text={[`Text typing effect for your websites Happy coding! `]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
