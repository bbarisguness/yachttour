import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { hotelsData } from "../../../data/hotels";
import isTextMatched from "../../../utils/isTextMatched";

const Hotels2 = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: data?.data?.length > 4 ? 4 : data?.data?.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: data?.data?.length > 2 ? 2 : data?.data?.length,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: data?.data?.length > 2 ? 2 : data?.data?.length,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: data?.data?.length > 1 ? 1 : data?.data?.length,
        },
      },
    ],
  };

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
      <Slider {...settings}>
        {data?.data.slice(0, 4).map((item, index) => (
          <div
            className="col-xl-3 col-lg-3 col-sm-6"
            key={item?.id}
            data-aos="fade"
            data-aos-delay={index * 100}
          >
            <Link
              href={`/destinations/${item?.attributes?.destinations?.data[0]?.attributes?.slug}/${item?.attributes?.category?.data?.attributes?.slug}/${item?.attributes?.slug}`}
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
                            width={300}
                            height={300}
                            className="rounded-4 col-12 js-lazy"
                            src={`${`http://3.74.191.230:1337`}${slide?.attributes?.formats?.medium?.url}`}
                            alt="image"
                          /> */}
                                <img width={800} height={800} className="rounded-4 col-12 js-lazy" src={`${'http://3.74.191.230:1337'}${slide?.attributes?.formats?.large?.url}`} alt="image" />
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
                <h4 className="hotelsCard__title text-dark-1 text-18 lh-16 fw-500">
                  <span>{item?.attributes?.title}</span>
                </h4>
                <p className="text-light-1 lh-14 text-14 mt-5">
                  {item?.attributes?.destinations?.data[0]?.attributes?.name} {item?.attributes?.destinations?.data[1]?.attributes?.name}
                </p>
                <div style={{ justifyContent: 'space-between' }} className="d-flex items-center mt-20">
                  {/* <div className="flex-center bg-blue-1 rounded-4 size-30 text-12 fw-600 text-white">
                    4.5
                  </div> */}
                  {/* <div className="text-14 text-dark-1 fw-500 ml-10">
                    Exceptional
                  </div> */}
                  {/* <div className="text-14 text-light-1 ">
                    3256 reviews
                  </div> */}
                  <div className="text-dark-1 fw-500">
                    $ {item?.attributes?.price}
                  </div>
                </div>
                <div className="mt-5">
                  <div className="fw-400">
                    {item?.attributes?.shortText}
                  </div>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Hotels2;
