import SplitText from "./SplitText";
import "./HeroText.css"
import { useEffect, useState } from "react";

const HeroText = ({ text }) => {
    const [key, setKey] = useState(0); // HeroText qayta render bo‘lishi uchun key

    useEffect(() => {
        const interval = setInterval(() => {
            setKey(prev => prev + 1); // har 3 sekundda key o‘zgaradi, SplitText qayta render bo‘ladi
        }, 10000); // 3000 ms = 3 sekund

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-txt">
            <SplitText
                key={key} // key o‘zgarganda SplitText qayta animatsiya qiladi
                className="HeroStyle"
                text={text}
                delay={100}
                duration={0.6}
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                once={false} // ScrollTrigger ga uzatiladi, SplitText ichida qo‘shish kerak
            />
        </div>
    );
};

export default HeroText;
