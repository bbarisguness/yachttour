import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";
import { useRouter } from "next/router";
import HourSearch from "./HourSearch";
import { useEffect, useState } from "react";
import PortSearch from "./PortSearch";

const FilterBox = ({ data }) => {
  const router = useRouter()
  const [a, setA] = useState()
  const [e, setE] = useState(false)
  const [c, setC] = useState(false)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (ready) {
      if (a?.t !== null && a?.l !== null) {
        setReady(false)
        router.push('/booking-page')
        setE(false)
      } else {
        if (a?.t == null && a?.l == null) {
          setE(true)
          setC(true)
        } else if (a?.l == null) {
          setC(true)
          setE(false)
        } else if (a?.t == null) {
          setE(true)
          setC(false)
        }
        setReady(false)
      }
    }
  }, [ready])

  function checkHandle() {
    setA(JSON.parse(localStorage.getItem('s')))
    localStorage.setItem('item', JSON.stringify(data.data[0]));
    setReady(true)
  }

  return (
    <>
      <div className="col-12">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
          <div>
            <h4 className="text-15 fw-500 ls-2 lh-16">Check in</h4>
            <DateSearch />
          </div>
        </div>
        {/* End check-in-out */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        {e && <div className="text-danger fw-400 text-14">Please select time</div>}
        <HourSearch data={data} />
        {/* End guest */}
      </div>

      <div className="col-12">
        {c && <div className="text-danger fw-400 text-14">Please select port</div>}
        <PortSearch data={data} />
        {/* End guest */}
      </div>

      <div className="col-12">
        <GuestSearch />
        {/* End guest */}
      </div>
      {/* End .col-12 */}

      <div className="col-12">
        <div className="button-item h-full">
          <button onClick={() => checkHandle()} className="button -dark-1 px-35 h-60 col-12 bg-blue-1 text-white">
            Check Out
          </button>
        </div>
        {/* End search button_item */}
      </div>
      {/* End .col-12 */}
    </>
  );
};

export default FilterBox;
