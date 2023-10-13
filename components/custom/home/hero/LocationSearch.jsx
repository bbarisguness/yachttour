import { useEffect, useState } from "react";
import { getSearchDestination } from "../../../../services/destination";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [locations, setLocations] = useState([])

  useEffect(() => {
    getSearchDestination({ searchValue }).then((data) => {
      setLocations(data)
    })
  }, [searchValue])

  const handleOptionClick = (item) => {
    setSearchValue(item.attributes.name);
    setSelectedItem(item);
  };

  return (
    <>
      <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">
        <div
          data-bs-toggle="dropdown"
          data-bs-auto-close="true"
          data-bs-offset="0,22"
        >
          <h4 className="text-15 fw-500 ls-2 lh-16">Location</h4>
          <div className="text-15 text-light-1 ls-2 lh-16">
            <input
              autoComplete="off"
              type="search"
              placeholder="Where are you going?"
              className="js-search js-dd-focus"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
        </div>
        {/* End location Field */}

        <div className="shadow-2 dropdown-menu min-width-400">
          <div className="bg-white px-20 py-20 sm:px-0 sm:py-15 rounded-4">
            <ul className="y-gap-5 js-results">
              {locations?.data?.length !== 0 ? locations?.data?.map((item) => (
                <li
                  className={`-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option mb-1 ${selectedItem && selectedItem.id === item.id ? "active" : ""
                    }`}
                  key={item.id}
                  role="button"
                  onClick={() => handleOptionClick(item)}
                >
                  <div className="d-flex">
                    <div className="icon-location-2 text-light-1 text-20 pt-4" />
                    <div className="ml-10">
                      <div className="text-15 lh-12 fw-500 js-search-option-target">
                        {item.attributes.name}
                      </div>
                      <div className="text-14 lh-12 text-light-1 mt-5">
                        Turkey
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

export default SearchBar;
