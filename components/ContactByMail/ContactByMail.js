import React, { useState, useEffect } from "react";
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
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (window.localStorage.getItem("sendedMessage") !== null) {
      timer20();
    } else {
      setShowButton(true);
    }
  }, []);

  const waitBeforeReSendMessage = () => {
    setShowButton(false);
    window.localStorage.setItem("sendedMessage", "sended");
    timer20();
    return () => clearTimeout(waitBeforeReSendMessage);
  };

  const timer20 = () => {
    console.log("timer commencé");
    setTimeout(() => {
      console.log("timer fini");
      window.localStorage.removeItem("sendedMessage");
      setShowButton(true);
    }, 20000);
    return () => clearTimeout(timer);
  };

  const handleClick = (e) => {
    e.preventDefault();

    if (name && message && phone && email && isVerified) {
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
      waitBeforeReSendMessage();
    }
  };

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
              {showButton ? (
                <button className={classes.buttonContact} type="submit">
                  Send your message
                </button>
              ) : (
                <button className={classes.buttonContact}>
                  Thanks for your message !
                </button>
              )}
            </div>
          </form>
          {showButton}
          <GoogleReCaptchaProvider
            reCaptchaKey={process.env.NEXT_PUBLIC_RECAPCHA}
          >
            <GoogleReCaptcha
              onVerify={() => {
                setIsverified(true);
              }}
            />
          </GoogleReCaptchaProvider>
        </header>
      </div>
    </div>
  );
};

export default ContactByMail;
/* 


 */
