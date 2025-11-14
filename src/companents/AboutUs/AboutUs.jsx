
import "./AboutUs.css"

const AboutUs = () => {
    return (
        <div className="AboutUs" id="About">
            <div className="about-container">
                <div className="about-container-left">
                    <h1 data-aos="zoom-out-up">
                        Biz Haqimizda
                    </h1>
                    <p data-aos="zoom-out-up">
                        2000-yildan buyon tikuvchilik sohasida faoliyat yuritib kelayotgan korxonamiz mijozlarimizga sifatli, mustahkam va milliy ruhni o‘zida mujassam etgan mahsulotlarni taqdim etib kelmoqda. Yillar davomida orttirilgan tajriba, an’anaviy tikuvchilik uslublari va zamonaviy texnologiyalar uyg‘unligi bizning ishimizning asosiy tamoyilidir.

                        Faoliyatimiz davomida erishgan yutuqlarimizdan biri — “O‘zbekiston Mustaqilligining 15 yilligi” ko‘krak nishoni bilan taqdirlanishimizdir. Bu bizning mehnatimiz e’tirof etilganining yorqin isbotidir.

                        Bugungi kunda korxonamiz:
                        — Ko‘rpa va ko‘rpachalar,
                        — Milliy liboslar
                        ishlab chiqarishga ixtisoslashgan bo‘lib, har bir mahsulot yuqori sifat talablari asosida tayyorlanadi.
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
                            <p> Tayyorlangan va mijozlarga yetkazilgan mahsulotlar</p>
                        </span>
                        <span className="a2" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            <h1>
                                25+ yil
                            </h1>
                            <p> Tikuvchilik bo‘yicha tajriba</p>
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
                            <p> Doimiy mijozlar va buyurtmachilar</p>
                        </span>
                        <span className="a4" data-aos="fade-zoom-in"
                            data-aos-easing="ease-in-back"
                            data-aos-delay="300"
                            data-aos-offset="0">
                            <h1>
                                250+
                            </h1>
                            <p> Yiliga ishlab chiqariladigan mahsulotlar turi</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AboutUs; 