import React from "react";
import Seo from "../../components/custom/common/Seo";
import LocationTopBar from "../../components/custom/common/LocationTopBar/LocationTopBar";
import Footer from '../../components/custom/footers/footer'
import BlogList from "../../components/custom/blog/blog-list";
import Header from "../../components/custom/home/headers/header2/header";
import { getBlogs } from "../../services/blog";

export default function BlogPage({ data }) {
    return (
        <>
            <Seo pageTitle="Blog" />
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header />
            {/* End Header 1 */}

            {/* <LocationTopBar /> */}
            {/* End location top bar section */}

            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Blog</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">
                                    Lorem ipsum is placeholder text commonly used in site.
                                </p>
                            </div>
                        </div>
                    </div>
                    <BlogList data={data} />
                </div>
            </section>

            <Footer />
            {/* End Call To Actions Section */}
        </>
    )
}

export async function getServerSideProps() {
    const data = await getBlogs()
    return { props: { data } }
}
