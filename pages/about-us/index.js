import dynamic from "next/dynamic";
import Seo from "../../components/custom/common/Seo";
import Header from '../../components/custom/home/headers/header2/header'
import Footer from '../../components/custom/footers/footer'
import WhyChoose from "../../components/custom/block/BlockGuide";
import Block1 from "../../components/custom/about-us/Block1";
import Image from "next/image";
import Counter from "../../components/custom/counter/Counter";
import Team1 from "../../components/custom/team/Team1";
import { getAbout } from "../../services/about";
import { useEffect, useState } from "react";

export default function About({ data }) {
  return (
    <>
      <Seo pageTitle={data?.data?.attributes.metaFields?.metaTitle} />
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}

      <Header />
      {/* End Header 1 */}

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item col-12">
          <Image
            width={1920}
            height={400}
            src="/img/custom/resim.png"
            alt="image"
            priority
          />
        </div>
        {/* End section-bg__item */}

        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <h1 className="text-40 md:text-25 fw-600 text-white">
                {data?.data?.attributes.title}
              </h1>
              <div style={{ height: '30px' }} className="text-white mt-15">
              </div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </section>
      {/* End About Banner Section */}

      <section className="layout-pt-md">
        <div className="container">
          <div className="row y-gap-30 justify-between items-center">
            <Block1 data={data} />
          </div>
        </div>
      </section>
      {/* End about block section */}

      <section className="pt-60">
        <div className="container">
          <div className="pb-40">
            <div className="row y-gap-30 justify-center text-center">
              <Counter />
            </div>
          </div>
        </div>
      </section>
      {/* End counter Section */}

      <section className="section-bg layout-pt-lg layout-pb-md">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Why Choose Us</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Why Choose Us section */}

      <Footer />
      {/* End Call To Actions Section */}
    </>
  )
}

export async function getServerSideProps() {
  const data = await getAbout()
  return { props: { data } }
}