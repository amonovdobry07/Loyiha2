import "./Products.css"
import photo from "../../assets/pictures/image.png"
import photo1 from "../../assets/pictures/image(1).png"
import star from "../../assets/pictures/Star1.png"
import { IoMdHeartEmpty } from "react-icons/io";
import { useState } from "react";

const Products = () => {

    const maxsulotlar = [
        { id: 1, img: photo, word: "Super Serum Skin Mis Spf 40", star: star, price: 37, view: 123 },
        { id: 2, img: photo1, word: "Super Serum Skin Mis Spf 4000", star: star, price: 24, view: 243 },
        { id: 3, img: photo1, word: "Super Serum Skin Mis Spf 4000", star: star, price: 21, view: 234 },
        { id: 4, img: photo1, word: "Super Serum Skin Mis Spf 4000", star: star, price: 89, view: 233 },
        { id: 5, img: photo1, word: "Super Serum Skin Mis Spf 4000", star: star, price: 213, view: 323 },
        { id: 6, img: photo1, word: "Super Serum Skin Mis Spf 4000", star: star, price: 56, view: 553 },
        { id: 7, img: photo1, word: "Super Serum Skin Mis Spf 4000", star: star, price: 12, view: 263 },
        { id: 8, img: photo1, word: "Super Serum Skin Mis Spf 4000", star: star, price: 39, view: 563 },
        { id: 9, img: photo1, word: "Super Serum Skin Mis Spf 4000", star: star, price: 40, view: 723 },
    ];

    // Dastlab 3 ta mahsulot ko‘rsatamiz
    const [visible, setVisible] = useState(3);

    // Faqat visible sonicha mahsulotlarni ko‘rsatamiz
    const visibleProducts = maxsulotlar.slice(0, visible);

    // ✅ "Ko‘proq" tugmasi bosilganda
    const handleClick = () => {
        setVisible((prev) => {
            const newCount = prev + 3;
            console.log(visible + "Plus");
            // Agar yangi son barcha mahsulotlardan oshsa, maksimal sonni qaytaramiz
            return newCount > maxsulotlar.length ? maxsulotlar.length : newCount;

        });
    };

    // ✅ "Kamroq" tugmasi bosilganda
    const handleMinus = () => {
        setVisible((prev) => {
            const newCount = prev - 3;
            console.log(visible + "Minus");

            // Agar yangi son 3 tadan kam bo‘lsa, 3 qilib qaytaramiz
            return newCount < 3 ? 3 : newCount;
        });
    };

    return (
        <div className="Products">
            <div className="prodacts-big-container">
                <div className="products-container h1">
                    <h1>Tovarlar</h1>
                </div>

                {/* Ko‘rinadigan mahsulotlar */}
                <div className="products-container cards-boxes">
                    {visibleProducts.map((maxsulot, index) => (
                        <div className="cards-in" key={index}>
                            <div className="cards-picture">
                                <img src={maxsulot.img} alt="" />
                                <div className="like">
                                    <IoMdHeartEmpty />
                                </div>
                                <div className="feature">
                                    feature
                                </div>
                            </div>
                            <div className="cards-bottom">
                                <h4>{maxsulot.word}</h4>
                                <div className="stars">
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    <img src={star} alt="" />
                                    &nbsp; &nbsp;
                                    <p>({maxsulot.view})</p>
                                </div>
                                <div className="price">
                                    <div className="usd">
                                        <h1>${maxsulot.price}</h1>
                                    </div>
                                    <div className="price-btn">
                                        Ko'rish
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 🔽 Tugmalar logikasi */}
                <div className="koproq-btn">
                    {/* 1️⃣ Kamroq tugmasi faqat 3 tadan ko‘p mahsulot bo‘lsa chiqadi */}
                    {visible > 3 && (
                        <button onClick={handleMinus}>
                            Kamroq...
                        </button>
                    )}
                    &nbsp;
                    {/* 2️⃣ Ko‘proq tugmasi faqat hammasi chiqmaganda ko‘rinadi */}
                    {visible < maxsulotlar.length && (
                        <button onClick={handleClick}>
                            Ko‘proq...
                        </button>


                    )}
                </div>

            </div>
        </div>
    );
};

export default Products;
