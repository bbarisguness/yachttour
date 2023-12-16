import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import toursData from "../../../data/tours";
import isTextMatched from "../../../utils/isTextMatched";

const TourProperties = ({ data }) => {
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
            href={`/destinations/${item?.attributes?.destinations?.data[0]?.attributes?.slug}/${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes?.slug}`}
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
                      {item?.attributes?.images?.data?.map((slide, i) => (
                        <SwiperSlide key={i}>
                          {/* <Image
                            width={300}
                            height={300}
                            className={`rounded-4 col-12 js-lazy`}
                            style={{ height: '100%' }}
                            src={`${"http://3.74.191.230:1337"}${slide?.attributes?.formats?.medium?.url}`}
                            alt="image"
                          /> */}
                          <img style={{ height: '100%' }} width={800} height={800} className="rounded-4 col-12 js-lazy" src={`${'http://3.74.191.230:1337'}${slide?.attributes?.formats?.large?.url}`} alt="image" />
                        </SwiperSlide>
                      ))}
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
              <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                <span>{item?.attributes?.title}</span>
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {item?.attributes?.destinations?.data[0]?.attributes?.name} {item?.attributes?.destinations?.data[1]?.attributes?.name}
              </p>

              <div className="row justify-between items-center pt-15">
                {/* <div className="col-auto">
                  <div className="d-flex items-center">
                    <div className="text-14 text-light-1">
                      3025 reviews
                    </div>
                  </div>
                </div> */}
                <div className="col-auto">
                  <div className="text-14 text-light-1">
                    <span className="text-16 fw-500 text-dark-1">
                      $ {item?.attributes?.price}
                    </span>
                  </div>
                </div>
                <div>
                  {item?.attributes?.shortText}
                </div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default TourProperties;
