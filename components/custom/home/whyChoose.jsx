import Image from "next/image";

const WhyChoose = () => {
  const blockContent = [
    {
      id: 1,
      icon: "/img/featureIcons/3/1.svg",
      title: "Best Price Guarantee",
      text: `We guarantee that you'll find the best offers and prices here.`,
      delayAnimation: "100",
    },
    {
      id: 2,
      icon: "/img/featureIcons/3/2.svg",
      title: "Easy & Quick Booking",
      text: `Get an offer from the yacht owners and, rent the best one immediately!`,
      delayAnimation: "200",
    },
    {
      id: 3,
      icon: "/img/featureIcons/3/3.svg",
      title: "Customer Care 24/7",
      text: `Moro’s Customer Care Team are available for you 24/7.`,
      delayAnimation: "300",
    },
  ];
  return (
    <>
      {blockContent.map((item) => (
        <div
          className="col-lg-3 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
        >
          <div className="featureIcon -type-1 ">
            <div className="d-flex justify-center">
              <Image
                width={70}
                height={70}
                src={item.icon}
                alt="image"
                className="js-lazy"
              />
            </div>
            <div className="text-center mt-30">
              <h4 className="text-18 fw-500">{item.title}</h4>
              <p className="text-15 mt-10">{item.text}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default WhyChoose;
