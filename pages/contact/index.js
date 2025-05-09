import dynamic from "next/dynamic";
import Image from "next/image";
import Seo from "../../components/custom/common/Seo";
import Header from '../../components/custom/home/headers/header2/header'
import Footer from '../../components/custom/footers/footer'
import WhyChoose from "../../components/custom/block/BlockGuide";
import Address from "../../components/custom/block/Address";
import Social from "../../components/custom/common/social/Social";
import ContactForm from "../../components/custom/common/ContactForm";
import LocationTopBar from "../../components/custom/common/LocationTopBar/LocationTopBar";

export default function Contact() {
    return (
        <>
            <Seo pageTitle="Contact" />
            {/* End Page Title */}

            <div className="header-margin"></div>
            {/* header top margin */}

            <Header />
            {/* End Header 1 */}

            <div style={{ height: '61px' }}>

            </div>
            {/* <LocationTopBar /> */}
            {/* End location top bar section */}

            <div className="map-outer">
                <div className="map-canvas">
                    <div style={{ height: '100%', width: '100%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundImage: `url(${process.env.NEXT_PUBLIC_BACKEND_URL}/uploads/img4_8a45f6f666.jpg)` }}></div>
                </div>
            </div>

            {/* End map section */}

            <section className="relative container">
                <div className="row justify-end">
                    <div className="col-xl-5 col-lg-7">
                        <div className="map-form px-40 pt-40 pb-50 lg:px-30 lg:py-30 md:px-24 md:py-24 bg-white rounded-4 shadow-4">
                            <div className="text-22 fw-500">Send a message</div>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
            {/* End contact section form */}

            <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                    <div className="row x-gap-80 y-gap-20 justify-between">
                        <div className="col-12">
                            <div className="text-30 sm:text-24 fw-600">Contact Us</div>
                        </div>
                        {/* End .col */}

                        <Address />
                        {/* End address com */}

                        <div className="col-auto">
                            <div className="text-14 text-light-1">
                                Follow us on social media
                            </div>
                            <div className="d-flex x-gap-20 items-center mt-10">
                                <Social />
                            </div>
                        </div>
                        {/* End .col */}
                    </div>
                    {/* End .row */}
                </div>
            </section>
            {/* End Address Section */}

            <Footer />
            {/* End Call To Actions Section */}
        </>
    )
}
