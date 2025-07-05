import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch2 = () => {
  // const [dates, setDates] = useState([
  //   new DateObject({ year: 2023, month: 1, day: 22 }),
  //   "December 09 2020",
  //   1597994736000, //unix time in milliseconds (August 21 2020)
  // ]);

  // const [dates, setDates] = useState([
  //   new DateObject(),
  //   new DateObject().add(1, "day")
  //   // new DateObject().setDay(14).add(1, "month"),
  // ]);

  const [dates, setDates] = useState(new DateObject())


  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('i')) || '';
    if (dates?.month?.number) {
      const object = {
        l: a.l,
        p: a.p,
        tourType: a.tourType,
        checkIn: `${dates?.day < 10 ? '0' : ''}${dates?.day}-${dates?.month.number < 10 ? '0' : ''}${dates?.month.number}-${dates?.year}`,
        checkOut: a.checkOut,
      }
      localStorage.setItem('i', JSON.stringify(object));
    }
  }, [dates])

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={setDates}
        numberOfMonths={1}
        minDate={new Date()}
        offsetY={10}
        format="MMMM DD"
      />
    </div>
  );
};

export default DateSearch2;
