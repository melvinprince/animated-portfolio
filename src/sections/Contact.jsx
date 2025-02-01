import { useRef, useState } from "react";
import "./styles/contact.scss";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import { span } from "framer-motion/client";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

export default function Contact() {
  const ref = useRef();
  const formRef = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_wi1he6i", "template_8ki7r1d", formRef.current, {
        publicKey: "fAjGym_dOy_EU-HJ6",
      })
      .then(
        () => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <section id="contact">
      <motion.div
        ref={ref}
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="text-container" variants={variants}>
          <motion.h1 variants={variants}>Let's Work Together</motion.h1>
          <motion.div className="item" variants={variants}>
            <h2>E-mail</h2>
            <span>themelvinprince@gmail.com</span>
          </motion.div>
        </motion.div>
        <div className="form-container">
          <motion.div
            className="emailSVG"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 0.5, duration: 3 }}
          >
            <svg width="60rem" height="60rem" viewBox="200 795 30 30">
              <motion.path
                stroke="orange"
                strokeWidth={0.2}
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isInView ? 1 : 0 }}
                transition={{ duration: 5 }}
                d="M208,801.586 C208,801.034 208.448,801 209,801 L219,801 C219.552,801 220,801.034 220,801.586 L220,802.835 L214.447,805.612 C214.166,805.752 213.834,805.752 213.553,805.612 L208,802.835 L208,801.586 Z M206.276,804.209 L213.106,807.624 C213.669,807.906 214.331,807.906 214.894,807.624 L221.724,804.209 C221.893,804.125 222,803.952 222,803.762 L222,800.586 C222,799.481 221.105,799 220,799 L208,799 C206.895,799 206,799.481 206,800.586 L206,803.762 C206,803.952 206.107,804.125 206.276,804.209 L206.276,804.209 Z M222,815.586 C222,816.138 221.552,817 221,817 L207,817 C206.448,817 206,816.138 206,815.586 L206,809.116 C206,808.745 206.391,808.503 206.724,808.669 C210.9,810.757 209.617,810.116 213.119,811.867 C213.674,812.145 214.328,812.149 214.886,811.877 C218.357,810.193 216.898,810.897 221.284,808.791 C221.615,808.631 222,808.873 222,809.242 L222,815.586 Z M221.106,806.518 L214.447,809.848 C214.166,809.988 213.834,809.988 213.553,809.848 L206.894,806.518 C205.565,805.854 204,806.821 204,808.307 L204,816.586 C204,817.691 204.895,819 206,819 L222,819 C223.105,819 224,817.691 224,816.586 L224,808.307 C224,806.821 222.435,805.854 221.106,806.518 L221.106,806.518 Z"
              />
            </svg>
          </motion.div>

          <motion.form
            ref={formRef}
            onSubmit={sendEmail}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.2 }}
          >
            <input type="text" required placeholder="Name" name="from_name" />
            <input type="email" required placeholder="Email" name="reply_to" />
            <textarea
              required
              rows="8"
              placeholder="Message"
              name="message"
            ></textarea>
            <button type="submit">Send Message</button>
            {error && <span>Something went wrong, please try again</span>}
            {success && <span>Message sent successfully</span>}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}
