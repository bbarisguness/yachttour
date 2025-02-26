import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateRangeSearch = () => {
  const [dates, setDates] = useState([new DateObject().setDay(new Date().getDate()), new DateObject().add(4, "days")]);

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('s')) || '';
    const object = {
      d: dates[0]?.day,
      m: dates[0]?.month.number,
      y: dates[0]?.year,
      t: a?.t,
      et: a?.et,
      l: a?.l,
      i: a?.i,
      p: a?.p,
      n: dates[0]?.month.name,
      od: dates[1]?.day,
      om: dates[1]?.month.number,
      oy: dates[1]?.year,
      on: dates[1]?.month.name
    }
    localStorage.setItem('s', JSON.stringify(object));
  }, [dates])

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={setDates}
        numberOfMonths={1}
        range
        offsetY={10}
        format="MMMM DD YYYY"
      />
    </div>
  );
};

export default DateRangeSearch;
