import React, { useEffect, useState } from 'react'

const counters = [
  { name: "Person", defaultValue: 1 }
];

export default function GuestSearch() {
  const [person, setPerson] = useState(1)

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('s')) || '';
    const object = {
      d: a.d,
      m: a.m,
      y: a.y,
      t: a.t,
      l: a.l,
      i: a.i,
      p: person,
      n: a.n
    }
    localStorage.setItem('s', JSON.stringify(object));
  }, [person])

  function incrementCount() {
    setPerson(person + 1)
  }

  function decrementCount() {
    if (person > 1) {
      setPerson(person - 1)
    }
  }

  return (
    <div className="searchMenu-guests px-20 py-10 border-light rounded-4 js-form-dd js-form-counters">
      <div
        data-bs-toggle="dropdown"
        data-bs-auto-close="outside"
        aria-expanded="false"
        data-bs-offset="0,22"
      >
        <h4 className="text-15 fw-500 ls-2 lh-16">Guest</h4>
        <div className="text-15 text-light-1 ls-2 lh-16">
          <span className="js-count-adult">{person}</span> person
        </div>
      </div>
      {/* End guest */}

      <div className="shadow-2 dropdown-menu min-width-400">
        <div className="bg-white px-30 py-30 rounded-4 counter-box">
          <div className="row y-gap-10 justify-between items-center">
            <div className="col-auto">
              <div className="text-15 lh-12 fw-500">Person</div>
            </div>
            {/* End .col-auto */}
            <div className="col-auto">
              <div className="d-flex items-center js-counter">
                <button
                  className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"
                  onClick={() => decrementCount()}
                >
                  <i className="icon-minus text-12" />
                </button>
                {/* decrement button */}
                <div className="flex-center size-20 ml-15 mr-15">
                  <div className="text-15 js-count">{person}</div>
                </div>
                {/* counter text  */}
                <button
                  className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"
                  onClick={() => incrementCount()}
                >
                  <i className="icon-plus text-12" />
                </button>
                {/* increment button */}
              </div>
            </div>
            {/* End .col-auto */}
          </div>
          {/* End .row */}
          <div className="border-top-light mt-24 mb-24" />
        </div>
      </div>
    </div>
  )
}

