import { useRouter } from "next/router";
import DateSearch from "./DateSearch";
import GuestSearch from "./GuestSearch";
import LocationSearch from "./LocationSearch";
import CategorySearch from "./CategorySearch"
import { useEffect } from "react";

const MainFilterSearchBox = () => {
  const router = useRouter()
  const query = router.query

  useEffect(() => {
    const object = {
      l: '',
      c: '',
      p: ''
    }
    localStorage.setItem('i', JSON.stringify(object));
  }, [])

  function searchHandle() {
    const a = JSON.parse(localStorage.getItem('i')) || '';
    if (a.p == "") {
      router.replace({ pathname: '/tours', query: { ...query, dest: a.l, cat: a.c } })
    }
    else if (a.p <= 5) {
      router.replace({ pathname: '/tours', query: { ...query, dest: a.l, cat: a.c, e: '0-5' } })
    }
    else if (a.p <= 10) {
      router.replace({ pathname: '/tours', query: { ...query, dest: a.l, cat: a.c, e: '5-10' } })
    }
    else if (a.p <= 20) {
      router.replace({ pathname: '/tours', query: { ...query, dest: a.l, cat: a.c, e: '10-20' } })
    }
    else if (a.p > 20) {
      router.replace({ pathname: '/tours', query: { ...query, dest: a.l, cat: a.c, e: '20' } })
    }
  }
  return (
    <>
      <div className="position-relative mt-30 md:mt-20 js-tabs-content">
        <div className="mainSearch -w-900 bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-100">
          <div className="button-grid items-center">
            <LocationSearch />
            {/* End Location */}

            <div className="searchMenu-date px-30 lg:py-0 lg:px-0 js-form-dd js-calendar">
              <div>
                <CategorySearch />
              </div>
            </div>
            {/* End check-in-out */}

            <GuestSearch />
            {/* End guest */}

            <div className="button-item">
              <button
                className="mainSearch__submit button -dark-1 h-60 px-35 col-12 rounded-100 bg-blue-1 text-white"
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
