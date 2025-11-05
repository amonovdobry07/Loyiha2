import "./Navbar.css"
import { MdPhonelinkRing } from "react-icons/md";
import { TbMapPin2 } from "react-icons/tb";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { FiPhoneCall } from "react-icons/fi";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
    const [bar, setbar] = useState(false)
    return (
        <nav>
            <div className="header-back-bg">
                {/* ===========================
                Header Logo and Phone, Map Container
                ==========================*/}
                <div className="header-contact-container">
                    <div className="header-logo">
                        <h1>Amonoff</h1>
                    </div>
                    {/* /* =================================
                    Header top Phone Number and map
                    ================================= */}
                    <div className="header-phone-container">
                        <div className="phone-icon">
                            <div className="icon">
                                <MdPhonelinkRing />
                            </div>
                            <span className="span-icon"></span>
                            <div className="icon-text">
                                <p>Phone Number:</p>
                                <a href="tel:+998884056888"> <h4>+(998) 88 405 68 88</h4></a>
                            </div>
                        </div>

                        <div className="map-icon">
                            <div className="m-icon">
                                <TbMapPin2 />
                            </div>
                            <span className="span-m-icon"></span>
                            <div className="m-icon-text">
                                <p>Location:</p>
                                <a href=""><h4>Buxoro Shaxar </h4></a>
                            </div>
                        </div>
                    </div>
                    <div className="header-bars"
                        onClick={() => setbar(!bar)}
                    >
                        <HiMiniBars3BottomRight />
                    </div>
                </div>
                <div className="header-nav-links-container">
                    <div className="header-nav-links-left">
                        <ul>
                            <a href="">
                                <li>
                                    Home
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    About
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    Section
                                </li>
                            </a>
                            <a href="">
                                <li>
                                    Contact
                                </li>
                            </a>
                            <a style={{ cursor: "pointer" }}>
                                <li className="DropDawn"

                                    onMouseEnter={() => setOpen(true)}
                                    onMouseLeave={() => setOpen(false)}


                                >
                                    Market Place  ▼

                                    {
                                        open && (
                                            <ul className="DropDawn-menu">
                                                <a href="">
                                                    <li>
                                                        Ozon
                                                    </li>
                                                </a>
                                                <a href="">
                                                    <li>
                                                        WildBerries
                                                    </li>
                                                </a>
                                                <a href="">
                                                    <li>
                                                        Yandex Market
                                                    </li>
                                                </a>
                                                <a href="">
                                                    <li>
                                                        Uzum Market
                                                    </li>
                                                </a>
                                            </ul>
                                        )
                                    }
                                </li>
                            </a>
                        </ul>
                    </div>
                    <div className="header-mav-links-right">
                        <button className="colsultation-button">
                            <FiPhoneCall /> Free Consultation
                        </button>
                    </div>
                </div>
                {/* Mobile Container */}
                <div className={`close ${bar ? "closePage" : ""}`}>
                    <IoMdClose onClick={() => setbar(!bar)} />
                </div>
                <div className={`mobile-header-container ${bar ? "active" : ""}`}>


                    <ul className="mobile-ul">
                        <a href="">
                            <li>
                                Home
                            </li>
                        </a>
                        <a href="">
                            <li>
                                About
                            </li>
                        </a>
                        <a href="">
                            <li>
                                Service
                            </li>
                        </a>
                        <a href="">
                            <li>
                                Contact
                            </li>
                        </a>
                        <a style={{ cursor: "pointer" }}>
                            <li className="Mobile-Drop-Dawn"
                                onClick={() => setIsMobile(!isMobile)}
                            >
                                Market Place ▼
                                {isMobile && (
                                    <ul className="MobileDropDawn-menu">
                                        <li>
                                            <a href="">
                                                Ozon
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Wildberries
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Yandex Market
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                Uzum Market
                                            </a>
                                        </li>
                                    </ul>
                                )}
                            </li>
                        </a>
                    </ul>
                    <div className="mobile-links">
                        <div className="links-box"><FaTelegramPlane /></div>
                        <div className="links-box"><FaFacebookF /></div>
                        <div className="links-box"><IoLogoInstagram /></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar; 