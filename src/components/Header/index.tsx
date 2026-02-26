"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Dropdown toggle
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header dark:bg-gray-dark/95 left-0 z-40 z-[99] flex w-full items-center bg-white/95 shadow-md backdrop-blur-sm ${
          sticky ? "absolute fixed" : "relative"
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
                  src="/images/brands/logo2.png"
                  alt="logo"
                  width={200}
                  height={70}
                  className="rounded"
                />
              </Link>
            </div>
            <div className="mr-5 ml-auto hidden items-center lg:flex">
              <nav>
                <ul className="flex items-center space-x-8">
                  {menuData.map((menuItem, index) => (
                    <li key={index} className="relative">
                      {menuItem.submenu ? (
                        <>
                          <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="text-dark hover:text-primary flex items-center py-6 text-base font-semibold dark:text-white dark:hover:text-white"
                          >
                            {menuItem.title}
                            <svg
                              className={`ml-2 h-4 w-4 transition-transform ${
                                dropdownOpen ? "rotate-180" : ""
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          </button>
                          {/* Desktop Dropdown */}
                          <ul
                            ref={dropdownRef}
                            className={`dark:bg-dark absolute top-full left-0 z-50 mt-2 min-w-[200px] rounded-sm bg-white py-2 shadow-lg ${
                              dropdownOpen ? "block" : "hidden"
                            }`}
                          >
                            {menuItem.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link
                                  href={subItem.path || "#"}
                                  className="text-dark hover:bg-primary dark:hover:bg-primary block px-4 py-2 text-base font-semibold hover:text-white dark:text-white"
                                >
                                  {subItem.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : (
                        <Link
                          href={menuItem.path || "#"}
                          className={`flex items-center py-6 text-base font-semibold ${
                            usePathName === menuItem.path
                              ? "text-primary"
                              : "text-dark hover:text-primary dark:text-white dark:hover:text-white"
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      )}
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

      {/* Mobile Menu */}
      {navbarOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 lg:hidden"
          onClick={() => setNavbarOpen(false)}
        >
          <div
            className="dark:bg-dark fixed top-0 right-0 h-full w-80 bg-white p-6 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={navbarToggleHandler}
              className="mb-4 flex w-full justify-end text-2xl font-bold"
            >
              ×
            </button>
            <nav>
              <ul className="space-y-4">
                {menuData.map((menuItem, index) => (
                  <li key={index}>
                    {menuItem.submenu ? (
                      <div>
                        <span className="text-dark block py-2 text-base font-semibold dark:text-white">
                          {menuItem.title}
                        </span>
                        <ul className="border-primary ml-4 space-y-2 border-l-2 pl-4">
                          {menuItem.submenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link
                                href={subItem.path || "#"}
                                onClick={() => setNavbarOpen(false)}
                                className="text-dark hover:text-primary block py-1 text-base dark:text-white"
                              >
                                {subItem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <Link
                        href={menuItem.path || "#"}
                        onClick={() => setNavbarOpen(false)}
                        className={`block py-2 text-base font-semibold ${
                          usePathName === menuItem.path
                            ? "text-primary"
                            : "text-dark hover:text-primary dark:text-white"
                        }`}
                      >
                        {menuItem.title}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
