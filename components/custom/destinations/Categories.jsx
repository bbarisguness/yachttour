import { useEffect, useState } from "react";
import Slider from "react-slick";
import { getCategories } from "../../../services/category";

const Categories = () => {
  const [count, setCount] = useState(1)
  // const [categories, setCategories] = useState([])

  // useEffect(() => {
  //   getCategories().then((data) => {
  //     setCategories(data)
  //   })
  // }, [])


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // slidesToShow: count > 7 ? 7 : count,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          // slidesToShow: count > 5 ? 5 : count,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          // slidesToShow: count > 4 ? 4 : count,
          slidesToShow: 3,
        },
      },

      {
        breakpoint: 768,
        settings: {
          // slidesToShow: count > 4 ? 4 : count,
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 520,
        settings: {
          // slidesToShow: count > 2 ? 2 : count,
          slidesToShow: 2,
        },
      },
    ],
  };

  const catContent = [
    { id: 1, icon: "icon-bed", catName: "Hotel" },
    { id: 2, icon: "icon-destination", catName: "Tour" },
    { id: 4, icon: "icon-ski", catName: "Activity" },
    { id: 5, icon: "icon-home", catName: "Holiday Rentals" },
    { id: 5, icon: "icon-car", catName: "Car" },
    { id: 6, icon: "icon-yatch", catName: " Cruise" },
    { id: 7, icon: "icon-tickets", catName: " Flights" },
  ];
  return (
    <Slider {...settings}>
      <div className="col">
        <button className="d-flex flex-column justify-center px-20 py-15 rounded-4 border-light text-16 lh-14 fw-500 col-12">
          <i className="icon-destination text-25 mb-10" />
          Tour
        </button>
      </div>
      <div className="col">
        <button className="d-flex flex-column justify-center px-20 py-15 rounded-4 border-light text-16 lh-14 fw-500 col-12">
          <i className="icon-yatch text-25 mb-10" />
          Yacht
        </button>
      </div>
      <div className="col">
        <button className="d-flex flex-column justify-center px-20 py-15 rounded-4 border-light text-16 lh-14 fw-500 col-12">
          <i className="icon-ski text-25 mb-10" />
          Gulet
        </button>
      </div>
    </Slider>
  );
};

export default Categories;
