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
import Social from "../../../common/social/Social";
import ContactInfo from "./ContactInfo";

const MobileMenu = () => {
  const router = useRouter();

  return (
    <>
      <div className="pro-header d-flex align-items-center justify-between border-bottom-light">
        <Link href="/">
          <img src="/img/general/logo-dark.svg" alt="brand" />
        </Link>
        {/* End logo */}

        <div
          className="fix-icon"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="icon icon-close"></i>
        </div>
        {/* icon close */}
      </div>
      {/* End pro-header */}

      <ProSidebarProvider>
        <Sidebar width="400" backgroundColor="#fff">
          <Menu>
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
            {/* End  Destinations Menu */}

            {/* <MenuItem
              component={
                <Link
                  href="/services"
                  className={
                    router.pathname === "/services"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              Services
            </MenuItem>
            End  Services Menu */}

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
            {/* End  Yacht Services Menu */}

            {/* End  Blog Menu */}

            <MenuItem
              component={
                <Link
                  href="/about-us"
                  className={
                    router.pathname === "/about-us"
                      ? "menu-active-link"
                      : ""
                  }
                />
              }
            >
              About Us
            </MenuItem>
            {/* End About Us Menu */}

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
            {/* End Contact  Menu */}
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
