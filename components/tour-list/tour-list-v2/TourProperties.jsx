import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import toursData from "../../../data/tours";
import isTextMatched from "../../../utils/isTextMatched";
import { photoFormatsDetect } from "../../../utils/photoFormatsDetect";
import { extractNumbers } from "../../../utils/extractNumbers";

const TourProperties = ({ data, checkIn = null, checkOut = null }) => {
  function calculateDayDifference(date1, date2) {
    const [day1, month1, year1] = date1.split('-').map(Number);
    const [day2, month2, year2] = date2.split('-').map(Number);

    const d1 = new Date(year1, month1 - 1, day1);
    const d2 = new Date(year2, month2 - 1, day2);

    const diffTime = Math.abs(d2 - d1); // mutlak değer alınır
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // milisaniyeyi güne çevir

    return diffDays;
  }

  const totalDayCalculate = () => {
    if (checkIn && checkOut) {
      return calculateDayDifference(checkIn, checkOut)
    } else {
      return null
    }
  }


  return (
    <>
      {data?.data?.slice(0, 9).map((item, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={index * 100}
        >
          <Link
            rel="nofollow"
            href={`/${item?.attributes?.destinations?.data[0]?.attributes?.slug}/${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes?.slug}`}
            className="tourCard -type-1 rounded-4 position-relative"
          >
            <div className="tourCard__image">
              <div className="cardImage ratio ratio-1:1">
                <div className="cardImage__content">
                  <div style={{ height: '100%' }} className="cardImage-slider rounded-4 overflow-hidden custom_inside-slider">
                    <Swiper
                      className="mySwiper"
                      style={{ height: '100%' }}
                      modules={[Pagination, Navigation]}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                    >
                      {
                        item?.attributes?.images?.data?.map((slide, i) => {
                          if (i < 4) {
                            return (
                              <SwiperSlide key={i}>
                                {/* <Image
                            width={300}
                            height={300}
                            className={`rounded-4 col-12 js-lazy`}
                            style={{ height: '100%' }}
                            src={`${"http://3.74.191.230:1337"}${slide?.attributes?.formats?.medium?.url}`}
                            alt="image"
                          /> */}
                                <img style={{ aspectRatio: '1/1' }} className="rounded-4 col-12 js-lazy" src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${photoFormatsDetect(slide, 'medium')?.url}`} alt="image" />
                              </SwiperSlide>
                            )
                          }
                        })
                      }
                    </Swiper>
                  </div>
                </div>
              </div>

              {/* <div className="cardImage__wishlist">
                <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                  <i className="icon-heart text-12" />
                </button>
              </div> */}

              <div className="cardImage__leftBadge">
                <div
                  className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${item?.attributes?.tag == "blackAttr" ? "bg-dark-1 text-white" : ""} ${item?.attributes?.tag == "brownAttr" ? "bg-brown-1 text-white" : ""} ${item?.attributes?.tag == "blueAttr" ? "bg-blue-1 text-white" : ""
                    }  ${item?.attributes?.tag == "yellowAttr" ? "bg-yellow-1 text-dark-1" : ""}
                    `}
                >
                  {`
                      ${item?.attributes?.tag == "blackAttr" ? "Breakfast included" : ''} ${item?.attributes?.tag == "yellowAttr" ? "Top Rated" : ''} ${item?.attributes?.tag == "blueAttr" ? "Best Seller" : ''} ${item?.attributes?.tag == "brownAttr" ? "-25% Today" : ''}
                      `
                  }
                </div>
              </div>
            </div>
            {/* End .tourCard__image */}

            <div className="tourCard__content mt-10">
              <h4 style={{ display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }} className="tourCard__title text-dark-1 text-18 lh-16 fw-500 text-uppercase">
                <span>{item?.attributes?.title}</span>
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {item?.attributes?.destinations?.data[0]?.attributes?.name} {item?.attributes?.destinations?.data[1]?.attributes?.name}
              </p>

              <div className="row x-gap-20 y-gap-10 items-center pt-10">
                <div className="col-auto">
                  <div className="d-flex items-center text-14 text-dark-1">
                    <i className="icon-bed mr-10"></i>
                    <div className="lh-14">{item?.attributes?.cabin}</div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex items-center text-14 text-dark-1">
                    <i className="icon-yatch mr-10"></i>
                    <div className="lh-14">{item?.attributes?.width} m</div>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="d-flex items-center text-14 text-dark-1">
                    <i className="icon-speedometer mr-10"></i>
                    <div className="lh-14">{item?.attributes?.enginehp} hp</div>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="d-flex items-center text-14 text-dark-1">
                    <i className="icon-calendar-2 mr-10"></i>
                    <div className="lh-14">{item?.attributes?.year}</div>
                  </div>
                </div>
              </div>

              <div className="row justify-between items-center pt-10">
                {/* <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="text-14 text-light-1">
                      3025 reviews
                    </div>
                  </div>
                </div> */}
                <div style={{ width: '100%' }} className="col-auto">
                  <div style={{ display: 'flex', justifyContent: 'space-between' }} className="text-14 text-light-1">
                    <span className="text-16 fw-500 text-dark-1">
                      € {item?.attributes?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span style={{ position: 'relative', top: '-1px' }} className="fw-400 text-15">{item?.attributes?.private ? item?.attributes?.reservationType === 'daily' ? "daily" : item?.attributes?.reservationType === 'hourly' ? extractNumbers(item?.attributes?.duration) : "" : 'per person'}</span>
                    </span>
                    {
                      totalDayCalculate() &&
                      <span style={{ textAlign: 'end' }}> Total € {(item?.attributes?.price * totalDayCalculate()).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} </span>
                    }
                  </div>
                </div>
                {/* <div style={{ display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {item?.attributes?.private === true ? 'Private' : 'Shared'} {","} {item?.attributes?.person} people
                </div> */}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TourProperties;
