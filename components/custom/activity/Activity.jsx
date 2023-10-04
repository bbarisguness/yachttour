import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import activityData from "../../../data/activity";
import isTextMatched from "../../../utils/isTextMatched";

const Activity = ({data}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
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
  function Arrow(props) {
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
        {data.data.slice(0, 4).map((item,index) => (
          <div
            key={item?.id}
            data-aos="fade"
            data-aos-delay={index * 100}
          >
            <Link
              href={`/destinations/${item.attributes.destinations.data[0].attributes.slug}#${item?.attributes.categories.data[0].attributes.slug}/${item.attributes.slug}`}
              className="activityCard -type-1 rounded-4 hover-inside-slider"
            >
              <div className="activityCard__image position-relative">
                <div className="inside-slider">
                  <Slider
                    {...itemSettings}
                    arrows={true}
                    nextArrow={<Arrow type="next" />}
                    prevArrow={<Arrow type="prev" />}
                  >
                    {item?.attributes.images.data.map((slide, i) => (
                      <div className="cardImage ratio ratio-1:1" key={i}>
                        <div className="cardImage__content ">
                          <Image
                            width={300}
                            height={300}
                            className="col-12 js-lazy"
                            src={`${`http://3.74.191.230:1337`}${slide.attributes.formats.medium.url}`}
                            alt="image"
                          />
                        </div>
                      </div>
                    ))}
                  </Slider>

                  {/* <div className="cardImage__wishlist">
                    <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                      <i className="icon-heart text-12" />
                    </button>
                  </div> */}

                  <div className="cardImage__leftBadge">
                    <div
                      className={`py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase ${isTextMatched(item?.tag, "likely to sell out*")
                        ? "bg-dark-1 text-white"
                        : ""
                        } ${isTextMatched(item?.tag, "best seller")
                          ? "bg-blue-1 text-white"
                          : ""
                        }  ${isTextMatched(item?.tag, "top rated")
                          ? "bg-yellow-1 text-dark-1"
                          : ""
                        }`}
                    >
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* End .tourCard__image */}

              <div className="activityCard__content mt-10">
                <div className="text-14 lh-14 text-light-1 mb-5">
                  3+ hours
                </div>
                <h4 className="activityCard__title lh-16 fw-500 text-dark-1 text-18">
                  <span>{item?.attributes.title}</span>
                </h4>
                <p className="text-light-1 text-14 lh-14 mt-5">
                  {item?.attributes.destinations.data[0].attributes.name} {item?.attributes.destinations.data[1].attributes.name}
                </p>

                <div className="row justify-between items-center pt-10">
                  <div className="col-auto">
                    <div className="d-flex items-center">
                      <div className="icon-star text-yellow-1 text-10 mr-5" />

                      <div className="text-14 text-light-1">
                        <span className="text-15 text-dark-1 fw-500">
                          4.5
                        </span>{" "}
                        3525 reviews
                      </div>
                    </div>
                  </div>
                  {/* End .col-auto */}

                  <div className="col-auto">
                    <div className="text-14 text-light-1">
                      From{" "}
                      <span className="text-16 fw-500 text-dark-1">
                        US${item?.attributes.price}
                      </span>
                    </div>
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

export default Activity;
