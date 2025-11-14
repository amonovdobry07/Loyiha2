import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaMobileAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="Contact" id="Contact">
        <div className="h11">
          <h1 data-aos="fade-up"
            data-aos-anchor-placement="center-center">Contact</h1>
        </div>
        <div className="contact-container">
          {/* Left Section */}
          <div className="contact-left">
            <div className="contact-info">
              <p data-aos="fade-up"
                data-aos-anchor-placement="center-center">
                <FaMapMarkerAlt /> Buxoro Viloyati Romitan Tumani Guliston Mfy M.Samomiy Ko'chasi 4-uy
              </p>
              <a href="tel:+998884056888" style={{ textDecoration: "none" }}>
                <p data-aos="fade-up"
                  data-aos-anchor-placement="center-center">
                  <FaPhoneAlt /> +998 (99) 385 17 55
                </p>
              </a>
            </div>

            <div className="contact-socials">
              <a href="#" className="facebook" data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                data-aos-delay="300">
                <FaFacebookF />
              </a>
              <a href="https://t.me/Rano_066" rel="noreferrer noopener" className="telegram" data-aos="fade-up" target="_blank"
                data-aos-anchor-placement="center-center"
                data-aos-delay="400">
                <FaTelegramPlane />
              </a>
              <a href="https://www.instagram.com/sarpolar_rano_romitan?utm_source=qr&igsh=MXBiNXV3cHkwc3J5aA==" className="instagram" data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                data-aos-delay="500">
                <FaInstagram />
              </a>
              <a href="#" className="youtube" data-aos="fade-up"
                data-aos-anchor-placement="center-center"
                data-aos-delay="600">
                <FaYoutube />
              </a>
            </div>

            <div className="contact-map" >
              <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6119.49477530948!2d64.381694!3d39.92466900000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU1JzI4LjgiTiA2NMKwMjInNTQuMSJF!5e0!3m2!1sru!2s!4v1763117217338!5m2!1sru!2s"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

          {/* Right Section */}
          <div className="contact-right">
            <h2></h2>
            <form data-aos="zoom-out-up">
              <input type="text" placeholder="Name" required className="telegram" />
              <input type="email" placeholder="Email" required className="telegram" />
              <textarea
                placeholder="Write your message here"
                required
                className="telegram"
              ></textarea>
              <button type="submit" className="telegram">Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="coright">
        <p>© 2025 OTABEK & MARAT. All rights reserved.</p>
        <span>
          Designed by{" "}
          <a
            style={{ textDecoration: "none", color: "rgba(153, 153, 153, 1)" }}
            href="https://t.me/buxoro_tadbirkorlar_klubi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buxoro Tadbirkorlari Biznes Klubi
          </a>
        </span>
      </div>
    </>
  );
};

export default Contact;
