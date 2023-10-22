import AccordionContent from "./ItineraryContent";
import MapPropertyFinder from "./MapPropertyFinder";

const index = () => {
  return (
    <div className="row y-gap-30">
      <div className="col-lg-12">
        <div className="relative">
          <div className="border-test" />
          <div className="accordion -map row y-gap-20" id="itineraryContent">
            <AccordionContent />
          </div>
        </div>
      </div>
      {/* End col-lg-4 */}

      {/* <div className="col-lg-8">
        <div className="map rounded-4 overflow-hidden">
          <MapPropertyFinder />
        </div>
      </div> */}
    </div>
  );
};

export default index;
