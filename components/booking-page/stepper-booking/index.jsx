import React, { useEffect, useState } from "react";
import CustomerInfo from "../CustomerInfo";
import PaymentInfo from "../PaymentInfo";
import OrderSubmittedInfo from "../OrderSubmittedInfo";
import { postReservation, postReservationInfo, getReservation } from "../../../services/reservation";
import emailjs from '@emailjs/browser';
import { useRouter } from "next/router";

const Index = ({ dataa, rezOpt }) => {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0);
  const [date, setDate] = useState(new Date('05 October 2011 14:48 GMT+3'))
  const [endDate, setEndDate] = useState(new Date('05 October 2011 14:48 GMT+3'))
  const [paymentType, setPaymentType] = useState('Cash')
  const [paid, setPaid] = useState(false)
  const [finish, setFinish] = useState(false)
  const [orderNo, setOrderNo] = useState(Math.floor(Math.random() * 5000 + Date.now()))

  useEffect(() => {

    if (rezOpt?.t?.replace(/\s+/g, '')?.split('-')[0]) {
      setDate(new Date(`${rezOpt.d} ${rezOpt.n} ${rezOpt.y} ${rezOpt?.t?.replace(/\s+/g, '')?.split('-')[0]} GMT+3`))
    } else {
      setDate(new Date(`${rezOpt.d} ${rezOpt.n} ${rezOpt.y} ${rezOpt?.t} GMT+3`))
    }

    // setDate(new Date(`${rezOpt.d} ${rezOpt.n} ${rezOpt.y} ${rezOpt.t} GMT+3`))
    if (rezOpt?.od && rezOpt?.on && rezOpt?.oy && rezOpt?.et) {
      setEndDate(new Date(`${rezOpt.od} ${rezOpt.on} ${rezOpt.oy} ${rezOpt.et} GMT+3`))
    } else {
      if (rezOpt?.t?.replace(/\s+/g, '')?.split('-')[1]) {
        setEndDate(new Date(`${rezOpt.d} ${rezOpt.n} ${rezOpt.y} ${rezOpt?.t?.replace(/\s+/g, '')?.split('-')[1]} GMT+3`))
      } else {
        setEndDate(new Date(`${rezOpt.d} ${rezOpt.n} ${rezOpt.y} ${rezOpt?.t} GMT+3`))
      }
    }
  }, [])

  useEffect(() => {
    if (paymentType == 'Cash') {
      setPaid(false)
    }
    else if (paymentType == 'Bank Transfer') {
      setPaid(false)
    }
    else if (paymentType == 'Credit Card') {
      setPaid(true)
    }
  }, [paymentType])


  const [userInfo, setUserInfo] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
    note: '',
    port: rezOpt?.i
  })

  const rezInfo = {
    note: userInfo.note,
    reservationStatusType: "Reserved",
    date: date,
    endDate: endDate,
    amount: dataa?.attributes?.price,
    qty: rezOpt?.p,
    total: rezOpt?.p * dataa?.attributes?.price,
    paymentType: paymentType,
    isPaid: paid,
    tour: dataa?.id,
    orderNumber: orderNo
  }

  const validateEmailRegex = /^\S+@\S+\.\S+$/;

  const steps = [
    {
      title: currentStep === 0 ? 'Personal Details' : '',
      stepNo: "1",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: <CustomerInfo userInfo={userInfo} setUserInfo={setUserInfo} rezOpt={rezOpt} dataa={dataa} />,
    },
    {
      title: currentStep === 1 ? 'Payment Details' : '',
      stepNo: "2",
      stepBar: (
        <>
          <div className="col d-none d-sm-block">
            <div className="w-full h-1 bg-border"></div>
          </div>
        </>
      ),
      content: <PaymentInfo dataa={dataa} rezOpt={rezOpt} setPaymentType={setPaymentType} paymentType={paymentType} />,
    },
    {
      title: currentStep === 2 ? 'Final' : '',
      stepNo: "3",
      stepBar: "",
      content: <OrderSubmittedInfo orderNo={orderNo} userInfo={userInfo} paymentType={paymentType} dataa={dataa} rezOpt={rezOpt} />,
    },
  ];

  const renderStep = () => {
    const { content } = steps[currentStep];
    return <>{content}</>;
  };

  const emailData = {
    email: userInfo?.email,
    from_name: userInfo?.name,
    port: rezOpt?.l,
    date: `${rezOpt?.m}.${rezOpt?.d}.${rezOpt?.y}`,
    qty: rezInfo?.qty,
    total: rezInfo?.total,
    orderNumber: rezInfo?.orderNumber,
    paymentType: rezInfo?.paymentType
  }

  const sendEmail = (e) => {
    emailjs.send('service_933gt9l', 'template_o1oz11h', emailData, '6N_ClLffsmQBOhi1U')
      .then((result) => {

      }, (error) => {
        console.log(error.text);
      });
  };

  useEffect(() => {
    if (currentStep == 2) {
      postReservation({ data: rezInfo }).then((res) => {
        const id = res?.data?.id
        postReservationInfo({ data: userInfo, id }).then((res) => {
          sendEmail()
          setFinish(true)
          localStorage.removeItem('s')
          localStorage.removeItem('item')
          localStorage.removeItem('bVal')
        })
      })
    } else if (currentStep >= 1) {
      const object = {
        name: userInfo?.name,
        surname: userInfo?.surname,
        email: userInfo?.email,
        phone: userInfo?.phone,
        note: userInfo?.note
      }
      localStorage.setItem('bVal', JSON.stringify(object));
    }
  }, [currentStep])

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      if (userInfo.name && userInfo.surname && userInfo.email && userInfo.phone) {
        if (validateEmailRegex.test(userInfo.email)) {
          setCurrentStep(currentStep + 1);
        }
      }
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      if (finish === false) {
        setCurrentStep(currentStep - 1);
      }
    } else {
      router.replace('/')
    }
  };

  // function changeHandle(index) {
  //   if (userInfo.name && userInfo.surname && userInfo.email && userInfo.phone) {
  //     if (validateEmailRegex.test(userInfo.email)) {
  //       if (finish === false) {
  //         setCurrentStep(index)
  //       }
  //     }
  //   }
  // }

  return (
    <>
      <div className="row x-gap-40 y-gap-30 items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="col-auto">
              <div
                className="d-flex items-center cursor-pointer transition"
              // onClick={() => changeHandle(index)}
              >
                <div
                  className={
                    currentStep === index
                      ? "active size-40 rounded-full flex-center bg-blue-1"
                      : "size-40 rounded-full flex-center bg-blue-1-05 text-blue-1 fw-500"
                  }
                >
                  {currentStep === index ? (
                    <>
                      <i className="icon-check text-16 text-white"></i>
                    </>
                  ) : (
                    <>
                      <span>{step.stepNo}</span>
                    </>
                  )}
                </div>

                <div className="text-18 fw-500 ml-10"> {step.title}</div>
              </div>
            </div>
            {/* End .col */}

            {step.stepBar}
          </React.Fragment>
        ))}
      </div>
      {/* End stepper header part */}

      <div className="row">{renderStep()}</div>
      {/* End main content */}

      <div className="row x-gap-20 y-gap-20 pt-20">
        <div className="col-auto">
          <button
            className="button h-60 px-24 -blue-1 bg-light-2"
            // disabled={currentStep === 0}
            onClick={previousStep}
          >
            Previous
          </button>
        </div>
        {/* End prvious btn */}

        <div className="col-auto">
          <button
            className="button h-60 px-24 -dark-1 bg-blue-1 text-white"
            disabled={currentStep === steps.length - 1}
            onClick={nextStep}
          >
            Next <div className="icon-arrow-top-right ml-15" />
          </button>
        </div>
        {/* End next btn */}
      </div>
      {/* End stepper button */}
    </>
  );
};

export default Index;
