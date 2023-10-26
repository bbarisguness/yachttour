const Specifications = ({ data }) => {
  const speciContent = [
    { id: 1, name: "Make", content: "Honda" },
    { id: 2, name: "Model", content: "Honda" },
    { id: 3, name: "Made Year", content: data?.data[0]?.attributes?.year },
    { id: 4, name: "Cabin", content: data?.data[0]?.attributes?.cabin },
    { id: 5, name: "Width", content: data?.data[0]?.attributes?.width },
    { id: 6, name: "Version", content: "2.0 Turbo" },
    { id: 7, name: "Horsepower (hp)", content: data?.data[0]?.attributes?.enginehp },
    { id: 8, name: "Transmission", content: "Auto" },
    { id: 9, name: "Condition", content: "New" },
  ];
  return (
    <div className="row y-gap-30 pt-15">
      {speciContent.map((item) => (
        <div className="col-sm-4" key={item?.id}>
          <div className="fw-500">{item?.name}</div>
          <div className="text-15">{item?.content}</div>
        </div>
      ))}
    </div>
  );
};

export default Specifications;
