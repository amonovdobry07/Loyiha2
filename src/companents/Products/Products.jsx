import "./Products.css"
import photo1 from "../../assets/pictures/tavar2.JPG"
import photo from "../../assets/pictures/tavar1.JPG"
import photo2 from "../../assets/pictures/tavar3.JPG"
import photo3 from "../../assets/pictures/tavar4.JPG"
import photo4 from "../../assets/pictures/tavar5.JPG"
import photo5 from "../../assets/pictures/tavar6.JPG"
import photo6 from "../../assets/pictures/tavar7.JPG"
import photo7 from "../../assets/pictures/tavar8.JPG"
import photo8 from "../../assets/pictures/tavar9.JPG"
import star from "../../assets/pictures/Star1.png"
import { IoMdHeartEmpty } from "react-icons/io";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const Products = () => {

    const { t, i18n } = useTranslation()

    const maxsulotlar = [
        { id: 1, img: photo, word: t(`tavar1`), price: "220 000" + " " + t(`narx`), view: "48-50" + " " + t(`sm`) },
        { id: 2, img: photo1, word: t(`tavar1`), price: "260 000" + " " + t(`narx`), view: "50-52" + " " + t(`sm`) },
        { id: 3, img: photo2, word: t(`tavar1`), price: "260 000" + " " + t(`narx`), view: "50-52" + " " + t(`sm`) },
        { id: 4, img: photo3, word: t(`tavar1`), price: "250 000" + " " + t(`narx`), view: "52-54" + " " + t(`sm`) },
        { id: 5, img: photo4, word: t(`tavar1`), price: "290 000" + " " + t(`narx`), view: "52-54" + " " + t(`sm`) },
        { id: 6, img: photo5, word: t(`tavar1`), price: "290 000" + " " + t(`narx`), view: "48-50" + " " + t(`sm`) },
        { id: 7, img: photo6, word: t(`tavar1`), price: "170 000" + " " + t(`narx`), view: "48-50" + " " + t(`sm`) },
        { id: 8, img: photo7, word: t(`tavar1`), price: "190 000" + " " + t(`narx`), view: "48-50" + " " + t(`sm`) },
        { id: 9, img: photo8, word: t(`tavar1`), price: "290 000" + " " + t(`narx`), view: "48-50" + " " + t(`sm`) },

    ];

    const [visible, setVisible] = useState(3);

    // ⭐ FOYDALANUVCHI RATING BERISHI UCHUN STATE
    const [ratings, setRatings] = useState({});

    const giveRating = (id, star) => {
        setRatings(prev => ({ ...prev, [id]: star }));
    };

    // Modal uchun states
    const [currentIndex, setCurrentIndex] = useState(null);

    // SWIPE uchun states
    const [touchStartX, setTouchStartX] = useState(null);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true, // faqat bir marta animatsiya
        });
    }, []);

    const visibleProducts = maxsulotlar.slice(0, visible);

    const handleClick = () => {
        setVisible(prev => Math.min(prev + 3, maxsulotlar.length));
    }

    const handleMinus = () => {
        setVisible(prev => Math.max(prev - 3, 3));
    }

    // Modalni yopish
    const closeModal = () => setCurrentIndex(null);

    // Keyingi rasm
    const nextImage = () => {
        setCurrentIndex((prev) => (prev + 1) % maxsulotlar.length);
    };

    // Oldingi rasm
    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? maxsulotlar.length - 1 : prev - 1));
    };

    // TOUCH boshlanishi
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    // TOUCH tugashi
    const handleTouchEnd = (e) => {
        if (!touchStartX) return;

        const diff = e.changedTouches[0].clientX - touchStartX;

        if (diff > 50) prevImage();
        if (diff < -50) nextImage();

        setTouchStartX(null);
    };



    return (
        <div className="Products" id="Pruduct">
            <div className="prodacts-big-container">

                <div className="products-container h1">
                    <h1>{t(`tavar`)}</h1>
                </div>

                <div className="products-container cards-boxes">
                    {visibleProducts.map((maxsulot, index) => (
                        <div
                            className="cards-in"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="cards-picture">
                                <img src={maxsulot.img} alt="" />
                                <div className="like">
                                    <IoMdHeartEmpty />
                                </div>
                                <div className="feature">{t(`xususiyat`)}</div>
                            </div>

                            <div className="cards-bottom">
                                <h4>{maxsulot.word}</h4>

                                {/* ⭐⭐ RATING DYNAMIC ⭐⭐ */}
                                <div className="stars">
                                    {[1, 2, 3, 4, 5].map(num => (
                                        <img
                                            key={num}
                                            src={star}
                                            className={
                                                num <= (ratings[maxsulot.id] || 0)
                                                    ? "active-star"
                                                    : "inactive-star"
                                            }
                                            style={{ cursor: "pointer" }}
                                            onClick={() => giveRating(maxsulot.id, num)}
                                        />
                                    ))}
                                    &nbsp;&nbsp;<p>{maxsulot.view}</p>
                                </div>

                                <div className="price">
                                    <div className="usd"><h3>{maxsulot.price}</h3></div>
                                    <div className="price-btn" onClick={() => setCurrentIndex(index)}>{t(`korish`)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="koproq-btn">
                    {visible > 3 && <button onClick={handleMinus}>{t(`kamroq`)}...</button>}
                    &nbsp;
                    {visible < maxsulotlar.length && <button onClick={handleClick}>{t(`koproq`)}...</button>}
                </div>
            </div>

            {/* MODAL + SWIPE */}
            {currentIndex !== null && (
                <div className="modal" onClick={closeModal}>
                    <img
                        src={maxsulotlar[currentIndex].img}
                        className="modal-img"
                        onClick={(e) => e.stopPropagation()}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                    />

                    <button className="modal-btn left" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
                        ‹
                    </button>

                    <button className="modal-btn right" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
                        ›
                    </button>
                </div>
            )}
        </div>
    );
};

export default Products;
