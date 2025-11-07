import "./Products.css"
import photo from "../../assets/pictures/image.png"
import photo1 from "../../assets/pictures/image(1).png"
import star from "../../assets/pictures/Star1.png"
import { IoMdHeartEmpty } from "react-icons/io";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

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

    const [visible, setVisible] = useState(3);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    // Agar visible o‘zgarsa, AOS refresh qilamiz
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

    return (
        <div className="Products">
            <div className="prodacts-big-container">
                <div className="products-container h1">
                    <h1>Tovarlar</h1>
                </div>

                <div className="products-container cards-boxes">
                    {visibleProducts.map((maxsulot, index) => (
                        <div
                            className="cards-in"
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 100} // kartalarni ketma-ket animatsiya qiladi
                        >
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
                                    {[...Array(5)].map((_, i) => (
                                        <img src={star} alt="" key={i} />
                                    ))}
                                    &nbsp;&nbsp;<p>({maxsulot.view})</p>
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

                <div className="koproq-btn">
                    {visible > 3 && <button onClick={handleMinus}>Kamroq...</button>}
                    &nbsp;
                    {visible < maxsulotlar.length && <button onClick={handleClick}>Ko‘proq...</button>}
                </div>
            </div>
        </div>
    );
};

export default Products;
