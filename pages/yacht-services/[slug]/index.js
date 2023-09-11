import React, { useEffect, useState } from "react";
import Seo from "../../../components/custom/common/Seo";
import Header from "../../../components/custom/home/headers/header2/header";
import Footer from '../../../components/custom/footers/footer'
import LocationTopBar from "../../../components/custom/common/LocationTopBar/LocationTopBar";
import RelatedYacht from "../../../components/custom/yacht-services/yacht-details/RelatedYacht";
import yachtsData from "../../../customdata/yachts";
import { useRouter } from "next/router";
import DetailsContent from "../../../components/custom/yacht-services/yacht-details/DetailsContent"
import FormReply from "../../../components/custom/yacht-services/yacht-details/FormReply"
import TopComment from "../../../components/custom/yacht-services/yacht-details/TopComment";
import YachtNavigator from "../../../components/custom/yacht-services/yacht-details/YachtNavigator";
import Comments from "../../../components/custom/yacht-services/yacht-details/Comments";

const BlogSingleDynamic = () => {
  const router = useRouter();
  const [blog, setBlogItem] = useState({});
  const slug = router.query.slug;

  useEffect(() => {
    if (!slug) <h1>Loading...</h1>;
    else setBlogItem(yachtsData.find((item) => item.slug == slug));

    return () => { };
  }, [slug]);

  return (
    <>
      <Seo pageTitle="Yacht Single" />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <LocationTopBar />
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 justify-center text-center">
            <div className="col-auto">
              <div className="text-15 fw-500 text-blue-1 mb-8 text-capitalize">
                {blog?.tag}
              </div>
              <h1 className="text-30 fw-600">{blog?.title}</h1>
              <div className="text-15 text-light-1 mt-10">{blog?.date}</div>
            </div>
            <div className="col-12">
              <img
                src={blog?.img}
                alt={blog?.title}
                className="col-12 rounded-8 w-100 img_large_details"
              />
            </div>
          </div>
          {/* End .row top bar image and title */}

          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
              <DetailsContent />
              {/* Details content */}

              <div className="border-top-light border-bottom-light py-30 mt-30">
                <TopComment />
              </div>
              {/* End  topcommnet  */}
              <div className="border-bottom-light py-30">
                <YachtNavigator />
              </div>
              {/* End YachtNavigator */}

              <h2 className="text-22 fw-500 mb-15 pt-30">Guest reviews</h2>
              <Comments />
              {/* End comments components */}

              <div className="border-top-light pt-40 mt-40" />

              <div className="row">
                <div className="col-auto">
                  <h3 className="text-22 fw-500">Leave a Reply</h3>
                  <p className="text-15 text-dark-1 mt-5">
                    Your email address will not be published.
                  </p>
                </div>
              </div>
              {/* End Leave a repy title */}

              <FormReply />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Details Blog Details Content */}

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Related content</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40">
            <RelatedYacht />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Related Content */}

      <Footer />
      {/* End Call To Actions Section */}
    </>
  );
};

export default BlogSingleDynamic;
