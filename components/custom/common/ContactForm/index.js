import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  const [captchaState, setCaptchaState] = useState(false)
  const [error, setError] = useState(false)
  function onChange() {
    setCaptchaState(true)
    setError(false)
  }

  const handleSubmit = (event) => {
    if (captchaState) {
      setError(false)
      console.log('gönderildi');
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
          <input type="text" id="name" required />
          <label htmlFor="name" className="lh-1 text-16 text-light-1">
            Full Name
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input type="email" id="email" required />
          <label htmlFor="email" className="lh-1 text-16 text-light-1">
            Email
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input type="text" id="subject" required />
          <label htmlFor="subject" className="lh-1 text-16 text-light-1">
            Subject
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <textarea id="message" required rows="4"></textarea>
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
              sitekey="6Lfca5coAAAAAO4t9o2FMb0nXMSlR5KjpUkfCd6Y"
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
