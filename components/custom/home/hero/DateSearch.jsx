import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = () => {
  // const [dates, setDates] = useState([
  //   new DateObject({ year: 2023, month: 1, day: 22 }),
  //   "December 09 2020",
  //   1597994736000, //unix time in milliseconds (August 21 2020)
  // ]);
  const [dates, setDates] = useState([
    new DateObject(),
    new DateObject().add(1, "day")
    // new DateObject().setDay(14).add(1, "month"),
  ]);


  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('i')) || '';
    if (dates?.[0]?.month?.number) {
      const object = {
        l: a.l,
        p: a.p,
        tourType: a.tourType,
        checkIn: `${dates?.[0].day < 10 ? '0' : ''}${dates?.[0].day}-${dates?.[0].month.number < 10 ? '0' : ''}${dates?.[0].month.number}-${dates?.[0].year}`,
        checkOut: a.checkOut,
      }
      localStorage.setItem('i', JSON.stringify(object));
    }
    if (dates?.[1]?.month?.number) {
      const object = {
        l: a.l,
        c: a.c,
        p: a.p,
        tourType: a.tourType,
        checkIn: a.checkIn,
        checkOut: `${dates?.[1].day < 10 ? '0' : ''}${dates?.[1].day}-${dates?.[1].month.number < 10 ? '0' : ''}${dates?.[1].month.number}-${dates?.[1].year}`,
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
        numberOfMonths={2}
        minDate={new Date()}
        offsetY={10}
        range
        rangeHover
        format="MMMM DD"
      />
    </div>
  );
};

export default DateSearch;
