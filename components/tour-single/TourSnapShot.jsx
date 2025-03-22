const TourSnapShot = ({ data }) => {
  return (
    <div className="row y-gap-30 justify-between pt-20">
      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-clock text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Duration:
            <br /> {data?.data[0]?.attributes?.duration}
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-customer text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Group size:
            <br /> {data?.data[0]?.attributes?.person}
          </div>
        </div>
      </div>
      {/* End .col */}

      {
        data?.data[0]?.attributes?.tourSnapshot3 &&
        <div className="col-md-auto col-6">
          <div className="d-flex">
            <i className="icon-check text-22 text-blue-1 mr-10"></i>
            <div className="text-15 lh-15">
              {data?.data[0]?.attributes?.tourSnapshot3?.split(" ").length >= 3 ? (
                <>
                  {data?.data[0]?.attributes?.tourSnapshot3?.split(" ").slice(0, 2).join(" ")}
                  <br />
                  {data?.data[0]?.attributes?.tourSnapshot3?.split(" ").slice(2).join(" ")}
                </>
              ) : (
                data?.data[0]?.attributes?.tourSnapshot3
              )}
            </div>
          </div>
        </div>
      }
      {/* End .col */}

      <div className="col-md-auto col-6">
        <div className="d-flex">
          <i className="icon-access-denied text-22 text-blue-1 mr-10"></i>
          <div className="text-15 lh-15">
            Free cancellation <br />
            <a href="#cancellation" className="text-blue-1 underline">
              Learn more
            </a>
          </div>
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default TourSnapShot;
