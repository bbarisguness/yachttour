const CategoryTypes = () => {
  const categories = [
    { id: 1, name: "Tours", count: 92 },
    { id: 2, name: "Attractions", count: 45 },
    { id: 3, name: "Day Trips", count: 21 },
    { id: 4, name: "Outdoor Activities", count: 78 },
    { id: 5, name: "Concerts & Shows", count: 679 },
  ];

  return (
    <>
      {categories.map((category) => (
        <div
          className="row y-gap-10 items-center justify-between"
          key={category.name}
        >
          <div className="col-auto">
            <div className="form-checkbox d-flex items-center">
              <input onClick={(e) => console.log(e.target.getAttribute("data-id"))} data-id={category.id} type="checkbox" />
              <div className="form-checkbox__mark">
                <div className="form-checkbox__icon icon-check" />
              </div>
              <div className="text-15 ml-10">{category.name}</div>
            </div>
          </div>
          <div className="col-auto">
            <div className="text-15 text-light-1">{category.count}</div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CategoryTypes;
