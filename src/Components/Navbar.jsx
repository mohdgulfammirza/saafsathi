import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active link ke liye styling
  const navLinkClass = ({ isActive }) =>
    `transition-colors pb-1 block ${
      isActive
        ? "text-[#1a2e7a] border-b-2 border-green-500 font-semibold"
        : "text-gray-700 hover:text-[#1a2e7a] border-b-2 border-transparent"
    }`;

  return (
    <>
      <nav className="w-full bg-white border-b border-gray-100 relative z-50">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          {/* 1. Logo */}
          <div className="flex-shrink-0 flex items-center">
            {/* Yahan apni SaafSaathi Logo image lagayein */}

            <img
              src="src\assets\Logo.png"
              alt="SaafSaathi Logo"
              className="h-12 w-auto object-contain"
            />
          </div>

          {/* 2. Desktop Menu Links */}
          <div className="hidden lg:flex items-center space-x-8 text-[15px] font-medium">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/ourproducts" className={navLinkClass}>
              <span className="flex items-center gap-1">
                Our Products
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </span>
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* 3. Desktop Shop Now Button */}
          <div className="hidden lg:block">
            <button className="bg-[#1a2e7a] hover:bg-blue-900 text-white px-6 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium transition-colors">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              Shop Now
            </button>
          </div>

          {/* 4. Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#1a2e7a] focus:outline-none"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* 5. Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg lg:hidden flex flex-col py-4 px-6 space-y-4">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/ourproducts"
              className={navLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Our Products
            </NavLink>
            <NavLink
              to="/about"
              className={navLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={navLinkClass}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </nav>
    </>
  );
}
