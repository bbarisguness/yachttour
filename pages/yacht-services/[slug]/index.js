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
import { getYachtServiceDetail } from "../../../services/yacht-services";

export default function YachtDetailPage({ data }) {
  const router = useRouter();
  const [notFound, setNotFound] = useState(false)
  const dataId = data?.data[0]?.id

  useEffect(() => {
    if (data?.data.length === 0) {
      setNotFound(true)
    }
    if (notFound) {
      router.push("/404")
    }
  }, [notFound])

  return (
    <>
      <Seo pageTitle={data?.data[0]?.attributes.metaFields?.metaTitle} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      {/* <LocationTopBar /> */}
      {/* End location top bar section */}

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row y-gap-40 justify-center text-center">
            <div className="col-auto">
              <div className="text-15 fw-500 text-blue-1 mb-8 text-capitalize">
                Adventure
              </div>
              <h1 className="text-30 fw-600">{data?.data[0]?.attributes.name}</h1>
              <div className="text-15 text-light-1 mt-10">Jan 06, 2023</div>
            </div>
            <div className="col-12">
              <img
                src={`${"http://3.74.191.230:1337"}${data?.data[0]?.attributes.image?.data?.attributes?.url}`}
                alt={data?.data[0]?.attributes.name}
                className="col-12 rounded-8 w-100 img_large_details"
              />
            </div>
          </div>
          {/* End .row top bar image and title */}

          <div className="row y-gap-30 justify-center">
            <div className="col-xl-8 col-lg-10 layout-pt-md">
              <DetailsContent data={data} />
              {/* Details content */}

              {/* <div className="border-top-light border-bottom-light py-30 mt-30">
                <TopComment />
              </div> */}
              {/* End  topcommnet  */}
              <div className="border-bottom-light py-30">
                {/* <YachtNavigator /> */}
              </div>
              {/* End YachtNavigator */}

              <h2 className="text-22 fw-500 mb-15 pt-30">Guest reviews</h2>
              <Comments data={data} />
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

              <FormReply dataId={dataId} />
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* Details Blog Details Content */}


      {/* End Related Content */}

      <Footer />
      {/* End Call To Actions Section */}
    </>
  )
}

export async function getServerSideProps({ params }) {
  const slug = params.slug
  const data = await getYachtServiceDetail({ slug })
  return { props: { data } }
}