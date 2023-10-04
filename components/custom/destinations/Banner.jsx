const Banner = ({ data }) => {
  return (
    <div className="col-12">
      <div className="relative d-flex">
        <img
          src={`${"http://3.74.191.230:1337"}${data?.data[0]?.attributes.image?.data[0].attributes.formats.large.url}`}
          alt="image"
          className="col-12 rounded-4"
          style={{ minHeight: " 300px", maxHeight: '600px' }}
        />
        <div className="absolute z-2 px-50 py-60 md:py-20 md:px-30">
          <h1 className="text-50 fw-600 text-white lg:text-40 md:text-30">
            Explore {data?.data[0]?.attributes.name}
          </h1>
          <div className="text-white">
            Explore deals, travel guides and things to do in {data?.data[0]?.attributes.name}
          </div>
        </div>
        <div className="absolute d-flex justify-end items-end col-12 h-full z-1 px-10 py-10">
          <button className="button -md -blue-1 bg-white text-dark-1 text-14 fw-500">
            See All 90 Photos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
