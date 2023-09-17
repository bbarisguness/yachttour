import dynamic from "next/dynamic";
import Seo from "../../../components/custom/common/Seo";
import Header from "../../../components/custom/home/headers/header2/header";
import Footer from "../../../components/custom/footers/footer";
import TopDestinations2 from "../../../components/custom/destinations/TopDestinations2";
import Faq from "../../../components/custom/destinations/Faq";
import TestimonialLeftCol from "../../../components/custom/home/TestimonialLeftCol";
import Testimonial from "../../../components/custom/destinations/Testimonial";
import Link from "next/link";
import Slights from "../../../components/custom/block/Slights";
import YachtList from "../../../components/custom/yacht-services/yacht-list";
import LocationTopBar from "../../../components/custom/common/LocationTopBar/LocationTopBar";
import Banner from "../../../components/custom/destinations/Banner";
import Categories from "../../../components/custom/destinations/Categories";
import IntroTown from "../../../components/custom/destinations/IntroTown";
import Weather from "../../../components/custom/destinations/Weather";
import GeneralInfo from "../../../components/custom/destinations/GeneralInfo";
import Cars from "../../../components/custom/cars/Cars";
import Tours from "../../../components/custom/tours/Tours";
import Activity from "../../../components/custom/activity/Activity";
import Rentals from "../../../components/custom/rentals/Rentals";
import Hotels from "../../../components/custom/hotels/Hotels2";
import { useRouter } from "next/router";
import { getDestinationDetail } from "../../../services/destination";
import { useEffect, useState } from "react";

const DestinationsDetail = () => {
    const [data, setData] = useState()
    const router = useRouter();
    const slug = router.query.slug;
    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        if (slug) {
            getDestinationDetail({ slug }).then((data) => {
                if (data.data.length == 0) {
                    setNotFound(true)
                }
                setData(data?.data[0]?.attributes)
            })
        }
    }, [slug])

    useEffect(() => {
        if (notFound) {
            router.push("/404")
        }
    }, [notFound])
    
    return (
        <>
            <Seo pageTitle={data?.metaFields?.metaTitle} />
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header />
            {/* End Header 1 */}


            <div style={{ height: '61px' }}></div>
            {/* <LocationTopBar /> */}
            {/* End location top bar section */}

            <section className="layout-pb-md">
                <div className="container">
                    <div className="row">
                        <Banner data={data} />
                    </div>
                    {/* End .row */}

                    <div className="row x-gap-20 y-gap-20 items-center pt-20 item_gap-x10">
                        <Categories />
                    </div>
                    {/* End .row */}

                    <div className="row y-gap-20 pt-40">
                        <div className="col-auto">
                            <h2>What to know before visiting {data?.name}</h2>
                        </div>
                        {/* End .col-auto */}

                        <IntroTown data={data} />
                    </div>
                    {/* End .row */}

                    <div className="pt-30 mt-30 border-top-light" />
                    {/* border separation */}

                    <div className="row y-gap-20">
                        <div className="col-12">
                            <h2 className="text-22 fw-500">Local weather</h2>
                        </div>
                        {/* End. col-12 */}

                        <Weather />
                    </div>
                    {/* End local weather */}

                    <div className="pt-30 mt-30 border-top-light" />
                    <div className="row y-gap-20">
                        <div className="col-12">
                            <h2 className="text-22 fw-500">General info</h2>
                        </div>
                        {/* End .col */}
                        <GeneralInfo />
                    </div>
                    {/* End .row */}
                    <div className="mt-30 border-top-light" />
                    {/* border separation */}
                </div>
                {/* End .container */}
            </section>
            {/* End Top Banner,categorie,intro,weather, generic info section */}

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Recommended Hotels</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    Interdum et malesuada fames ac ante ipsum
                                </p>
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-auto">
                            <Link
                                href="#"
                                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                            >
                                More <div className="icon-arrow-top-right ml-15" />
                            </Link>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                        <Hotels />
                    </div>
                    {/* End relative */}
                </div>
            </section>
            {/* End  Hotel sections */}

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Most Popular Tours</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    Interdum et malesuada fames ac ante ipsum
                                </p>
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-auto">
                            <Link
                                href="#"
                                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                            >
                                More <div className="icon-arrow-top-right ml-15" />
                            </Link>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}

                    <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                        <Tours />
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* End Tours Sections */}

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Trending Activity</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    Interdum et malesuada fames ac ante ipsum
                                </p>
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-auto">
                            <Link
                                href="#"
                                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                            >
                                More <div className="icon-arrow-top-right ml-15" />
                            </Link>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}

                    <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                        <Activity />
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* Trending Activity Sections */}

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">
                                    Featured Holiday Rentals
                                </h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    Interdum et malesuada fames ac ante ipsum
                                </p>
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-auto">
                            <Link
                                href="#"
                                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                            >
                                More <div className="icon-arrow-top-right ml-15" />
                            </Link>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}

                    <div className="y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                        <Rentals />
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* Featured Rentals Sections */}

            <section className="layout-pt-md layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20 justify-between items-end">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Popular Car Hire</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    Interdum et malesuada fames ac ante ipsum
                                </p>
                            </div>
                        </div>
                        {/* End .col */}

                        <div className="col-auto">
                            <Link
                                href="#"
                                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                            >
                                More <div className="icon-arrow-top-right ml-15" />
                            </Link>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}

                    <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                        <Cars />
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* Popular Car Hire Sections */}

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
                    {/* End .row  */}
                    <div className="row y-gap-30 pt-40">
                        <YachtList home={true} />
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* End blog Section */}

            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Top sights in London</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    These popular destinations have a lot to offer
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className="row y-gap-30 pt-40">
                        <Slights />
                    </div>
                    {/* End .row */}

                    <div className="row justify-center mt-40">
                        <div className="col-auto">
                            <Link
                                href="#"
                                className="button h-50 w-250 -outline-blue-1 text-blue-1"
                            >
                                Explore more <div className="icon-arrow-top-right ml-15" />
                            </Link>
                        </div>
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* End Top sights in London */}

            <section className="layout-pt-lg layout-pb-lg bg-light-2">
                <div className="container">
                    <div className="row y-gap-40 justify-between">
                        <div className="col-xl-5 col-lg-6" data-aos="fade-up">
                            <TestimonialLeftCol />
                        </div>
                        {/* End col */}

                        <div className="col-lg-6">
                            <div
                                className="overflow-hidden js-testimonials-slider-3"
                                data-aos="fade-up"
                                data-aos-delay="50"
                            >
                                <Testimonial />
                            </div>
                        </div>
                    </div>
                    {/* End .row */}
                </div>
                {/* End container */}
            </section>
            {/* End testimonial Section */}

            <section className="layout-pt-lg layout-pb-md">
                <div className="container">
                    <div className="row y-gap-20">
                        <div className="col-lg-4">
                            <h2 className="text-30 fw-500">
                                FAQs about
                                <br />
                                London
                            </h2>
                        </div>
                        {/* End .col */}

                        <div className="col-lg-8">
                            <div className="accordion -simple row y-gap-20 js-accordion">
                                <Faq />
                            </div>
                        </div>
                        {/* End .col-lg-8 */}
                    </div>
                    {/* End .row */}
                </div>
                {/* End .container */}
            </section>
            {/* End Faq Section */}

            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row y-gap-20">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">
                                    Destinations near London
                                </h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    These popular destinations have a lot to offer
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* End .row */}

                    <div className="pt-40 relative">
                        <TopDestinations2 />
                    </div>
                </div>
                {/* End .container */}
            </section>
            {/* End top destinations */}

            <Footer />
            {/* End Call To Actions Section */}
        </>
    );
};

export default dynamic(() => Promise.resolve(DestinationsDetail), { ssr: false });
