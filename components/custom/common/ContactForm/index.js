import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { postMessage } from "../../../../services/message";

const ContactForm = () => {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [captchaState, setCaptchaState] = useState(false)
  const [error, setError] = useState(false)
  function onChange() {
    setCaptchaState(true)
    setError(false)
  }

  const data = {
    fullName: fullName,
    email: email,
    subject: subject,
    message: message
  }

  const handleSubmit = (event) => {
    if (captchaState) {
      if (fullName && email && subject && message) {
        setError(false)
        postMessage({ data }).then((res) => {
          window.location.reload()
        })
      }
    } else {
      setError(true)
    }
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <div className="form-input">
          <input onChange={(e) => setFullName(e.target.value)} type="text" id="name" required />
          <label htmlFor="name" className="lh-1 text-16 text-light-1">
            Full Name
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input onChange={(e) => setEmail(e.target.value)} type="email" id="email" required />
          <label htmlFor="email" className="lh-1 text-16 text-light-1">
            Email
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input onChange={(e) => setSubject(e.target.value)} type="text" id="subject" required />
          <label htmlFor="subject" className="lh-1 text-16 text-light-1">
            Subject
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <textarea onChange={(e) => setMessage(e.target.value)} id="message" required rows="4"></textarea>
          <label htmlFor="message" className="lh-1 text-16 text-light-1">
            Your Message
          </label>
        </div>
      </div>
      <div className="col-12">
        <div style={{ display: 'block' }} className="form-input">
          {
            error &&
            <div className="text-14 text-danger">Please verify!</div>
          }
          <div>
            <ReCAPTCHA
              sitekey="6Lcoq2grAAAAAA2sM63C-ziDjMVcUNzij_df_tIg"
              onChange={onChange}
            />
          </div>
        </div>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
        >
          Send Message <div className="icon-arrow-top-right ml-15"></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
