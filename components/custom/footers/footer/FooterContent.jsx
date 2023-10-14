import Link from "next/link";
import footerDataContent from "../../../../data/footerContent";

export default function FooterContent({ data, yacht }) {
  return (
    <>
      {footerDataContent.map((item) => (
        <div className="col-lg-4 col-sm-6" key={item.id}>
          <h5 className="text-16 fw-500 mb-30">{item.title}</h5>
          <div className="d-flex y-gap-10 flex-column">
            {item.menuList.map((menu, i) => (
              <Link href={menu.routerPath} key={i}>
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
      <div className="col-lg-4 col-sm-6">
        <h5 className="text-16 fw-500 mb-30">Destinations</h5>
        <div className="d-flex y-gap-10 flex-column">

          {data?.data?.map((menu, i) => (
            <Link href={`/destinations/${menu?.attributes?.slug}`} key={i}>
              {menu?.attributes?.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="col-lg-4 col-sm-6">
        <h5 className="text-16 fw-500 mb-30">Yacht Services</h5>
        <div className="d-flex y-gap-10 flex-column">

          {yacht?.data?.map((menu, i) => (
            <Link href={`/yacht-services/${menu?.attributes?.slug}`} key={i}>
              {menu?.attributes?.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
