"use client";

import Link from "next/link";
import { useRouter } from "next/router";
import {
  ProSidebarProvider,
  Sidebar,
  Menu,
  MenuItem,
  SubMenu,
} from "react-pro-sidebar";
import {
  homeItems,
  blogItems,
  pageItems,
  dashboardItems,
  categorieMobileItems,
} from "../../../../data/mainMenuData";
import {
  isActiveLink,
  isActiveParent,
  isActiveParentChaild,
} from "../../../../utils/linkActiveChecker";
import Social from "../../../common/social/Social";
import ContactInfo from "./ContactInfo";

const MobileMenu = ({ destinations }) => {
  const router = useRouter();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img style={{ width: '120px', height: '42px' }} src="/img/logo/logo-dark2.svg" alt="brand" />
        </Link>

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
      </div>

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          {/* <Menu>
            <MenuItem
              component={
                <Link
                  href="/destinations"
                  className={
                    router.pathname === "/destinations"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              Destinations
            </MenuItem>

            <MenuItem
              component={
                <Link
                  href="/yacht-services"
                  className={
                    router.pathname === "/yacht-services"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              Yacht Services
            </MenuItem>

            <MenuItem
              component={
                <Link
                  href="/tours"
                  className={
                    router.pathname === "/tours"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              Tours
            </MenuItem>
           
            <MenuItem
              component={
                <Link
                  href="/contact"
                  className={
                    router.pathname === "/contact" ? "menu-active-link" : ""
                  }
                />
              }
            >
              Contact
            </MenuItem>
         
          </Menu> */}
          <Menu>
            {
              destinations.map((item, i) => {
                return (
                  <MenuItem
                    key={i}
                    component={
                      <Link
                        href={`/${item.attributes.slug}`}
                        className={
                          router.asPath === `/${item.attributes.slug}`
                            ? "menu-active-link"
                            : ""
                        }
                      />
                    }
                  >
                    {item.attributes.name}
                  </MenuItem>
                )
              })
            }


          </Menu>
        </Sidebar>
      </ProSidebarProvider>

      <div className="mobile-footer px-20 py-5 border-top-light"></div>

      <div className="pro-footer">
        <ContactInfo />
        <div className="mt-10">
          <h5 className="text-16 fw-500 mb-10">Follow us on social media</h5>
          <div className="d-flex x-gap-20 items-center">
            <Social />
          </div>
        </div>
        <div className="mt-20">
          <Link
            rel="nofollow"
            className=" button -dark-1 px-30 fw-400 text-14 bg-blue-1 h-50 text-white"
            href="/others-pages/login"
          >
            WhatsApp
          </Link>
        </div>
      </div>
      {/* End pro-footer */}
    </>
  );
};

export default MobileMenu;
