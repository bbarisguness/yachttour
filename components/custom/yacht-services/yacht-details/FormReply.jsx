import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { postYachtServiceComment } from "../../../../services/yachtServiceComment";

export default function FormReply({ dataId }) {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')

  const [verify, setVerify] = useState(false)

  const validateEmailRegex = /^\S+@\S+\.\S+$/;

  function changeCaptcha() {
    setVerify(true)
  }

  const data = {
    longText: comment,
    shortText: text,
    email: email,
    name: name,
    surname: surname,
    yacht_service: dataId
  }

  function postComment(e) {
    e.preventDefault()
    if (verify) {
      if (name && surname && text && email && comment) {
        if (validateEmailRegex.test(email)) {
          postYachtServiceComment({ data }).then((res) => {
            window.location.reload()
          })
        }
      }
    }
  }
  return (
    <form className="row y-gap-30 pt-40">
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
          <input onChange={(e) => setText(e.target.value)} type="text" required />
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
          <textarea onChange={(e) => setComment(e.target.value)} required rows={6} defaultValue={""} />
          <label className="lh-1 text-16 text-light-1">
            Write Your Comment
          </label>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12">
        <ReCAPTCHA
          sitekey="6Lcoq2grAAAAAA2sM63C-ziDjMVcUNzij_df_tIg"
          onChange={() => changeCaptcha()}
        />
      </div>

      <div className="col-auto">
        <button
          type="submit"
          onClick={(e) => postComment(e)}
          href="#"
          className="button -md -dark-1 bg-blue-1 text-white"
        >
          Post Comment <div className="icon-arrow-top-right ml-15" />
        </button>
      </div>
      {/* End .col */}
    </form>
  )
}
