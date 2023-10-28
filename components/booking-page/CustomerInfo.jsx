import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";
import { useEffect, useState } from "react";

const CustomerInfo = ({ dataa, rezOpt, userInfo, setUserInfo }) => {
  const [bVal, setBVal] = useState('')

  useEffect(() => {
    setBVal(JSON.parse(localStorage.getItem('bVal')))
  }, [])

  const [name, setName] = useState('')
  const [surname, setSurname] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [note, setNote] = useState()

  useEffect(() => {
    if (bVal) {
      setName(bVal.name)
      setSurname(bVal.surname)
      setEmail(bVal.email)
      setPhone(bVal.phone)
      setNote(bVal.note)
    }
  }, [bVal])


  useEffect(() => {
    setUserInfo({
      ...userInfo,
      name: name,
      surname: surname,
      email: email,
      phone: phone,
      note: note
    })
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
              <input defaultValue={bVal?.name} onChange={(e) => setName(e.target.value)} type="text" required />
              <label className="lh-1 text-16 text-light-1">Name *</label>
            </div>
          </div>

          <div className="col-md-6">
            <div className="form-input ">
              <input defaultValue={bVal?.surname} onChange={(e) => setSurname(e.target.value)} type="text" required />
              <label className="lh-1 text-16 text-light-1">Surname *</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input defaultValue={bVal?.email} onChange={(e) => setEmail(e.target.value)} type="text" required />
              <label className="lh-1 text-16 text-light-1">Email *</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input defaultValue={bVal?.phone} onChange={(e) => setPhone(e.target.value)} type="text" required />
              <label className="lh-1 text-16 text-light-1">Phone Number *</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <textarea defaultValue={bVal?.note} onChange={(e) => setNote(e.target.value)} required rows={6} />
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
          <BookingDetails rezOpt={rezOpt} dataa={dataa} />
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default CustomerInfo;
