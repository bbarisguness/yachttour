const Comments = ({ data }) => {
  const month = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return (
    <div className="row y-gap-40">
      {
        data?.data[0]?.attributes?.yacht_service_comments?.data.map((item, index) => {
          if (item?.attributes?.publish) {
            const a = item?.attributes?.publishedAt.split('-')
            return (
              <div key={index} className="col-12">
                <div className="row x-gap-20 y-gap-20 items-center">
                  <div style={{ height: '60px', marginRight: '1rem', width: '60px', backgroundColor: '#051136', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
                    {item?.attributes?.name.charAt(0)}.{item?.attributes?.surname.charAt(0)}
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
                <div className="row x-gap-30 y-gap-30 pt-20">
                  <div className="col-auto">
                    <img
                      src="/img/testimonials/1/1.png"
                      alt="image"
                      className="rounded-4"
                    />
                  </div>
                  <div className="col-auto">
                    <img
                      src="/img/testimonials/1/2.png"
                      alt="image"
                      className="rounded-4"
                    />
                  </div>
                  <div className="col-auto">
                    <img
                      src="/img/testimonials/1/3.png"
                      alt="image"
                      className="rounded-4"
                    />
                  </div>
                  <div className="col-auto">
                    <img
                      src="/img/testimonials/1/4.png"
                      alt="image"
                      className="rounded-4"
                    />
                  </div>
                </div>
              </div>
            )
          }
        })
      }
      <div className="col-auto">
        <a href="#" className="button -md -outline-blue-1 text-blue-1">
          Show all 116 reviews <div className="icon-arrow-top-right ml-15" />
        </a>
      </div>
    </div>
  );
};

export default Comments;