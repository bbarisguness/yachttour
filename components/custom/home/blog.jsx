import Image from "next/image";
import Link from "next/link";

const Blog = ({ data }) => {

  return (
    <>
      {data?.data.slice(0, 3).map((item, index) => (
        <div
          className="col-lg-4 col-sm-6"
          key={item.id}
          data-aos="fade"
          data-aos-delay={(index + 1) * 100}
        >
          <Link
            href={`/blog/${item?.attributes?.slug}`}
            className="blogCard -type-1 d-block "
          >
            <div className="blogCard__image">
              <div className="ratio ratio-4:3 rounded-4 rounded-8">
                <Image
                  width={400}
                  height={300}
                  className="img-ratio js-lazy"
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${item?.attributes?.image?.data[0].attributes?.url}`}
                  alt="image"
                />
              </div>
            </div>
            <div className="mt-20">
              <h4 className="text-dark-1 text-18 fw-500">{item?.attributes?.title}</h4>
              <div className="text-light-1 text-15 lh-14 mt-5">{item?.attributes?.shortText}</div>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Blog;
