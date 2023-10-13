import React, { useEffect, useState } from 'react'
import TopHeaderFilter from "../../components/tour-list/tour-list-v2/TopHeaderFilter";
import TourProperties from "../../components/tour-list/tour-list-v2/TourProperties";
import Pagination from "../../components/tour-list/common/Pagination";
import Sidebar from "../../components/tour-list/tour-list-v2/Sidebar";
import { getTours, getToursPagination } from "../../services/tours";
import Seo from "../../components/custom/common/Seo";
import Header from "../../components/custom/home/headers/header2/header";
import Footer from "../../components/custom/footers/footer";
import { useRouter } from 'next/router';

export default function Tours({ tours }) {
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
                                <TourProperties data={tours} />
                            </div>
                            {/* End .row */}
                            <Pagination data={tours?.meta} />
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

export async function getServerSideProps({ query }) {
    const page = query.page
    const tours = await getToursPagination({ page })
    return { props: { tours } }
}