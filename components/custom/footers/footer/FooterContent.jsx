import Link from "next/link";
import footerDataContent from "../../../../data/footerContent";

export default function FooterContent({ data, yacht }) {
  return (
    <>
      {footerDataContent.map((item) => (
        <div className="col-lg-4 col-sm-6" key={item.id}>
          <h5 className="text-16 fw-500 mb-30">{item.title}</h5>
          <div className="d-flex y-gap-10 flex-column">
            {item.menuList.slice(0, 8).map((menu, i) => (
              <Link rel={i === 0 ? 'search,nofollow' : 'nofollow'} href={menu.routerPath} key={i}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <div className="col-lg-4 col-sm-6">
        <h5 className="text-16 fw-500 mb-30">Destinations</h5>
        <div className="d-flex y-gap-10 flex-column">

          {data?.data?.slice(0, 8).map((menu, i) => (
            <Link href={`/${menu?.attributes?.slug}`} key={i}>
              {menu?.attributes?.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="col-lg-4 col-sm-6">
        <h5 className="text-16 fw-500 mb-30">Yacht Services</h5>
        <div className="d-flex y-gap-10 flex-column">

          {yacht?.data?.slice(0, 8).map((menu, i) => (
            <Link rel="nofollow" href={`/yacht-services/${menu?.attributes?.slug}`} key={i}>
              {menu?.attributes?.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
