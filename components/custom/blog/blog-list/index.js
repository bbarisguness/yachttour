import Image from "next/image";
import Link from "next/link";
// import yachtsData from "../../../../customdata/yachts";
import { getBlogs } from "../../../../services/blog";
import { useEffect, useState } from "react";

const BlogList = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getBlogs().then((data) => {
            setData(data.data)
        })
    }, [])
    return (
        <>
            <div className="tabs -pills-3 pt-30 js-tabs">
                <div className="row y-gap-30 pt-30">
                    {data.map((item) => (
                        <div className="col-lg-4 col-sm-6" key={item?.id}>
                            <Link
                                href={`/blog/${item?.attributes?.slug}`}
                                className="blogCard -type-1 d-block "
                            >
                                <div className="blogCard__image">
                                    <div className="rounded-8">
                                        <Image
                                            width={400}
                                            height={300}
                                            style={{ minHeight: '312px', maxHeight: '312px' }}
                                            className="cover w-100 img-fluid"
                                            src={`${"http://3.74.191.230:1337"}${item?.attributes?.image?.data[0]?.attributes.url}`}
                                            alt="image"
                                        />
                                    </div>
                                </div>
                                <div className="pt-20">
                                    <h4 className="text-dark-1 text-18 fw-500">{item.attributes.title}</h4>
                                    <div className="text-light-1 text-15 lh-14 mt-5">
                                        {item.attributes.shortText}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                {/* End .row */}
            </div>
        </>
    );
};

export default BlogList;
