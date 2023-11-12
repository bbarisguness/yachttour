import React, { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = () => {
  const [dates, setDates] = useState(new DateObject().setDay(new Date().getDate()));

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('s')) || '';
    const object = {
      d: dates?.day,
      m: dates?.month.number,
      y: dates?.year,
      t: a?.t,
      l: a?.l,
      i: a?.i,
      p: a?.p,
      n: dates?.month.name
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
        offsetY={10}
        format="MMMM DD YYYY"
      />
    </div>
  );
};

export default DateSearch;
