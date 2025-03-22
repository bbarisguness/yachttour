import FilterBox from "../../components/hotel-single/filter-box";

const SidebarRight = ({ data }) => {
  return (
    <div className="ml-50 lg:ml-0">
      <div className="px-30 py-30 border-light rounded-4 shadow-4">
        <div className="d-flex items-center justify-between">
          <div>
            <span className="text-20 fw-500">€{data?.data[0]?.attributes?.price}</span>
            {/* <span className="text-14 text-light-1 ml-5">for</span> */}
            <span style={{ position: 'relative', top: '-1px' }} className="fw-400 text-15"> {" / "} {data?.data[0]?.attributes?.private ? data?.data[0]?.attributes?.reservationType === 'daily' ? "daily" : data?.data[0]?.attributes?.reservationType === 'hourly' ? "hourly" : "" : 'per person'}</span>
          </div>
          <div className="d-flex items-center">
            <div className="text-14 text-right mr-10">
              <div className="lh-15 fw-500">Exceptional</div>
              <div className="lh-15 text-light-1">
                3254 reviews
              </div>
            </div>
            <div className="size-40 flex-center bg-blue-1 rounded-4">
              <div className="text-14 fw-600 text-white">4.5</div>
            </div>
          </div>
        </div>
        {/* End d-flex */}

        <div className="row y-gap-20 pt-30">
          <FilterBox data={data} />
        </div>
      </div>
      {/* End px-30 FilterBox */}
    </div>
  );
};

export default SidebarRight;
