// HeroText.jsx

import SplitText from "./SplitText";
import "./HeroText.css"

const HeroText = ({ text }) => {
    return (
        <div className="hero-txt">
            <SplitText className="HeroStyle"
                text={text}
                delay={100}
                duration={0.6}
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
            />
        </div >
    );
};

export default HeroText;
