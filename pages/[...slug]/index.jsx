import Seo from "../../components/custom/common/Seo";
import Header from "../../components/custom/home/headers/header2/header";
import Footer from "../../components/custom/footers/footer";
import TopDestinations2 from "../../components/custom/destinations/TopDestinations2";
import Faq from "../../components/custom/destinations/Faq";
import Link from "next/link";
import Banner from "../../components/custom/destinations/Banner";
import Categories from "../../components/custom/destinations/Categories";
import IntroTown from "../../components/custom/destinations/IntroTown";
import Tours from "../../components/custom/tours/Tours";
import Activity from "../../components/custom/activity/Activity";
import Rentals from "../../components/custom/rentals/Rentals";
import Hotels from "../../components/custom/hotels/Hotels2";
import { useRouter } from "next/router";
import { getDestinationDetail, getDestinationsIsNot } from "../../services/destination";
import { useEffect, useState } from "react";
// tour list
import TopHeaderFilter from "../../components/tour-list/tour-list-v2/TopHeaderFilter";
import TourProperties from "../../components/tour-list/tour-list-v2/TourProperties";
import Sidebar from "../../components/tour-list/tour-list-v2/Sidebar";
import { getOtherTour, getTourCategory, getTourDestination, getTourDetail, getTourFilterSlug, getTours } from "../../services/tours";
// tour detail
import ModalVideo from "react-modal-video";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { hotelsData } from "../../data/hotels";
import Overview from "../../components/hotel-single/Overview";
import StickyHeader from "../../components/hotel-single/StickyHeader";
import SidebarRight from "../../components/hotel-single/SidebarRight";
import ReviewProgress from "../../components/hotel-single/guest-reviews/ReviewProgress";
import DetailsReview from "../../components/hotel-single/guest-reviews/DetailsReview";
import ReplyForm from "../../components/hotel-single/ReplyForm";
import ReplyFormReview from "../../components/hotel-single/ReplyFormReview";
import Facilities from "../../components/hotel-single/Facilities";
import Hotels2 from "../../components/hotels/Hotels2";
import TourSnapShot from "../../components/tour-single/TourSnapShot";

import style from './image.module.css'
import Sidebar2 from "../../components/tour-list/tour-list-v2/Sidebar2";
import Pagination from "../../components/tour-list/common/Pagination";

export default function DestinationDetail({ data, toursDestination, yachtDestination, guletDestination, destinationsIsNot, tourDetail, filterDestinations, otherTours }) {
    const router = useRouter();
    const slug = router.query.slug;
    const path = router.asPath

    const [ready, setReady] = useState(false)
    const [isOpen, setOpen] = useState(false);

    useEffect(() => {
        if (slug.length == 1) {
            if (data?.data.length === 0) {
                router.push("/404")
            }
        }
        else if (slug.length == 2) {
            if (slug[1] == 'yacht' || slug[1] == 'gulet' || slug[1] == 'tour') {

            } else {
                // router.push("/destinations")
                router.replace('/404')
            }
        }
        else if (slug.length == 3) {
            if (tourDetail?.length == 0 || tourDetail?.data.length == 0) {
                router.push("/404")
            } else {
                if (tourDetail?.data[0]?.attributes?.destinations?.data[0].attributes?.slug === slug[0] || tourDetail?.data[0]?.attributes?.destinations.data[1].attributes?.slug === slug[0]) {
                    if (tourDetail?.data[0]?.attributes?.category?.data.attributes?.slug === slug[1]) {
                    } else {
                        router.push("/404")
                    }
                } else {
                    router.push("/404")
                }
            }
        }
        else if (slug.length >= 4) {
            router.push('/404')
        }
    }, [ready])


    if (slug[0] && slug.length == 1) {
        if (path === `/${slug[0]}` && data.data.length !== 0) {
            return (
                <>
                    <Seo canonical={`/${slug[0]}`} pageDesc={data?.data[0]?.attributes?.metaFields?.metaDescription} pageTitle={data?.data[0]?.attributes.metaFields?.metaTitle} />
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
                                    <h2>What to know before visiting {data?.data[0]?.attributes.name}</h2>
                                </div>
                                {/* End .col-auto */}

                                <IntroTown data={data} />
                            </div>
                            {/* End .row */}

                            {/* border separation */}

                            {/* <div className="row y-gap-20">
                                <div className="col-12">
                                    <h2 className="text-22 fw-500">Local weather</h2>
                                </div>
                              
                                <Weather />
                            </div> */}

                            {/* <div className="row y-gap-20">
                                <div className="col-12">
                                    <h2 className="text-22 fw-500">General info</h2>
                                </div>
                                <GeneralInfo />
                            </div> */}

                            {/* End .row */}
                            <div className="mt-30 border-top-light" />
                            {/* border separation */}
                        </div>
                        {/* End .container */}
                    </section>
                    {/* End Top Banner,categorie,intro,weather, generic info section */}
                    {
                        toursDestination?.data?.length !== 0 &&
                        <section className="layout-pt-md layout-pb-md">
                            <div className="container">
                                <div className="row y-gap-20 justify-between items-end">
                                    <div className="col-auto">
                                        <div className="sectionTitle -md">
                                            <h2 className="sectionTitle__title">Tours in {data?.data[0]?.attributes?.name}</h2>
                                            <p className=" sectionTitle__text mt-5 sm:mt-0">
                                                Interdum et malesuada fames ac ante ipsum
                                            </p>
                                        </div>
                                    </div>
                                    {/* End .col */}

                                    <div className="col-auto">
                                        <Link
                                            rel="nofollow"
                                            href={`/${slug[0]}/tour`}
                                            className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                                        >
                                            More <div className="icon-arrow-top-right ml-15" />
                                        </Link>
                                    </div>
                                </div>
                                {/* End .row */}

                                <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                                    <Hotels data={toursDestination} />
                                </div>
                                {/* End relative */}
                            </div>
                        </section>
                    }

                    {
                        yachtDestination?.data?.length !== 0 &&
                        <section className="layout-pt-md layout-pb-md">
                            <div className="container">
                                <div className="row y-gap-20 justify-between items-end">
                                    <div className="col-auto">
                                        <div className="sectionTitle -md">
                                            <h2 className="sectionTitle__title">Yachts in {data?.data[0]?.attributes?.name}</h2>
                                            <p className=" sectionTitle__text mt-5 sm:mt-0">
                                                Interdum et malesuada fames ac ante ipsum
                                            </p>
                                        </div>
                                    </div>
                                    {/* End .col */}

                                    <div className="col-auto">
                                        <Link
                                            rel="nofollow"
                                            href={`/${slug[0]}/yacht`}
                                            className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                                        >
                                            More <div className="icon-arrow-top-right ml-15" />
                                        </Link>
                                    </div>
                                    {/* End .col */}
                                </div>
                                {/* End .row */}

                                <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                                    <Tours data={yachtDestination} />
                                </div>
                                {/* End .row */}
                            </div>
                            {/* End .container */}
                        </section>
                    }
                    {
                        guletDestination?.data?.length !== 0 &&
                        <section className="layout-pt-md layout-pb-md">
                            <div className="container">
                                <div className="row y-gap-20 justify-between items-end">
                                    <div className="col-auto">
                                        <div className="sectionTitle -md">
                                            <h2 className="sectionTitle__title">Gulets in {data?.data[0].attributes?.name}</h2>
                                            <p className=" sectionTitle__text mt-5 sm:mt-0">
                                                Interdum et malesuada fames ac ante ipsum
                                            </p>
                                        </div>
                                    </div>
                                    {/* End .col */}

                                    <div className="col-auto">
                                        <Link
                                            rel="nofollow"
                                            href={`/${slug}/gulet`}
                                            className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                                        >
                                            More <div className="icon-arrow-top-right ml-15" />
                                        </Link>
                                    </div>
                                    {/* End .col */}
                                </div>
                                {/* End .row */}

                                <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                                    <Activity data={guletDestination} />
                                </div>
                                {/* End .row */}
                            </div>
                            {/* End .container */}
                        </section>
                    }

                    {/* <section className="layout-pt-md layout-pb-md">
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
                              
                                <div className="col-auto">
                                    <Link
                                        href="#"
                                        className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                                    >
                                        More <div className="icon-arrow-top-right ml-15" />
                                    </Link>
                                </div>
                               
                            </div>
                            
                            <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                                <Cars />
                            </div>
                        </div>
                    </section> */}



                    {/* <section className="layout-pt-md layout-pb-md">
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
                                <YachtList home={true} />
                            </div>
                        </div>
                    </section> */}

                    {/* <section className="layout-pt-md layout-pb-lg">
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

                            <div className="row y-gap-30 pt-40">
                                <Slights />
                            </div>

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
                        </div>
                    </section> */}

                    {/* <section className="layout-pt-lg layout-pb-lg bg-light-2">
                        <div className="container">
                            <div className="row y-gap-40 justify-between">
                                <div className="col-xl-5 col-lg-6" data-aos="fade-up">
                                    <TestimonialLeftCol />
                                </div>

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
                        </div>
                    </section> */}

                    <section className="layout-pt-md layout-pb-lg">
                        <div className="container">
                            <div className="row y-gap-20">
                                <div className="col-auto">
                                    <div className="sectionTitle -md">
                                        <h2 className="sectionTitle__title">
                                            Other Regions
                                        </h2>
                                        <p className=" sectionTitle__text mt-5 sm:mt-0">
                                            These popular destinations have a lot to offer
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* End .row */}

                            <div className="pt-40 relative">
                                <TopDestinations2 data={destinationsIsNot} />
                            </div>
                        </div>
                        {/* End .container */}
                    </section>
                    {/* End top destinations */}

                    <Footer />
                    {/* End Call To Actions Section */}
                </>
            )
        }
    }

    if (slug.length == 2) {
        // window.scrollTo(0, 0);
        const a = slug[0].split('-')

        for (let i = 0; i < a.length; i++) {
            a[i] = a[i][0].toUpperCase() + a[i].substr(1);
        }

        const b = a.join(" ")

        const c = slug[1].split('-')

        for (let i = 0; i < c.length; i++) {
            c[i] = c[i][0].toUpperCase() + c[i].substr(1);
        }

        const d = c.join(" ")

        return (
            <>
                <Seo pageDesc={`${b} in All ${d}`} pageTitle={`${b} in All ${d}`} />
                {/* End Page Title */}

                <div className="header-margin"></div>
                {/* header top margin */}

                <Header />
                {/* End Header 1 */}

                <section className="layout-pt-md layout-pb-lg">
                    <div className="container">
                        <div className="row y-gap-30">
                            <div className="col-xl-3">
                                <aside className="sidebar y-gap-40 xl:d-none">
                                    <Sidebar2 />
                                </aside>
                                {/* End sidebar for desktop */}

                                <div
                                    className="offcanvas offcanvas-start"
                                    tabIndex="-1"
                                    id="listingSidebar"
                                >
                                    <div className="offcanvas-header">
                                        <h5 className="offcanvas-title" id="offcanvasLabel">
                                            Filter Tours
                                        </h5>
                                        <button
                                            type="button"
                                            className="btn-close"
                                            data-bs-dismiss="offcanvas"
                                            aria-label="Close"
                                        ></button>
                                    </div>
                                    {/* End offcanvas header */}

                                    <div className="offcanvas-body">
                                        <aside className="sidebar y-gap-40  xl:d-block">
                                            <Sidebar2 />
                                        </aside>
                                    </div>
                                    {/* End offcanvas body */}
                                </div>
                                {/* End mobile menu sidebar */}
                            </div>
                            {/* End col */}

                            <div className="col-xl-9 ">
                                <TopHeaderFilter b={b} d={d} />
                                <div className="mt-30"></div>
                                {/* End mt--30 */}
                                <div className="row y-gap-30">
                                    <TourProperties data={filterDestinations} />
                                </div>
                                {/* End .row */}
                                {/* <Pagination data={filterDestinations?.meta} /> */}
                            </div>
                            {/* End .col for right content */}
                        </div>
                        {/* End .row */}
                    </div>
                    {/* End .container */}
                </section>
                {/* End layout for listing sidebar and content */}

                <Footer />
            </>
        )
    }

    if (slug.length == 3) {
        return (
            <>
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId="oqNZOOWF8qM"
                    onClose={() => setOpen(false)}
                />

                <Seo pageDesc={tourDetail?.data[0]?.attributes?.metaFields?.metaDescription} pageTitle={tourDetail?.data[0]?.attributes?.metaFields?.metaTitle} />
                {/* End Page Title */}

                <div className="header-margin"></div>
                {/* header top margin */}

                <Header />
                {/* End Header 1 */}

                {/* <TopBreadCrumb /> */}
                {/* End top breadcrumb */}

                <StickyHeader tour={tourDetail} />
                {/* sticky single header for hotel single */}

                <section className="pt-40">
                    <div className="container">
                        <div className="row y-gap-20 justify-between items-end">
                            <div className="col-auto">
                                <div className="row x-gap-20  items-center">
                                    <div className="col-auto">
                                        <h1 className="text-30 sm:text-25 fw-600">{tourDetail?.data[0]?.attributes.title}</h1>
                                    </div>
                                </div>
                                {/* End .row */}

                                <div className="row x-gap-20 y-gap-20 items-center">
                                    <div className="col-auto">
                                        <div className="d-flex items-center text-15 text-light-1">
                                            <i className="icon-location-2 text-16 mr-5" />
                                            {tourDetail?.data[0]?.attributes?.destinations?.data[0]?.attributes?.name}{tourDetail?.data[0]?.attributes?.destinations?.data[1]?.attributes?.name && ','} {tourDetail?.data[0]?.attributes?.destinations?.data[1]?.attributes?.name}
                                        </div>
                                    </div>
                                    <div className="col-auto">
                                    </div>
                                </div>
                                {/* End .row */}
                            </div>
                            {/* End .col */}

                            <div className="col-auto">
                                <div className="row x-gap-15 y-gap-15 items-center">
                                    <div className="col-auto">
                                        <div className="text-14">
                                            <span className="text-22 text-dark-1 fw-500">
                                                ${tourDetail?.data[0]?.attributes?.price}
                                            </span>
                                        </div>
                                    </div>
                                    {/* <div className="col-auto">
                                            <Link
                                                href="/hotel/booking-page"
                                                className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                                            >
                                                Select Room <div className="icon-arrow-top-right ml-15" />
                                            </Link>
                                        </div> */}
                                </div>
                            </div>
                            {/* End .col */}
                        </div>
                        {/* End .row */}

                        <Gallery>
                            <div className="galleryGrid -type-1 pt-30">
                                {
                                    tourDetail?.data[0]?.attributes?.images?.data.map((item, index) => {
                                        if (index === 0) {
                                            return (
                                                <div key={index} className="galleryGrid__item relative d-flex">
                                                    <Item
                                                        original={`${`http://3.74.191.230:1337`}${item?.attributes?.formats?.large?.url ? item?.attributes?.formats?.medium?.url : item?.attributes?.url}`}
                                                        thumbnail={`${`http://3.74.191.230:1337`}${item?.attributes?.formats?.large?.url ? item?.attributes?.formats?.medium?.url : item?.attributes?.url}`}
                                                        width={640}
                                                        height={640}
                                                    >
                                                        {({ ref, open }) => (
                                                            <img
                                                                src={`${`http://3.74.191.230:1337`}${item?.attributes?.formats?.large?.url ? item?.attributes?.formats?.large?.url : item?.attributes?.url}`}
                                                                ref={ref}
                                                                onClick={open}
                                                                alt="image"
                                                                role="button"
                                                                className="rounded-4"
                                                            />
                                                        )}
                                                    </Item>
                                                </div>
                                            )
                                        } else if (index === 4) {
                                            return (
                                                <div key={index} className="galleryGrid__item relative d-flex">
                                                    <img
                                                        src={`${`http://3.74.191.230:1337`}${item.attributes?.formats?.medium?.url}`}
                                                        alt="image"
                                                        className={`rounded-4 ${style['customImage']}`}
                                                    />
                                                    <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">
                                                        <Item
                                                            original={`${`http://3.74.191.230:1337`}${item?.attributes?.formats?.large?.url ? item?.attributes?.formats?.large?.url : item?.attributes?.url}`}
                                                            thumbnail={`${`http://3.74.191.230:1337`}${item?.attributes?.formats?.large?.url ? item?.attributes?.formats?.large?.url : item?.attributes?.url}`}
                                                            width={640}
                                                            height={640}
                                                        >
                                                            {({ ref, open }) => (
                                                                <div
                                                                    className="button -blue-1 px-24 py-15 bg-white text-dark-1 js-gallery"
                                                                    ref={ref}
                                                                    onClick={open}
                                                                    role="button"
                                                                >
                                                                    See All Photos
                                                                </div>
                                                            )}
                                                        </Item>
                                                    </div>
                                                </div>
                                            )
                                        } else if (index > 4) {
                                            return (
                                                <div key={index} style={{ display: 'none' }}>
                                                    {
                                                        index > 4 &&
                                                        <Item
                                                            original={`${`http://3.74.191.230:1337`}${item?.attributes?.formats?.large?.url ? item?.attributes?.formats?.large?.url : item?.attributes?.url}`}
                                                            thumbnail={`${`http://3.74.191.230:1337`}${item?.attributes?.formats?.large?.url ? item?.attributes?.formats?.large?.url : item?.attributes?.url}`}
                                                            width={640}
                                                            height={640}
                                                        >
                                                            {({ ref, open }) => (
                                                                <img
                                                                    ref={ref}
                                                                    onClick={open}
                                                                    src={`${`http://3.74.191.230:1337`}${item?.attributes?.formats?.large?.url ? item?.attributes?.formats?.large?.url : item?.attributes?.url}`}
                                                                    alt="image"
                                                                    className="rounded-4"
                                                                    role="button"
                                                                />
                                                            )}
                                                        </Item>
                                                    }
                                                </div>
                                            )
                                        }
                                        else {
                                            return (
                                                <div key={index} className="galleryGrid__item">
                                                    <Item
                                                        original={`${`http://3.74.191.230:1337`}${item?.attributes?.formats?.large?.url ? item?.attributes?.formats?.large?.url : item?.attributes?.url}`}
                                                        thumbnail={`${`http://3.74.191.230:1337`}${item?.attributes?.formats?.large?.url ? item?.attributes?.formats?.large?.url : item?.attributes?.url}`}
                                                        width={640}
                                                        height={640}
                                                    >
                                                        {({ ref, open }) => (
                                                            <img
                                                                ref={ref}
                                                                onClick={open}
                                                                src={`${`http://3.74.191.230:1337`}${item.attributes?.formats?.medium?.url}`}
                                                                alt="image"
                                                                className="rounded-4"
                                                                role="button"
                                                            />
                                                        )}
                                                    </Item>
                                                </div>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </Gallery>
                    </div >
                    {/* End .container */}
                </section >
                {/* End gallery grid wrapper */}

                <section className="pt-30" >
                    <div className="container">
                        <div className="row y-gap-30">
                            <div className="col-xl-8">
                                <div className="row y-gap-40">
                                    <div className="col-12">
                                        <h3 className="text-22 fw-500">Tour snapshot</h3>
                                        <TourSnapShot data={tourDetail} />
                                    </div>
                                    {/* End .col-12 Property highlights */}

                                    <div id="overview" className="col-12">
                                        <Overview data={tourDetail} />
                                    </div>

                                    <div id="features" className="col-12">
                                        <h3 className="text-22 fw-500 border-top-light pt-40">Facilities of this Cruise</h3>
                                        <div className="row x-gap-40 y-gap-40 pt-20">
                                            <Facilities tourDetail={tourDetail} />
                                        </div>
                                        {/* End .row */}
                                    </div>
                                </div>
                                {/* End .row */}
                            </div>
                            {/* End .col-xl-8 */}

                            <div className="col-xl-4">
                                <SidebarRight data={tourDetail} />
                            </div>
                            {/* End .col-xl-4 */}
                        </div>
                        {/* End .row */}
                    </div>
                    {/* End container */}
                </section >
                {/* End single page content */}

                < section className="pt-40" id="reviews" >
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="text-22 fw-500">Guest reviews</h3>
                            </div>
                        </div>
                        {/* End .row */}

                        {/* <ReviewProgress /> */}
                        {/* End review with progress */}

                        <div className="pt-40">
                            <DetailsReview tourDetail={tourDetail} />
                            {/* End review with details */}
                        </div>

                        {/* <div className="row pt-30">
                            <div className="col-auto">
                                <a href="#" className="button -md -outline-blue-1 text-blue-1">
                                    Show all 116 reviews{" "}
                                    <div className="icon-arrow-top-right ml-15"></div>
                                </a>
                            </div>
                        </div> */}

                    </div>
                    {/* End .container */}
                    {/* End container */}
                </section >
                {/* End Review section */}

                < section className="pt-40" >
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10">
                                <div className="row">
                                    <div className="col-auto">
                                        <h3 className="text-22 fw-500">Leave a Reply</h3>
                                        <p className="text-15 text-dark-1 mt-5">
                                            Your email address will not be published.
                                        </p>
                                    </div>
                                </div>
                                {/* End .row */}

                                {/* <ReplyFormReview /> */}
                                {/* End ReplyFormReview */}

                                <ReplyForm tourDetail={tourDetail} />
                            </div>
                        </div>
                    </div>
                </section >
                {/* End Reply Comment box section */}


                < section className="layout-pt-md layout-pb-lg" >
                    <div className="container">
                        <div className="row justify-center text-center">
                            <div className="col-auto">
                                <div className="sectionTitle -md">
                                    <h2 style={{ textTransform: 'capitalize' }} className="sectionTitle__title">
                                        Other {slug[1]}
                                    </h2>
                                    <p className=" sectionTitle__text mt-5 sm:mt-0">
                                        Interdum et malesuada fames ac ante ipsum
                                    </p>
                                </div>
                                {/* End sectionTitle */}
                            </div>
                            {/* End .col */}
                        </div>
                        {/* End .row */}

                        <div className="pt-40 sm:pt-20 item_gap-x30">
                            <Hotels2 otherTours={otherTours} />
                        </div>
                        {/* End slide hotel */}
                    </div>
                    {/* End .container */}
                </section >
                {/* End similar hotel */}

                < Footer />
            </>
        )
    }


}

export async function getServerSideProps({ params, query }) {
    const slug = params.slug
    const rSlug = slug[0]

    const page = query.page
    const price = query.p
    const person = query.e

    // const width = query.w
    // const hp = query.hp
    // const year = query.y

    const sort = query.sort

    const data = await getDestinationDetail({ slug: slug })
    const toursDestination = await getTourDestination({ rSlug, category: 'tour' })
    const yachtDestination = await getTourDestination({ rSlug, category: 'yacht' })
    const guletDestination = await getTourDestination({ rSlug, category: 'gulet' })
    const filterDestinations = await getTourFilterSlug({ rSlug, category: slug[1], page, price, person, sort })
    const destinationsIsNot = await getDestinationsIsNot({ slug })
    const otherTours = await getOtherTour({ rSlug, category: slug[1], slug: slug[2] })
    const tourDetail = await getTourDetail({ tourSlug: `${slug[2]}` })
    return { props: { data, toursDestination, yachtDestination, guletDestination, destinationsIsNot, tourDetail, filterDestinations, otherTours } }
}


{/* <section id="faq" className="pt-40 layout-pb-md" >
    <div className="container">
        <div className="pt-40">
            <div className="row y-gap-20">
                <div className="col-lg-12">
                    <div className="accordion -simple row y-gap-20 js-accordion">
                        <Faq />
                    </div>
                </div>
            </div>
        </div>
    </div>
</section > */}