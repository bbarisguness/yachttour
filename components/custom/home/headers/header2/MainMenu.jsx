import Link from "next/link";

import { useRouter } from "next/router";

const MainMenu = ({ style = "" }) => {
  const router = useRouter();

  return (
    <nav className="menu js-navList">
      <ul className={`menu__nav ${style} -is-active`}>
        <li className={router.pathname === "/destinations" ? "current" : ""}>
          <Link href="/destinations">Destinations</Link>
        </li>
        {/* End Destinatinos single menu */}

        {/* <li className={router.pathname === "/services" ? "current" : ""}>
          <Link href="/services">Services</Link>
        </li>
         End Services single menu  */}

        <li className={router.pathname === "/yacht-services" ? "current" : ""}>
          <Link href="/yacht-services">Yacht Services</Link>
        </li>
        {/* End Yacht Services single menu */}

        <li className={router.pathname === "/blog" ? "current" : ""}>
          <Link href="/blog">Blog</Link>
        </li>
        {/* End Blog single menu */}

        <li className={router.pathname === "/about-us" ? "current" : ""}>
          <Link href="/about-us">About Us</Link>
        </li>
        {/* End About Us single menu */}

        <li className={router.pathname === "/contact" ? "current" : ""}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
