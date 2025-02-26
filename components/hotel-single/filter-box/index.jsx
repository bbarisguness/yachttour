import GuestSearch from "./GuestSearch";
import DateSearch from "./DateSearch";
import { useRouter } from "next/router";
import HourSearch from "./HourSearch";
import { useEffect, useState } from "react";
import PortSearch from "./PortSearch";
import StartTimeSearch from "./StartTimeSearch";
import EndTimeSearch from "./EndTimeSearch";
import DateRangeSearch from "./DateRangeSearch";

const FilterBox = ({ data }) => {
  const router = useRouter()
  const [a, setA] = useState()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (ready) {

      if (data?.data[0]?.attributes?.reservationType === "hourly") {
        if (a?.t !== null && a?.l !== null && a?.d && a?.m && a?.y && a?.p && a?.n) {
          setReady(false)
          router.push('/booking-page')
        } else {
          alert('Please fill in the blank fields')
          setReady(false)
        }
      } else {
        if (a?.t !== null && a?.l !== null && a?.et !== null && a?.d !== null && a?.m !== null && a?.n !== null && a?.y !== null && a?.od && a?.om && a?.on && a?.oy) {
          setReady(false)
          router.push('/booking-page')
        } else {
          alert('Please fill in the blank fields')
          setReady(false)
        }
      }

    }
  }, [ready])

  function checkHandle() {
    setA(JSON.parse(localStorage.getItem('s')))
    localStorage.setItem('item', JSON.stringify(data.data[0]));
    setReady(true)
  }

  if (data?.data[0]?.attributes?.reservationType === "hourly") {
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
          <HourSearch data={data} />
          {/* End guest */}
        </div>

        <div className="col-12">
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
              Book Now
            </button>
          </div>
          {/* End search button_item */}
        </div>
        {/* End .col-12 */}
      </>
    )
  } else {
    return (
      <>
        <div className="col-12">
          <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
            <div>
              <h4 className="text-15 fw-500 ls-2 lh-16">Check in / out</h4>
              <DateRangeSearch />
            </div>
          </div>
          {/* End check-in-out */}
        </div>
        {/* End .col-12 */}

        <div className="col-12">
          <StartTimeSearch data={data} />
          {/* End guest */}
        </div>

        <div className="col-12">
          <EndTimeSearch data={data} />
          {/* End guest */}
        </div>

        <div className="col-12">
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
    )
  }
};

export default FilterBox;
