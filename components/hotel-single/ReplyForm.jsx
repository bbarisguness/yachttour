import ReCAPTCHA from "react-google-recaptcha";
import { postComment } from "../../services/comment";
import { useState } from "react";

const ReplyForm = ({ tourDetail }) => {
  const [verify, setVerify] = useState(false)
  const [shortText, setShortText] = useState('')
  const [email, setEmail] = useState('')
  const [longText, setLongText] = useState('')
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')

  const validateEmailRegex = /^\S+@\S+\.\S+$/;

  const data = {
    longText: longText,
    shortText: shortText,
    email: email,
    name: name,
    surname: surname,
    tour: tourDetail?.data[0]?.id
  }

  function postHandle(e) {
    e.preventDefault()
    if (verify) {
      if (validateEmailRegex.test(email)) {
        postComment({ data }).then((res) => {
          window.location.reload()
        })
      }
    }
  }

  function verifyHandle() {
    setVerify(true)
  }
  return (
    <form className="row y-gap-30 pt-20">
      <div className="col-xl-6">
        <div className="form-input ">
          <input onChange={(e) => setName(e.target.value)} type="text" required />
          <label className="lh-1 text-16 text-light-1">Name</label>
        </div>
      </div>

      <div className="col-xl-6">
        <div className="form-input ">
          <input onChange={(e) => setSurname(e.target.value)} type="text" required />
          <label className="lh-1 text-16 text-light-1">Surname</label>
        </div>
      </div>

      <div className="col-xl-6">
        <div className="form-input ">
          <input onChange={(e) => setShortText(e.target.value)} type="text" required />
          <label className="lh-1 text-16 text-light-1">Text</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-xl-6">
        <div className="form-input ">
          <input onChange={(e) => setEmail(e.target.value)} type="text" required />
          <label className="lh-1 text-16 text-light-1">Email</label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div className="form-input ">
          <textarea onChange={(e) => setLongText(e.target.value)} required rows={4} defaultValue={""} />
          <label className="lh-1 text-16 text-light-1">
            Write Your Comment
          </label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <div>
          <ReCAPTCHA
            sitekey="6Lcoq2grAAAAAA2sM63C-ziDjMVcUNzij_df_tIg"
            onChange={() => verifyHandle()}
          />
        </div>
      </div>

      <div className="col-auto">
        <button
          type="submit"
          className="button -md -dark-1 bg-blue-1 text-white"
          onClick={(e) => postHandle(e)}
        >
          Post Comment <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  );
};

export default ReplyForm;
