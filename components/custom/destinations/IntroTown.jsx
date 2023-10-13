const IntroTown = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="col-xl-8">
        <p style={{ whiteSpace: 'pre-line' }} className="text-15 text-dark-1">
          {data?.data[0]?.attributes.longDescription}
        </p>
      </div>
      {/* End .col */}

      <div className="col-xl-4">
        <div className="relative d-flex ml-35 xl:ml-0">
          <img
            src={`${`http://3.74.191.230:1337`}${data?.data[0].attributes?.map?.data?.attributes?.url}`}
            alt="image"
            className="col-12 rounded-4"
          />
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
