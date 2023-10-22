import React from 'react'
import Seo from '../../components/custom/common/Seo'
import Header from '../../components/custom/home/headers/header2/header'
import Footer from '../../components/custom/footers/footer'
import TopDestinations from "../../components/custom/destinations/TopDestinations";
import LocationTopBar from "../../components/custom/common/LocationTopBar/LocationTopBar";
import { getDestinations } from '../../services/destination';

export default function Destinations({ data }) {
    return (
        <>
            <Seo pageTitle="Destinations" />
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header />
            {/* End Header */}

            {/* <LocationTopBar /> */}
            {/* End location top bar section */}

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
                    {/* End .row */}

                    <div className="row y-gap-40 justify-between pt-40 sm:pt-20">
                        <TopDestinations data={data} />
                    </div>
                    {/* End .row */}
                </div>
            </section>
            {/* End top destination section */}

            <Footer />
            {/* End Footer */}
        </>
    )
}


export async function getServerSideProps() {
    const data = await getDestinations()
    return { props: { data } }
}