import dynamic from "next/dynamic";
import Link from "next/link";
import Seo from "../../components/custom/common/Seo";
import Footer from '../../components/custom/footers/footer'
import HomeTourList from "../../components/custom/home/homeTourList";
import Hero from "../../components/custom/home/hero/index";
import Testimonial from "../../components/custom/home/testimonials/testimonial";
import Counter from "../../components/custom/home/testimonials/counter";
import Brand from "../../components/custom/home/testimonials/brand";
import Blog from "../../components/custom/home/blog";
import WhyChoose from "../../components/custom/home/whyChoose";
import Header from "../../components/custom/home/headers/header";
import TopDestinations from "../../components/custom/destinations/TopDestinations";
import { getDestinations } from "../../services/destination";

export default function Home({ data }) {
  console.log(data)
  return (
    <>
      <Seo pageTitle="Home-1" />

      <Header />

      <Hero />

      <section className="layout-pt-md layout-pb-lg mt-60">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Popular Tours</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  We have listed our most preferred tours.
                </p>
              </div>
            </div>
          </div>

          <div className="tabs -pills-2 pt-40">
            <div className="tabs__content pt-40">
              <div className="row y-gap-30">
                <HomeTourList />
              </div>
            </div>

            <div className="row justify-center pt-60">
              <div className="col-auto">
                <Link
                  href="#"
                  className="button px-40 h-50 -outline-blue-1 text-blue-1"
                >
                  View All <div className="icon-arrow-top-right ml-15" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">Top Destinations</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
            <TopDestinations home={true} data={data} />
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
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

          <div className="row y-gap-40 justify-between pt-50">
            <WhyChoose />
          </div>
        </div>
      </section>

      <section className="section-bg layout-pt-lg layout-pb-lg">
        <div className="section-bg__item -mx-20 bg-light-2" />
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Overheard from Travelers
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  These popular destinations have a lot to offer
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-80 md:mt-40  position-relative">
            <Testimonial />
          </div>

          <div className="row y-gap-30 items-center pt-40 sm:pt-20">
            <div className="col-xl-4">
              <Counter />
            </div>

            <div className="col-xl-8">
              <div className="row y-gap-30 justify-between items-center">
                <Brand />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="layout-pt-md layout-pb-md">
        <div className="container">
          <div className="row justify-center text-center">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">
                  Get inspiration for your next trip
                </h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                  Interdum et malesuada fames
                </p>
              </div>
            </div>
          </div>
          <div className="row y-gap-30 pt-40">
            <Blog />
          </div>
        </div>
      </section>

      {/* <CallToActions /> */}

      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  const data = await getDestinations()
  return { props: { data } }
}
