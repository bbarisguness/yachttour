import Link from "next/link";

import { useRouter } from "next/router";

const MainMenu = ({ style = "", destinations }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      {/* <ul className={`menu__nav ${style} -is-active`}>
        <li className={router.pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li>
       

        <li className={router.pathname === "/yacht-services" ? "current" : ""}>
          <Link href="/yacht-services">Yacht Services</Link>
        </li>
        
        <li className={router.pathname === "/tours" ? "current" : ""}>
          <Link href="/tours">Tours</Link>
        </li>
     

        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul> */}
      <ul className={`menu__nav ${style} -is-active`}>
        
        <li className={router.pathname === "/" ? "current" : ""}>
          <Link href="/">Home</Link>
        </li>

        <li className={`${router.pathname === '/destinations' && 'current'} menu-item-has-children`}>
          <Link href="/destinations">
            <span className="mr-10">Destinations</span>
            <i className="icon icon-chevron-sm-down"></i>
          </Link>
          <ul className="subnav">
            {
              destinations.map((item, i) => {
                return (
                  <li key={i} className={router.asPath === `/${item.attributes.slug}` ? "current" : ""}>
                    <Link href={`/${item.attributes.slug}`}>{item.attributes.name}</Link>
                  </li>
                )
              })
            }
          </ul>
        </li>

        <li className={router.pathname === "/tours" ? "current" : ""}>
          <Link href="/tours">Tours</Link>
        </li>


        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

    </nav>
  );
};

export default MainMenu;
