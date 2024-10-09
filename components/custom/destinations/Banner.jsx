import { useEffect, useState } from "react";

const Banner = ({ data }) => {
  const [loading, setLoading] = useState(true)
  const [mobile, setMobile] = useState(false)


  useEffect(() => {
    const changePhoto = () => {
      if (window.innerWidth > 980) {
        setMobile(false);
      } else {
        setMobile(true);
      }
    };
    changePhoto()
    setLoading(false)
    window.addEventListener("resize", changePhoto);
    return () => {
      window.removeEventListener('resize', changePhoto)
    }
  }, []);

  return (
    <div className="col-12">
      <div className="relative d-flex">
        {
          !loading &&
          <img
            src={`${"http://3.74.191.230:1337"}${mobile ? data?.data[0]?.attributes?.image?.data[0]?.attributes?.formats?.medium?.url : data?.data[0]?.attributes?.image?.data[0]?.attributes?.formats?.large?.url}`}
            alt="image"
            className="col-12 rounded-4"
            style={{ minHeight: " 300px", maxHeight: '600px' }}
          />
        }
        <div className="absolute z-2 px-50 py-60 md:py-20 md:px-30">
          <h1 className="text-50 fw-600 text-white lg:text-40 md:text-30">
            {data?.data[0]?.attributes?.destinationTitle} {data?.data[0]?.attributes?.name}
          </h1>
          <div className="text-white">
            {data?.data[0]?.attributes?.shortText}
          </div>
        </div>
        {/* <div className="absolute d-flex justify-end items-end col-12 h-full z-1 px-10 py-10">
          <button className="button -md -blue-1 bg-white text-dark-1 text-14 fw-500">
            See All 90 Photos
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
