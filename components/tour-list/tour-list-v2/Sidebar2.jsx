import CategoryTypes from "../sidebar/CategoryTypes";
import OthersFilter from "../sidebar/OthersFilter";
import Duration from "../sidebar/Duration";
import Languages from "../sidebar/Languages";
import PirceSlider from "../sidebar/PirceSlider";
import MainFilterSearchBox from "./MainFilterSearchBox";
import DestinationTypes from "../sidebar/DestinationTypes";
import PersonTypes from "../sidebar/PersonTypes";
import WidthTypes from "../sidebar/WidthTypes";
import HpTypes from "../sidebar/HpTypes";
import YearSlider from "../sidebar/YearSlider";

const Sidebar2 = () => {
  return (
    <>
      <div className="sidebar__item pb-30 -no-border">
        <h5 className="text-18 fw-500 mb-10">Price</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <PirceSlider />
          </div>
        </div>
      </div>
      {/* End Nightly priceslider */}

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Person</h5>
        <div className="sidebar-checkbox">
          <PersonTypes />
        </div>
        {/* End Sidebar-checkbox */}
      </div>
      {/* End popular filter */}

      {/* <div className="sidebar__item ">
        <h5 className="text-18 fw-500 mb-10">Width</h5>
        <div className="sidebar-checkbox">
          <WidthTypes />
        </div>
      </div> */}

      {/* <div className="sidebar__item ">
        <h5 className="text-18 fw-500 mb-10">Hp</h5>
        <div className="sidebar-checkbox">
          <HpTypes />
        </div>
      </div> */}

      {/* <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Year</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <YearSlider />
          </div>
        </div>
      </div> */}

    </>
  );
};

export default Sidebar2;
