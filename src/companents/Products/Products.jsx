import "./Products.css"
import photo from "../../assets/pictures/image.png"
import photo1 from "../../assets/pictures/image(1).png"
import photo2 from "../../assets/pictures/image(2).png"
import photo3 from "../../assets/pictures/image(3).png"
import photo4 from "../../assets/pictures/image(4).png"
import photo5 from "../../assets/pictures/image(5).png"
import photo6 from "../../assets/pictures/image(6).png"
import photo7 from "../../assets/pictures/image(7).png"
import photo8 from "../../assets/pictures/image(8).png"
import star from "../../assets/pictures/Star1.png"
import { IoMdHeartEmpty } from "react-icons/io";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useTranslation } from "react-i18next";

const Products = () => {

    const { t, i18n } = useTranslation()

    const maxsulotlar = [
        { id: 1, img: photo, word: t(`product1`), price: 37, view: 17 },
        { id: 2, img: photo1, word: t(`product2`), price: 24, view: 29 },
        { id: 3, img: photo2, word: t(`product3`), price: 21, view: 138 },
        { id: 4, img: photo3, word: t(`product4`), price: 89, view: 233 },
        { id: 5, img: photo4, word: t(`product5`), price: 213, view: 323 },
        { id: 6, img: photo5, word: t(`product6`), price: 56, view: 553 },
        { id: 7, img: photo6, word: t(`product7`), price: 12, view: 263 },
        { id: 8, img: photo7, word: t(`product8`), price: 39, view: 563 },
        { id: 9, img: photo8, word: t(`product9`), price: 40, view: 723 },
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
        AOS.init({ duration: 1000, once: true });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [visible]);

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
                                    &nbsp;&nbsp;<p>({maxsulot.view})</p>
                                </div>

                                <div className="price">
                                    <div className="usd"><h1>${maxsulot.price}</h1></div>
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
