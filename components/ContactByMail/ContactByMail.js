import React, { useState } from "react";
import classes from "./ContactByMail.module.css";
import { init } from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";

init(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

const ContactByMail = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isVerified, setIsverified] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();

    if (name && message && phone && email) {
      let data = {
        name,
        phone,
        email,
        message,
      };

      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          data,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          function (response) {
            console.log(response.status, response.text);
          },
          function (err) {
            console.log(err);
          }
        );
      setName("");
      setPhone("");
      setEmail("");
      setMessage("");
    }
  };

  console.log(process.env.NEXT_PUBLIC_RECAPCHA);

  return (
    <div>
      <br />
      <div>
        <header>
          <form
            className={classes.contactForm}
            autoComplete="off"
            onSubmit={(e) => handleClick(e)}
          >
            <div className={classes.formContent}>
              <input
                type="text"
                className={classes.name}
                name="name"
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name*"
                value={name}
                autoComplete="off"
              />

              <input
                type="text"
                className={classes.phone}
                name="phone"
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Your phone number*"
                value={phone}
                autoComplete="off"
              />

              <input
                type="mail"
                className={classes.email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email*"
                value={email}
                autoComplete="off"
              />
              <textarea
                className={`${classes.message} ${classes.textarea}`}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message*"
                value={message}
              />
              <button className={classes.buttonContact} type="submit">
                Envoyer votre message
              </button>
            </div>
          </form>
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPCHA}
          >
            <GoogleReCaptcha onVerify={console.log("test")} />
          </GoogleReCaptchaProvider>
        </header>
      </div>
    </div>
  );
};

export default ContactByMail;
/* 


 */
