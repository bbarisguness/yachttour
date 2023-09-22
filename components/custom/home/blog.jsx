import Image from "next/image";
import Link from "next/link";
import blogsData from "../../../data/blogs";
import { getBlogs } from "../../../services/blog";
import { useEffect, useState } from "react";

const Blog = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    getBlogs().then((data) => {
      setData(data.data)
    })
  }, [])

  return (
    <>
      {data.slice(0, 3).map((item, index) => (
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
                  src={`${"http://3.74.191.230:1337"}${item?.attributes?.image?.data[0].attributes?.url}`}
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
