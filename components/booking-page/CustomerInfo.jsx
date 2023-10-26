import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";
import { useEffect, useState } from "react";

const CustomerInfo = ({ dataa, a }) => {
  const [b, setB] = useState()
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')

  useEffect(() => {
    setB(JSON.parse(localStorage.getItem('a')))

  }, [])

  useEffect(() => {
    localStorage.setItem('a', JSON.stringify({ n: b?.n, s: b?.s, e: b?.e, p: b?.p, t: b?.t }));
  }, [b])

  useEffect(() => {
    if (name || surname || email || phone || note) {
      localStorage.setItem('a', JSON.stringify({ n: name, s: surname, e: email, p: phone, t: note }));
    }
  }, [name, surname, email, phone, note])


  return (
    <>
      <div className="col-xl-7 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 text-15 bg-blue-1-05">
          Sign in to book with your saved details or{" "}
          <Link href="/others-pages/signup" className="text-blue-1 fw-500">
            register
          </Link>{" "}
          to manage your bookings on the go!
        </div>
        {/* End register notify */}

        <h2 className="text-22 fw-500 mt-40 md:mt-24">
          Let us know who you are
        </h2>

        <div className="row x-gap-20 y-gap-20 pt-20">
          <div className="col-md-6">
            <div className="form-input ">
              <input onChange={(e) => setName(e.target.value)} type="text" required />
              <label className="lh-1 text-16 text-light-1">Name</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-input ">
              <input onChange={(e) => setSurname(e.target.value)} type="text" required />
              <label className="lh-1 text-16 text-light-1">Surname</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input onChange={(e) => setEmail(e.target.value)} type="text" required />
              <label className="lh-1 text-16 text-light-1">Email</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input onChange={(e) => setPhone(e.target.value)} type="text" required />
              <label className="lh-1 text-16 text-light-1">Phone Number</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <textarea onChange={(e) => setNote(e.target.value)} required rows={6} defaultValue={""} />
              <label className="lh-1 text-16 text-light-1">
                Special Requests
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div className="text-14 text-light-1">
                  By proceeding with this booking, I agree to GoTrip Terms of
                  Use and Privacy Policy.
                </div>
              </div>
              {/* End col-12 */}
            </div>
          </div>
          {/* End col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col-xl-7 */}

      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          <BookingDetails a={a} dataa={dataa} />
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default CustomerInfo;
