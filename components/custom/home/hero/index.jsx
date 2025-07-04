import Image from "next/image";
import MainFilterSearchBox from "./MainFilterSearchBox";
import Head from "next/head";

const index = ({ slider, tourTypes }) => {
  const imageUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}${slider?.url}`;
  return (
    <>
      <section className="masthead -type-1 z-5">
        <div className="masthead__bg">
          {/* <img alt="image" src="/img/custom/yacht.jpg" className="js-lazy" /> */}
          <Image
            width={1920}
            height={1080}
            src={imageUrl}
            alt="image"
            className="js-lazy"
            priority
          />
        </div>
        <div className="container">
          <div className="row justify-center">
            <div className="col-auto">
              <div className="text-center">
                <h1
                  className="text-60 lg:text-40 md:text-30 text-white"
                  data-aos="fade-up"
                >
                  Find Next Place To Visit
                </h1>
                <p
                  className="text-white mt-6 md:mt-10"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  Discover amzaing places at exclusive deals
                </p>
              </div>
              {/* End hero title */}

              <div
                className="tabs -underline mt-60 js-tabs"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <MainFilterSearchBox tourTypes={tourTypes} />
              </div>
              {/* End tab-filter */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
