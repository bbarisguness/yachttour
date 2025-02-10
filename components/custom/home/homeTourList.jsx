import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { hotelsData } from "../../../data/hotels";
import isTextMatched from "../../../utils/isTextMatched";

const HomeTourList = ({ data }) => {
  var itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // custom navigation
  function ArrowSlick(props) {
    let className =
      props.type === "next"
        ? "slick_arrow-between slick_arrow -next arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-next"
        : "slick_arrow-between slick_arrow -prev arrow-md flex-center button -blue-1 bg-white shadow-1 size-30 rounded-full sm:d-none js-prev";
    className += " arrow";
    const char =
      props.type === "next" ? (
        <>
          <i className="icon icon-chevron-right text-12"></i>
        </>
      ) : (
        <>
          <span className="icon icon-chevron-left text-12"></span>
        </>
      );
    return (
      <button className={className} onClick={props.onClick}>
        {char}
      </button>
    );
  }

  return (
    <>
      {data?.data.slice(0, 9).map((item, index) => (
        <div
          className="col-xl-4 col-lg-4 col-sm-4"
          key={item?.id}
          data-aos="fade"
          data-aos-delay={index * 100}
        >
          <Link
            rel="nofollow"
            href={`/${item?.attributes?.destinations?.data[0]?.attributes?.slug}/${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes?.slug}`}
            className="hotelsCard -type-1 hover-inside-slider"
          >
            <div className="hotelsCard__image">
              <div className="cardImage inside-slider">
                <Slider
                  {...itemSettings}
                  arrows={true}
                  nextArrow={<ArrowSlick type="next" />}
                  prevArrow={<ArrowSlick type="prev" />}
                >
                  {
                    item?.attributes?.images?.data.map((slide, i) => {
                      if (i < 4) {
                        return (
                          <div className="cardImage ratio ratio-1:1" key={i}>
                            <div className="cardImage__content ">
                              {/* <Image
                            width={800}
                            height={800}
                            className="rounded-4 col-12 js-lazy"
                            src={`${'http://3.74.191.230:1337'}${slide?.attributes?.url}`}
                            alt="image"
                          /> */}
                              <img style={{ aspectRatio: '1/1' }} className="rounded-4 col-12 js-lazy" src={`${'http://3.74.191.230:1337'}${slide?.attributes?.formats?.medium?.url}`} alt="image" />
                            </div>
                          </div>
                        )
                      }
                    })
                  }
                </Slider>

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
            </div>
            <div className="hotelsCard__content mt-10">
              <h4 style={{ display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }} className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500 text-uppercase">
                <span>{item?.attributes?.title}</span>
              </h4>
              <p className="text-light-1 lh-14 text-14 mt-5">
                {item?.attributes?.destinations?.data[0]?.attributes?.name} {item?.attributes?.destinations?.data[1]?.attributes?.name}
              </p>
              <div style={{ justifyContent: 'space-between' }} className="d-flex items-center mt-20">
                {/* <div className="text-14 text-light-1">
                  3252 reviews
                </div> */}
                <div className="fw-500">
                € {item?.attributes?.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} <span style={{position: 'relative', top: '-1px' }} className="fw-400 text-15">{item?.attributes?.private ? 'daily/hourly' : 'per person'}</span>
                </div>
              </div>
              <div style={{ display: '-webkit-box', WebkitLineClamp: '1', WebkitBoxOrient: 'vertical', overflow: 'hidden', textOverflow: 'ellipsis' }} className="mt-5">
                {item?.attributes?.shortText}
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default HomeTourList;
