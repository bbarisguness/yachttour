import { useEffect, useState } from "react";

const IntroTown = ({ data }) => {
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
    <>
      <div className="col-xl-8">
        <p style={{ whiteSpace: 'pre-line' }} className="text-15 text-dark-1">
          {data?.data[0]?.attributes?.longDescription}
        </p>
      </div>
      {/* End .col */}

      <div className="col-xl-4">
        <div className="relative d-flex ml-35 xl:ml-0">
          {
            !loading &&
            <img
              src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${mobile ? data?.data[0]?.attributes?.map?.data?.attributes?.formats?.medium?.url : data?.data[0]?.attributes?.map?.data?.attributes?.url}`}
              alt="image"
              className="col-12 rounded-4"
            />
          }
          {/* <div className="absolute d-flex justify-center items-end col-12 h-full z-1 px-35 py-20">
            <button className="button h-50 px-25 -blue-1 bg-white text-dark-1 text-14 fw-500 col-12">
              <i className="icon-eye text-18 mr-10" />
              See popular activities on the map
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default IntroTown;
