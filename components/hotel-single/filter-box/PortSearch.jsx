import { useEffect, useState } from "react";
import { getSearchCategory } from "../../../services/category";

const PortSearch = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedId, setSelectedId] = useState(null)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    setCategories(data?.data[0]?.attributes?.ports)
  }, [])

  const handleOptionClick = (item) => {
    setSelectedItem(item.attributes.name);
    setSelectedId(item.id)
  };

  useEffect(() => {
    const a = JSON.parse(localStorage.getItem('s')) || '';
    const object = {
      d: a.d,
      m: a.m,
      y: a.y,
      t: a.t,
      l: selectedItem,
      i: selectedId,
      p: a.p,
      n: a.n
    }
    localStorage.setItem('s', JSON.stringify(object));
  }, [selectedItem])

  return (
    <>
      <div className="searchMenu-guests px-20 py-10 border-light rounded-4 js-form-dd js-form-counters">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <h4 className="text-15 fw-500 ls-2 lh-16">Port</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <div>{selectedItem == null && 'Select Port'} {selectedItem !== null && selectedItem}</div>
          </div>
        </div>
        {/* End location Field */}

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {categories?.data?.length !== 0 ? categories?.data?.map((item, index) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-10 js-search-option mb-1 ${selectedItem && selectedItem.id === item.id ? "active" : ""
                    }`}
                  key={index}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-0 fw-500 js-search-option-target">
                        {item.attributes.name}
                      </div>

                    </div>
                  </div>
                </li>
              )) : "Destination Not Found"}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortSearch;
