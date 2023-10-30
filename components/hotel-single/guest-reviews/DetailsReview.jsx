import ReviewGallery from "./ReviewGallery";

const DetailsReview = ({ tourDetail }) => {
  const month = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div className="row y-gap-60">

      {
        tourDetail?.data[0]?.attributes?.comments?.data.map((item, index) => {
          if (item?.attributes?.publish) {
            const a = item?.attributes?.publishedAt.split('-')
            return (
              <div key={index} className="col-lg-6">
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div className="col-auto">
                    <div style={{ height: '60px', width: '60px', backgroundColor: '#051136', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>{item?.attributes?.name.charAt(0)}.{item?.attributes?.surname.charAt(0)}</div>
                  </div>
                  <div className="col-auto">
                    <div className="fw-500 lh-15">{item?.attributes?.name} {item?.attributes?.surname}</div>
                    <div className="text-14 text-light-1 lh-15">{month[a[1]]} {a[0]}</div>
                  </div>
                </div>

                <h5 className="fw-500 text-blue-1 mt-20">{item?.attributes?.shortText}</h5>
                <p className="text-15 text-dark-1 mt-10">
                  {item?.attributes?.longText}
                </p>

                <ReviewGallery />
              </div>
            )
          }
        })
      }
    </div>
  );
};

export default DetailsReview;


{/* <div className="col-lg-6">
        <div className="row x-gap-20 y-gap-20 items-center">
          <div className="col-auto">
            <Image
              width={60}
              height={60}
              src="/img/avatars/2.png"
              alt="image"
            />
          </div>
          <div className="col-auto">
            <div className="fw-500 lh-15">Tonko</div>
            <div className="text-14 text-light-1 lh-15">March 2022</div>
          </div>
        </div>

        <h5 className="fw-500 text-blue-1 mt-20">9.2 Superb</h5>
        <p className="text-15 text-dark-1 mt-10">
          Nice two level apartment in great London location. Located in quiet
          small street, but just 50 meters from main street and bus stop. Tube
          station is short walk, just like two grocery stores
        </p>
        <div className="d-flex x-gap-30 items-center pt-20">
          <button className="d-flex items-center text-blue-1">
            <i className="icon-like text-16 mr-10" />
            Helpful
          </button>
          <button className="d-flex items-center text-light-1">
            <i className="icon-dislike text-16 mr-10" />
            Not helpful
          </button>
        </div>
      </div> */}