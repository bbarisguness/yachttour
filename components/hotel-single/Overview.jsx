import Specifications from '../car-single/Specifications'
import Itinerary from '../../components/tour-single/itinerary'

const Overview = ({ data }) => {
  return (
    <>
      <h3 className="text-22 fw-500 pt-40 border-top-light">Overview</h3>
      <p style={{ whiteSpace: 'pre-line' }} className="text-dark-1 text-15 mt-20">
        {data?.data[0]?.attributes?.longText}
      </p>
      {
        data?.data[0]?.attributes?.feature2Title &&
        <>
          <h3 className="text-22 fw-500 pt-40">{data?.data[0]?.attributes?.feature2Title}</h3>
          <p style={{ whiteSpace: 'pre-line' }} className="text-dark-1 text-15 mt-20">
            {data?.data[0]?.attributes?.feature2Desc}
          </p>
        </>
      }
      <div className="pt-40  mb-30">
        <div className="col-auto">
          <h5 className="d-flex items-center text-16 fw-500">
            <i className="icon-nearby text-20 mr-10" />
            Departs from:
          </h5>
          <ul className="list-disc text-15 mt-10">
            {
              data?.data[0]?.attributes?.ports?.data.map((item, i) => {
                return (
                  <li key={i}>{item?.attributes?.name}</li>
                )
              })
            }
          </ul>
        </div>
      </div>

      <div id="itinerary" className="col-12">
        <h3 className="text-22 fw-500 mb-20 border-top-light pt-40">Itinerary</h3>
        <Itinerary data={data} />
      </div>

      {/* <div>
        <h3 className='text-22 fw-500 pt-30 mt-40 border-top-light'>Specifications</h3>
        <Specifications data={data} />
      </div> */}
    </>
  );
};

export default Overview;
