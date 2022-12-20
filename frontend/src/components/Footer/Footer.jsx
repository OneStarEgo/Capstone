import "./Footer.css";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser"


const Footer = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("contact_service", "contact_form", e.target, "BM8fgM1vbQEdond4E")
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text)
      });
      e.target.reset()
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
          <input type="text" placeholder="Name" name="name" />
          <label>Email Address</label>
          <input type="email" placeholder="Email Address" name="user_email" />
          <label>Subject</label>
          <input type='text' placeholder="Subject" name="subject"/>
          <label>Message</label>
          <textarea id="" cols="30" rows="8" placeholder="Your message" name="message"></textarea>
          <input type="submit" value="Send Message" onClick={() => {alert("Email Sent")}} />
        </form>
      </div>
      <p>Copyright © 2022</p>{" "}
    </footer>
  );
};

export default Footer;
