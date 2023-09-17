import Image from "next/image";

const Block1 = ({ data }) => {
  return (
    <>
      <div className="col-lg-5">
        <h2 className="text-30 fw-600">{data?.title}</h2>
        <p className="mt-5">{data?.shortText}</p>
        <p style={{ whiteSpace: 'pre-line' }} className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
          {data?.longText}
        </p>
      </div>
      {/* End .col */}

      <div className="col-lg-6">
        <Image
          width={400}
          height={400}
          src="/img/pages/about/2.png"
          alt="image"
          className="rounded-4 w-100"
        />
      </div>
      {/* End .col */}
    </>
  );
};

export default Block1;
