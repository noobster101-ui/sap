"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 200) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header dark:bg-gray-dark/95 left-0 z-40 z-9999 flex w-full items-center bg-white/95 shadow-md backdrop-blur-sm ${
          sticky ? "absolute fixed" : ""
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-auto px-4">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-3 lg:py-2" : "py-2"
                } `}
              >
                <Image
                  src="/images/brands/logo.png"
                  alt="logo"
                  width={250}
                  height={100}
                  className="rounded"
                />
              </Link>
            </div>
            <div className="mr-5 ml-auto hidden items-center lg:flex">
              <nav>
                <ul className="flex items-center space-x-8">
                  {menuData.map((menuItem, index) => (
                    <li key={index}>
                      {menuItem.path ? (
                        <Link
                          href={menuItem.path}
                          className={`flex items-center py-6 text-base font-semibold ${
                            usePathName === menuItem.path
                              ? "text-primary"
                              : "text-dark hover:text-primary dark:text-white dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <ThemeToggler />
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="ring-primary block p-2 lg:hidden"
              >
                <span className="mb-1 block h-0.5 w-6 bg-black dark:bg-white"></span>
                <span className="mb-1 block h-0.5 w-6 bg-black dark:bg-white"></span>
                <span className="block h-0.5 w-6 bg-black dark:bg-white"></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
