
import "./AboutUs.css"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,   // ❗ Faqat bir marta ishlaydi
        });
    }, []);

    const { t, i18n } = useTranslation()

    return (
        <div className="AboutUs" id="About">
            <div className="about-container">
                <div className="about-container-left">
                    <h1 data-aos="zoom-out-up">
                        {t(`biz`)}
                    </h1>
                    <p data-aos="zoom-out-up">
                        {t(`haqimizda`)}
                    </p>
                </div>

                <div className="about-container-right">
                    <div className="about-top">
                        <span className="a1" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            <h1>
                                1000+
                            </h1>
                            <p> {t(`haqimizda1`)}</p>
                        </span>
                        <span className="a2" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            <h1>
                                25+ {t(`yil`)}
                            </h1>
                            <p> {t(`haqimizda2`)}</p>
                        </span>
                    </div>
                    <div className="about-bottom">
                        <span className="a3" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            <h1>
                                400+
                            </h1>
                            <p> {t(`haqimizda3`)}</p>
                        </span>
                        <span className="a4" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            <h1>
                                250+
                            </h1>
                            <p> {t(`haqimizda4`)}</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AboutUs; 