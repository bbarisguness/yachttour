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
import { Suspense, useEffect, useState } from "react";
// tour list
import TopHeaderFilter from "../../../components/tour-list/tour-list-v2/TopHeaderFilter";
import TourProperties from "../../../components/tour-list/tour-list-v2/TourProperties";
import Pagination from "../../../components/tour-list/common/Pagination";
import Sidebar from "../../../components/tour-list/tour-list-v2/Sidebar";
import { getTourCategory, getTourDestination, getTourDetail, getTours } from "../../../services/tours";
// tour detail
import ModalVideo from "react-modal-video";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { hotelsData } from "../../../data/hotels";
import Overview from "../../../components/hotel-single/Overview";
import PopularFacilities from "../../../components/hotel-single/PopularFacilities";
import PropertyHighlights from "../../../components/hotel-single/PropertyHighlights";
import RatingTag from "../../../components/hotel-single/RatingTag";
import StickyHeader from "../../../components/hotel-single/StickyHeader";
import TopBreadCrumb from "../../../components/hotel-single/TopBreadCrumb";
import SidebarRight from "../../../components/hotel-single/SidebarRight";
import AvailableRooms from "../../../components/hotel-single/AvailableRooms";
import ReviewProgress from "../../../components/hotel-single/guest-reviews/ReviewProgress";
import DetailsReview from "../../../components/hotel-single/guest-reviews/DetailsReview";
import ReplyForm from "../../../components/hotel-single/ReplyForm";
import ReplyFormReview from "../../../components/hotel-single/ReplyFormReview";
import Facilities from "../../../components/hotel-single/Facilities";
import Image from "next/image";
import Surroundings from "../../../components/hotel-single/Surroundings";
import HelpfulFacts from "../../../components/hotel-single/HelpfulFacts";
import Hotels2 from "../../../components/hotels/Hotels2";

import style from './image.module.css'

export default function DestinationDetail({ data, toursDestination, yachtTours, guletTours, tours }) {
    const router = useRouter();
    const slug = router.query.slug;
    const path = router.asPath
    const [tourDetail, setTourDetail] = useState([])
    const [notFound, setNotFound] = useState(false)
    const tourSlug = path.slice(20 + slug.length)

    const [isOpen, setOpen] = useState(false);
    const [hotel, setHotel] = useState({});
    const id = router.query.id;
    useEffect(() => {
        if (!id) <h1>Loading...</h1>;
        else setHotel(hotelsData.find((item) => item.id == id));

        return () => { };
    }, [id]);

    useEffect(() => {
        if (path === `/destinations/${slug}#tour/${tourSlug}`) {
            getTourDetail({ tourSlug }).then((data) => {
                setTourDetail(data);
                if (data?.data.length == 0) {
                    router.push("/404")
                }
            })
        }
    }, [path])

    useEffect(() => {
        if (data?.data.length === 0) {
            setNotFound(true)
        }
        if (notFound) {
            router.push("/404")
        }
    }, [notFound])

    if (path === `/destinations/${slug}#tour`) {
        window.scrollTo(0, 0);
        return (
            <>
                <Seo pageTitle="Tour List" />
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
                                    <Sidebar />
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
                                            <Sidebar />
                                        </aside>
                                    </div>
                                    {/* End offcanvas body */}
                                </div>
                                {/* End mobile menu sidebar */}
                            </div>
                            {/* End col */}

                            <div className="col-xl-9 ">
                                <TopHeaderFilter />
                                <div className="mt-30"></div>
                                {/* End mt--30 */}
                                <div className="row y-gap-30">
                                    <TourProperties data={toursDestination} />
                                </div>
                                {/* End .row */}
                                <Pagination />
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

    else if (tourDetail?.length !== 0) {
        if (tourDetail?.data[0].attributes.destinations.data[0].attributes.slug === slug || tourDetail?.data[0].attributes.destinations.data[1].attributes.slug === slug) {
            return (
                <>
                    <ModalVideo
                        channel="youtube"
                        autoplay
                        isOpen={isOpen}
                        videoId="oqNZOOWF8qM"
                        onClose={() => setOpen(false)}
                    />

                    <Seo pageTitle={tourDetail?.data[0].attributes?.metaFields?.metaTitle} />
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
                                            <h1 className="text-30 sm:text-25 fw-600">{tourDetail?.data[0].attributes.title}</h1>
                                        </div>
                                        {/* End .col */}
                                        <div className="col-auto">
                                            <i className="icon-star text-10 text-yellow-1" />
                                            <i className="icon-star text-10 text-yellow-1" />
                                            <i className="icon-star text-10 text-yellow-1" />
                                            <i className="icon-star text-10 text-yellow-1" />
                                            <i className="icon-star text-10 text-yellow-1" />
                                        </div>
                                    </div>
                                    {/* End .row */}

                                    <div className="row x-gap-20 y-gap-20 items-center">
                                        <div className="col-auto">
                                            <div className="d-flex items-center text-15 text-light-1">
                                                <i className="icon-location-2 text-16 mr-5" />
                                                {tourDetail?.data[0].attributes.destinations.data[0].attributes.name}, {tourDetail?.data[0].attributes.destinations.data[1].attributes.name}
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <button
                                                data-x-click="mapFilter"
                                                className="text-blue-1 text-15 underline"
                                            >
                                                Show on map
                                            </button>
                                        </div>
                                    </div>
                                    {/* End .row */}
                                </div>
                                {/* End .col */}

                                <div className="col-auto">
                                    <div className="row x-gap-15 y-gap-15 items-center">
                                        <div className="col-auto">
                                            <div className="text-14">
                                                From{" "}
                                                <span className="text-22 text-dark-1 fw-500">
                                                    US${tourDetail?.data[0].attributes.price}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-auto">
                                            <Link
                                                href="/hotel/booking-page"
                                                className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
                                            >
                                                Select Room <div className="icon-arrow-top-right ml-15" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                {/* End .col */}
                            </div>
                            {/* End .row */}

                            <Gallery>
                                <div className="galleryGrid -type-1 pt-30">
                                    <div className="galleryGrid__item relative d-flex">
                                        <Item
                                            original={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[0].attributes?.url}`}
                                            thumbnail={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[0].attributes?.url}`}
                                            width={660}
                                            height={660}
                                        >
                                            {({ ref, open }) => (
                                                <img
                                                    src={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[0].attributes?.url}`}
                                                    ref={ref}
                                                    onClick={open}
                                                    alt="image"
                                                    role="button"
                                                    className="rounded-4"
                                                />
                                            )}
                                        </Item>
                                        {/* <div className="absolute px-20 py-20 col-12 d-flex justify-end">
                                        <button className="button -blue-1 size-40 rounded-full flex-center bg-white text-dark-1">
                                            <i className="icon-heart text-16" />
                                        </button>
                                    </div> */}
                                    </div>
                                    {/* End .galleryGrid__item */}

                                    {
                                        tourDetail?.data[0].attributes?.images?.data.length >= 2 &&

                                        <div className="galleryGrid__item">
                                            <Item
                                                original={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[1].attributes?.url}`}
                                                thumbnail={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[1].attributes?.url}`}
                                                width={450}
                                                height={375}
                                            >
                                                {({ ref, open }) => (
                                                    <img
                                                        ref={ref}
                                                        onClick={open}
                                                        src={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[1].attributes?.url}`}
                                                        alt="image"
                                                        className="rounded-4"
                                                        role="button"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                    }

                                    {/* End .galleryGrid__item */}

                                    {
                                        tourDetail?.data[0].attributes?.images?.data.length >= 3 &&

                                        <div className="galleryGrid__item">
                                            <Item
                                                original={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[2].attributes?.url}`}
                                                thumbnail={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[2].attributes?.url}`}
                                                width={450}
                                                height={375}
                                            >
                                                {({ ref, open }) => (
                                                    <img
                                                        ref={ref}
                                                        onClick={open}
                                                        src={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[2].attributes?.url}`}
                                                        alt="image"
                                                        className="rounded-4"
                                                        role="button"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                    }
                                    {/* End .galleryGrid__item */}

                                    {
                                        tourDetail?.data[0].attributes?.images?.data.length >= 4 &&

                                        <div className="galleryGrid__item">
                                            <Item
                                                original={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[3].attributes?.url}`}
                                                thumbnail={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[3].attributes?.url}`}
                                                width={450}
                                                height={375}
                                            >
                                                {({ ref, open }) => (
                                                    <img
                                                        ref={ref}
                                                        onClick={open}
                                                        src={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[3].attributes?.url}`}
                                                        alt="image"
                                                        className="rounded-4"
                                                        role="button"
                                                    />
                                                )}
                                            </Item>
                                        </div>
                                    }
                                    {/* End .galleryGrid__item */}

                                    {
                                        tourDetail?.data[0].attributes?.images?.data.length >= 5 &&
                                        <div className="galleryGrid__item relative d-flex">
                                            <img
                                                src={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[4].attributes?.url}`}
                                                alt="image"
                                                className={`rounded-4 ${style['customImage']}`}
                                            />
                                            <div className="absolute px-10 py-10 col-12 h-full d-flex justify-end items-end">
                                                <Item
                                                    original={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[4].attributes?.url}`}
                                                    thumbnail={`${`http://3.74.191.230:1337`}${tourDetail?.data[0].attributes?.images?.data[4].attributes?.url}`}
                                                    width={450}
                                                    height={375}
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
                                    }
                                    {/* End .galleryGrid__item */}
                                </div>
                            </Gallery>
                        </div >
                        {/* End .container */}
                    </section >
                    {/* End gallery grid wrapper */}

                    < section className="pt-30" >
                        <div className="container">
                            <div className="row y-gap-30">
                                <div className="col-xl-8">
                                    <div className="row y-gap-40">
                                        <div className="col-12">
                                            <h3 className="text-22 fw-500">Property highlights</h3>
                                            <PropertyHighlights />
                                        </div>
                                        {/* End .col-12 Property highlights */}

                                        <div id="overview" className="col-12">
                                            <Overview data={tourDetail} />
                                        </div>
                                        {/* End .col-12  Overview */}

                                        <div className="col-12">
                                            <h3 className="text-22 fw-500 pt-40 border-top-light">
                                                Most Popular Facilities
                                            </h3>
                                            <div className="row y-gap-10 pt-20">
                                                <PopularFacilities />
                                            </div>
                                        </div>
                                        {/* End .col-12 Most Popular Facilities */}

                                        <div className="col-12">
                                            <RatingTag />
                                        </div>
                                        {/* End .col-12 This property is in high demand! */}
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

                    < section id="rooms" className="pt-30" >
                        <div className="container">
                            <div className="row pb-20">
                                <div className="col-auto">
                                    <h3 className="text-22 fw-500">Available Rooms</h3>
                                </div>
                            </div>
                            {/* End .row */}
                            <AvailableRooms hotel={hotel} />
                        </div>
                        {/* End .container */}
                    </section >
                    {/* End Available Rooms */}

                    < section className="pt-40" id="reviews" >
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-22 fw-500">Guest reviews</h3>
                                </div>
                            </div>
                            {/* End .row */}

                            <ReviewProgress />
                            {/* End review with progress */}

                            <div className="pt-40">
                                <DetailsReview />
                                {/* End review with details */}
                            </div>

                            <div className="row pt-30">
                                <div className="col-auto">
                                    <a href="#" className="button -md -outline-blue-1 text-blue-1">
                                        Show all 116 reviews{" "}
                                        <div className="icon-arrow-top-right ml-15"></div>
                                    </a>
                                </div>
                            </div>
                            {/* End .row */}
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

                                    <ReplyFormReview />
                                    {/* End ReplyFormReview */}

                                    <ReplyForm />
                                </div>
                            </div>
                        </div>
                    </section >
                    {/* End Reply Comment box section */}

                    < section className="mt-40" id="facilities" >
                        <div className="container">
                            <div className="row x-gap-40 y-gap-40">
                                <div className="col-12">
                                    <h3 className="text-22 fw-500">Facilities of this Hotel</h3>
                                    <div className="row x-gap-40 y-gap-40 pt-20">
                                        <Facilities />
                                    </div>
                                    {/* End .row */}
                                </div>
                                {/* End .col-12 */}
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .container */}
                    </section >
                    {/* End facilites section */}

                    < section className="pt-40" >
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="px-24 py-20 rounded-4 bg-light-2">
                                        <div className="row x-gap-20 y-gap-20 items-center">
                                            <div className="col-auto">
                                                <div className="flex-center size-60 rounded-full bg-white">
                                                    <Image
                                                        width={30}
                                                        height={30}
                                                        src="/img/icons/health.svg"
                                                        alt="icon"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <h4 className="text-18 lh-15 fw-500">
                                                    Extra health &amp; safety measures
                                                </h4>
                                                <div className="text-15 lh-15">
                                                    This property has taken extra health and hygiene measures
                                                    to ensure that your safety is their priority
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section >
                    {/* End health &  safety measures section */}

                    < section className="pt-40" >
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <h3 className="text-22 fw-500">Hotel surroundings</h3>
                                </div>
                            </div>
                            {/* End .row */}

                            <div className="row x-gap-50 y-gap-30 pt-20">
                                <Surroundings />
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .container */}
                    </section >
                    {/* End hotel surroundings */}

                    < section className="pt-40" >
                        <div className="container">
                            <div className="pt-40 border-top-light">
                                <div className="row">
                                    <div className="col-12">
                                        <h3 className="text-22 fw-500">Some helpful facts</h3>
                                    </div>
                                </div>
                                {/* End .row */}

                                <div className="row x-gap-50 y-gap-30 pt-20">
                                    <HelpfulFacts />
                                </div>
                                {/* End .row */}
                            </div>
                            {/* End .pt-40 */}
                        </div>
                        {/* End .container */}
                    </section >
                    {/* End helpful facts surroundings */}

                    < section id="faq" className="pt-40 layout-pb-md" >
                        <div className="container">
                            <div className="pt-40 border-top-light">
                                <div className="row y-gap-20">
                                    <div className="col-lg-4">
                                        <h2 className="text-22 fw-500">
                                            FAQs about
                                            <br /> The Crown Hotel
                                        </h2>
                                    </div>
                                    {/* End .row */}

                                    <div className="col-lg-8">
                                        <div className="accordion -simple row y-gap-20 js-accordion">
                                            <Faq />
                                        </div>
                                    </div>
                                    {/* End .col */}
                                </div>
                                {/* End .row */}
                            </div>
                            {/* End .pt-40 */}
                        </div>
                        {/* End .container */}
                    </section >
                    {/* End Faq about sections */}

                    < section className="layout-pt-md layout-pb-lg" >
                        <div className="container">
                            <div className="row justify-center text-center">
                                <div className="col-auto">
                                    <div className="sectionTitle -md">
                                        <h2 className="sectionTitle__title">
                                            Popular properties similar to The Crown Hotel
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
                                <Hotels2 />
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
        else {
            router.push('/404')
        }
    }

    else if (slug) {
        if (path === `/destinations/${slug}`) {
            return (
                <>
                    <Seo pageTitle={data?.data[0]?.attributes.metaFields?.metaTitle} />
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
                                        <h2 className="sectionTitle__title">Recommended Tours</h2>
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
                                <Hotels data={tours} />
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
                                        <h2 className="sectionTitle__title">Popular Yacht Tours</h2>
                                        <p className=" sectionTitle__text mt-5 sm:mt-0">
                                            Interdum et malesuada fames ac ante ipsum
                                        </p>
                                    </div>
                                </div>
                                {/* End .col */}

                                <div className="col-auto">
                                    <Link
                                        href="#tour"
                                        className="button -md -blue-1 bg-blue-1-05 text-blue-1"
                                    >
                                        More <div className="icon-arrow-top-right ml-15" />
                                    </Link>
                                </div>
                                {/* End .col */}
                            </div>
                            {/* End .row */}

                            <div className="row y-gap-30 pt-40 sm:pt-20 item_gap-x30">
                                <Tours data={yachtTours} />
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
                                        <h2 className="sectionTitle__title">Popular Gulet Tours</h2>
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
                                <Activity data={guletTours} />
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
            )
        }
    }
}

export async function getServerSideProps({ params }) {
    const slug = params.slug
    const rSlug = slug.replace(/\-+/g, ' ')

    const data = await getDestinationDetail({ slug })
    const tours = await getTours()
    const toursDestination = await getTourDestination({ rSlug })
    const yachtTours = await getTourCategory({ category: 'Yacht' })
    const guletTours = await getTourCategory({ category: 'Gulet' })
    return { props: { data, toursDestination, yachtTours, guletTours, tours } }
}