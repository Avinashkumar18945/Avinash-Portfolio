import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8qz33uf",
        "template_fwckta8",
        form.current,
        "4jjUCtwxpA3th8qHs"
      )
      .then(() => {
        alert("✅ Message Sent Successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error(error);
        alert("❌ Failed to send message.");
      });
  };

  return (
    <section className="contact">
      <div className="contact-container">

        <h2>
          Get In <span>Touch</span>
        </h2>

        <div className="contact-content">

          {/* Left Side */}
          <div className="contact-left">
            <p>
              Have a project in mind or just want to say Hi?
              My inbox is always open.
            </p>

            <div className="contact-info">

              <a href="mailto:avinashvats686@gmail.com">
                <MdEmail />
                <span>avinashvats686@gmail.com</span>
              </a>

              <a
                href="https://github.com/Avinashkumar18945"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                <span>github.com/Avinashkumar18945</span>
              </a>

              <a
                href="https://www.linkedin.com/in/avinash-kumar-a9a6ab306"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                <span>linkedin.com/in/avinash-kumar-a9a6ab306</span>
              </a>

            </div>
          </div>

          {/* Right Side */}
          <div className="contact-right">

            <form ref={form} onSubmit={sendEmail}>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;