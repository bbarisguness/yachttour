import { useRouter } from "next/router";
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";
import CategorySearch from "./CategorySearch"
import { useEffect, useState } from "react";
import DateSearch2 from "./DateSearch2";

const MainFilterSearchBox = ({ tourTypes }) => {
  const [tab, setTab] = useState(1)
  const router = useRouter()
  const query = router.query

  useEffect(() => {
    const object = {
      l: '',
      p: 1,
      tourType: '',
      checkIn: `${String(new Date().getDate()).padStart(2, '0')}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${new Date().getFullYear()}`,
      checkOut: `${String(new Date(Date.now() + 86400000).getDate()).padStart(2, '0')}-${String(new Date(Date.now() + 86400000).getMonth() + 1).padStart(2, '0')}-${new Date(Date.now() + 86400000).getFullYear()}`
    }
    localStorage.setItem('i', JSON.stringify(object));
  }, [])

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('i')) || '';
    const object = {
      l: a.l,
      p: a.p,
      tourType: tab,
      checkIn: a.checkIn,
      checkOut: a.checkOut,
    }
    localStorage.setItem('i', JSON.stringify(object));
  }, [tab])

  function searchHandle() {
    const a = JSON.parse(localStorage.getItem('i')) || '';
    const newQuery = {
      ...query,
      dest: a.l,
      tourType: a.tourType,
    }

    if (tab === 1) {
      if (a.checkIn && a.checkOut && a.checkIn !== a.checkOut) {
        newQuery.checkIn = a.checkIn
        newQuery.checkOut = a.checkOut
      } else {
        alert('CheckIn Checkout required')
        return
      }
    } else {
      if (a.checkIn) {
        newQuery.checkIn = a.checkIn
      } else {
        alert('CheckIn required')
        return
      }
    }

    if (a.p == "") {
    }
    else if (a.p <= 5) {
      newQuery.e = "0-5"
    }
    else if (a.p <= 10) {
      newQuery.e = "5-10"
    }
    else if (a.p <= 20) {
      newQuery.e = '10-20'
    }
    else if (a.p > 20) {
      newQuery.e = '20'
    }
    router.replace({ pathname: '/tours', query: newQuery })
  }

  return (
    <>
      <div className="position-relative mt-30 md:mt-20 js-tabs-content">
        <div style={{ bottom: '-5px' }} className="tabs__controls d-flex items-center js-tabs-controls">
          {
            tourTypes?.data?.map((itm, i) => {
              return (
                <div key={i}>
                  <button onClick={() => setTab(itm?.id)} style={{ backgroundColor: tab === itm?.id ? 'white' : 'transparent', color: tab === itm?.id ? '#051036' : '#FFFFFF' }} className={`${tab === itm?.id ? '' : 'tabs__button'} px-30 py-20 rounded-4 fw-600 js-tabs-button`}>
                    <i style={{ bottom: '-3px', position: 'relative' }} className={`${itm?.attributes?.icon} text-20 mr-10 md:d-none`}></i>
                    {itm?.attributes?.name}
                  </button>
                </div>
              )
            })
          }
        </div>

        <div className="mainSearch -w-900 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20">
          <div className="button-grid items-center">
            <LocationSearch />
            {/* End Location */}

            {/* <div className="searchMenu-date px-30 lg:py-0 lg:px-0 js-form-dd js-calendar">
              <div>
                <CategorySearch />
              </div>
            </div> */}
            <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">
              <div>
                <h4 className="text-15 fw-500 ls-2 lh-16">
                  {
                    tab === 1 ?
                      "Check in - Check out" :
                      "Check in"
                  }
                </h4>
                {
                  tab === 1 ?
                    <DateSearch />
                    : <DateSearch2 />
                }
              </div>
            </div>
            {/* End check-in-out */}

            <GuestSearch />
            {/* End guest */}

            <div className="button-item">
              <button
                className="mainSearch__submit button -dark-1 h-60 px-35 col-12 bg-blue-1 text-white"
                onClick={() => searchHandle()}
              >
                <i className="icon-search text-20 mr-10" />
                Search
              </button>
            </div>
            {/* End search button_item */}
          </div>
        </div>
        {/* End .mainSearch */}
      </div>
      {/* End serarchbox tab-content */}
    </>
  );
};

export default MainFilterSearchBox;
