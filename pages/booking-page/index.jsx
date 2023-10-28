import React, { useEffect, useState } from 'react'
import Seo from "../../components/common/Seo";
import StepperBooking from "../../components/booking-page/stepper-booking";
import Footer from "../../components/custom/footers/footer";
import Header from "../../components/custom/home/headers/header2/header";
import { useRouter } from 'next/router';

export default function BookingPage() {
    const router = useRouter()
    const [dataa, setDataa] = useState('')
    const [rezOpt, setRezOpt] = useState('')
    const [ready, setReady] = useState(false)

    useEffect(() => {
        setDataa(JSON.parse(localStorage.getItem('item')))
        setRezOpt(JSON.parse(localStorage.getItem('s')))
        setReady(true)
    }, [])

    useEffect(() => {
        if (ready) {
            if (dataa && rezOpt && rezOpt?.d && rezOpt?.m && rezOpt?.p && rezOpt?.t !== null && rezOpt?.y) {
            } else {
                router.push('/tours')
            }
        }
    }, [dataa])

    if (dataa && rezOpt && rezOpt?.d && rezOpt?.m && rezOpt?.p && rezOpt?.t !== null && rezOpt?.y) {
        return (
            <>
                <Seo pageTitle="Tour Booking Page" />
                {/* End Page Title */}

                <div className="header-margin"></div>
                {/* header top margin */}

                <Header />
                {/* End Header 1 */}

                <section className="pt-40 layout-pb-md">
                    <div className="container">
                        <StepperBooking rezOpt={rezOpt} dataa={dataa} />
                    </div>
                    {/* End container */}
                </section>
                {/* End stepper */}

                <Footer />
            </>
        )
    }
}
