import "./Footer.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser"


const Footer = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("contact_service", "contact_form", form.current, "BM8fgM1vbQEdond4E")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      });
  };

  return (
    <footer>
      <h4 className="contact-text">Contact Us</h4>
      <a href="tel:123456789">123456789</a>
      <p>
        Email
      </p>
      <a href="email">elitetrainers@fake.com</a>
      <div>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" onClick={() => {alert("Email Sent")}} />
        </form>
      </div>
      <p>Copyright © 2022</p>{" "}
    </footer>
  );
};

export default Footer;
