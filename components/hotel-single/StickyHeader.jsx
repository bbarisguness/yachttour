import Link from "next/link";
import { useEffect, useState } from "react";

const StickyHeader = ({ tour }) => {
  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
  }, []);

  return (
    <div className={`singleMenu js-singleMenu ${header ? "-is-active" : ""}`}>
      <div className="singleMenu__content">
        <div className="container">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="singleMenu__links row x-gap-30 y-gap-10">
                <div className="col-auto">
                  <a href="#overview">Overview</a>
                </div>
                <div className="col-auto">
                  <a href="#rooms">Rooms</a>
                </div>
                <div className="col-auto">
                  <a href="#reviews">Reviews</a>
                </div>
                <div className="col-auto">
                  <a href="#facilities">Facilities</a>
                </div>
                <div className="col-auto">
                  <a href="#faq">Faq</a>
                </div>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <div className="row x-gap-15 y-gap-15 items-center">
                <div className="col-auto">
                  <div className="text-14">
                    From{" "}
                    <span className="text-22 text-dark-1 fw-500">
                      US${tour?.data[0]?.attributes?.price}
                    </span>
                  </div>
                </div>
                {/* <div className="col-auto">
                  <Link
                    href="/hotel/booking-page"
                    className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                  >
                    Select Room <div className="icon-arrow-top-right ml-15" />
                  </Link>
                </div> */}
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </div>
      {/* End .singleMenu__content */}
    </div>
  );
};

export default StickyHeader;
