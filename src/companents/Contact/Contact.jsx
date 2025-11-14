import "./Contact.css";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Inputdagi ma'lumotlarni yangilash
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // Formani yuborish
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = form;
    if (!name || !email || !message) {
      alert("Iltimos, barcha maydonlarni to‘ldiring!");
      return;
    }

    const to = "lvlusvoaovsutvvs@gmail.com"; // Siz xabarlar kelishini xohlaysiz
    const subject = "Sayt orqali xabar yuborildi";
    const body = `Assalomu alaykum!\n\nIsm: ${name}\nEmail: ${email}\n\nXabar:\n${message}`;

    const gmailUrl =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(to)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const a = document.createElement("a");
    a.href = gmailUrl;
    a.target = "_blank";
    a.rel = "noopener";
    document.body.appendChild(a);
    a.click();
    a.remove();

    setForm({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="Contact" id="Contact">
        <div className="h11">
          <h1 data-aos="fade-up" data-aos-anchor-placement="center-center">
            Contact
          </h1>
        </div>

        <div className="contact-container">
          {/* Left Section */}
          <div className="contact-left">
            <div className="contact-info">
              <p data-aos="fade-up" data-aos-anchor-placement="center-center">
                <FaMapMarkerAlt /> Buxoro Viloyati Romitan Tumani Guliston Mfy M.Samomiy Ko'chasi 4-uy
              </p>
              <a href="tel:+998993851755" style={{ textDecoration: "none" }}>
                <p data-aos="fade-up" data-aos-anchor-placement="center-center">
                  <FaPhoneAlt /> +998 (99) 385 17 55
                </p>
              </a>
            </div>

            <div className="contact-socials">
              <a href="#" className="facebook" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="300">
                <FaFacebookF />
              </a>
              <a href="https://t.me/Rano_066" className="telegram" target="_blank" rel="noreferrer noopener" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="400">
                <FaTelegramPlane />
              </a>
              <a href="https://www.instagram.com/sarpolar_rano_romitan" className="instagram" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="500">
                <FaInstagram />
              </a>
              <a href="#" className="youtube" data-aos="fade-up" data-aos-anchor-placement="center-center" data-aos-delay="600">
                <FaYoutube />
              </a>
            </div>

            <div className="contact-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6119.49477530948!2d64.381694!3d39.92466900000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDU1JzI4LjgiTiA2NMKwMjInNTQuMSJF!5e0!3m2!1sru!2s!4v1763117217338!5m2!1sru!2s"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="contact-right">
            <h2></h2>
            <form className="forma" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Sizning Ismingiz"
                className="contact-input"
                data-aos="zoom-out-down"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Sizning Emailingiz"
                className="contact-input"
                data-aos="zoom-out-down"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Xabar Yozmoq"
                className="contact-input"
                data-aos="zoom-out-down"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="contact-button" data-aos="zoom-in-up">
                Yuborish
              </button>
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
