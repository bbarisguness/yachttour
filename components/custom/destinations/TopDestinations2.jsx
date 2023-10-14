import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { destinations4 } from "../../../data/desinations";
import Image from "next/image";

const TopDestinations2 = ({ data }) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        className="overflow-visible"
        modules={[Navigation]}
        navigation={{
          nextEl: ".js-top-desti2-next_active",
          prevEl: ".js-top-desti2-prev_active",
        }}
        breakpoints={{
          540: {
            slidesPerView: data?.data?.length > 2 ? 2 : data?.data?.length,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: data?.data?.length > 2 ? 2 : data?.data?.length,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: data?.data?.length > 3 ? 3 : data?.data?.length,
          },
          1200: {
            slidesPerView: data?.data?.length > 6 ? 6 : data?.data?.length,
          },
        }}
      >
        {data?.data?.map((item, index) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/destinations/${item?.attributes?.slug}`}
              className="citiesCard -type-2"
              data-aos="fade"
              data-aos-delay={index * 100}
            >
              <div className="citiesCard__image rounded-4 ratio ratio-1:1">
                <Image
                  width={191}
                  height={191}
                  className="img-ratio rounded-4 js-lazy"
                  src={`${`http://3.74.191.230:1337`}${item?.attributes?.image?.data[0].attributes?.formats?.medium?.url}`}
                  alt="image"
                />
              </div>
              <div className="citiesCard__content mt-10">
                <h4 className="text-18 lh-13 fw-500 text-dark-1 text-capitalize">
                  {item?.attributes?.name}
                </h4>
                <div className="text-14 text-light-1">
                  {item?.attributes?.tours?.data?.length} tour
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Start naviation button for next prev slide */}
      <button className="section-slider-nav -prev flex-center bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none  js-top-desti2-prev_active">
        <i className="icon icon-chevron-left text-12" />
      </button>
      <button className="section-slider-nav -next flex-center bg-white text-dark-1 size-40 rounded-full shadow-1 sm:d-none  js-top-desti2-next_active">
        <i className="icon icon-chevron-right text-12" />
      </button>
      {/* End navigation button for next prev  slide */}
    </>
  );
};

export default TopDestinations2;
