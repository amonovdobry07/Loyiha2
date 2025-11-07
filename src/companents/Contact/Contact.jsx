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
      <div className="Contact" id="contact">
        <div className="h11">
          <h1>Contact</h1>
        </div>
        <div className="contact-container">
          {/* Left Section */}
          <div className="contact-left">
            <div className="contact-info">
              <p>
                <FaMapMarkerAlt /> Buxoro Shaxar Karvon 14/8
              </p>
              <a href="tel:+998884056888" style={{ textDecoration: "none" }}>
                <p>
                  <FaPhoneAlt /> +998 (88) 926 62 42
                </p>
              </a>
            </div>

            <div className="contact-socials">
              <a href="#" className="facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="telegram">
                <FaTelegramPlane />
              </a>
              <a href="#" className="instagram">
                <FaInstagram />
              </a>
              <a href="#" className="youtube">
                <FaYoutube />
              </a>
            </div>

            <div className="contact-map">
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.909519794547!2d90.37725527451355!3d23.75094298871412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4a83e4ab25%3A0x9477f0c06e7dbb7!2sDhanmondi%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1686666666666"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Right Section */}
          <div className="contact-right">
            <h2></h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <textarea
                placeholder="Write your message here"
                required
              ></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>

      <div className="coright">
        <p>© 2025 OTABEK & MARAT. All rights reserved.</p>
        <span>
          Designed by{" "}
          <a
            style={{ textDecoration: "none", color: "rgba(255, 255, 255, 1)" }}
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
