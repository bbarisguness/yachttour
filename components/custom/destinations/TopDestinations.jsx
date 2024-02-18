import Link from "next/link";

const TopDestinations = ({ home, data }) => {
  function checkListCount() {
    if (home) {
      return 6
    }
    else {
      return data?.length
    }
  }
  return (
    <>
      {data?.data.slice(0, checkListCount()).map((item, index) => (
        <div
          className={home ? `${(index + 1) == 1 && 'col-xl-6 col-md-4 col-sm-6'} ${(index + 1) == 2 && 'col-xl-6 col-md-4 col-sm-6'} ${(index + 1) !== 1 && 'col-xl-3 col-md-4 col-sm-6'} ${(index + 1) !== 2 && 'col-xl-3 col-md-4 col-sm-6'}` : `col-xl-4 col-md-4 col-sm-6`}
          key={item.id}
          data-aos="fade"
          data-aos-delay={(index + 1) * 100}
        >
          <Link
            href={`/${item.attributes.slug}`}
            className="citiesCard -type-3 d-block h-full rounded-4 "
          >
            <div className="citiesCard__image ratio ratio-1:1">
              <img className="col-12 js-lazy" src={`${"http://3.74.191.230:1337"}${item?.attributes?.image?.data[0]?.attributes?.formats?.large?.url}`} alt="image" />
            </div>
            <div className="citiesCard__content px-30 py-30">
              <h4 className="text-26 fw-600 text-white text-capitalize">
                {item.attributes?.name}
              </h4>
              <div className="text-15 text-white">
                {item?.attributes?.tours?.data?.length} tour
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};



export default TopDestinations;
