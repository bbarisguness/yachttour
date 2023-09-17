import Image from "next/image";
import yachtsData from "../../../../customdata/yachts";
import { useEffect, useState } from "react";
import { getBlogs } from "../../../../services/blog";

const RelatedYacht = () => {

  const [data, setData] = useState([])
  useEffect(() => {
    getBlogs().then((data) => {
      setData(data.data)
    })
  }, [])
  console.log(data);

  return (
    <>
      {data.slice(0, 4).map((item) => (
        <div className="col-lg-3 col-sm-6" key={item.id}>
          <a
            href={`/blog/${item.attributes.slug}`}
            className="blogCard -type-2 d-block bg-white rounded-4 shadow-4"
          >
            <div className="blogCard__image">
              <div className="rounded-4">
                <Image
                  width={400}
                  height={300}
                  style={{ minHeight: '234px' }}
                  className="cover w-100 img-fluid"
                  src={`${"http://3.74.191.230:1337"}${item.attributes.image.data[0].attributes.formats.small.url}`}
                  alt="image"
                />
              </div>
            </div>
            <div className="px-20 py-20">
              <h4 className="text-dark-1 text-18 fw-500">{item.attributes.title}</h4>
              <div className="text-light-1 text-15 lh-14 mt-10">
                {item.attributes.shortText}
              </div>
            </div>
          </a>
        </div>
      ))}
    </>
  );
};

export default RelatedYacht;
