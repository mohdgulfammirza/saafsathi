// import React from "react";

// export function Banner() {
//   return (
//     <>
//       <section className="w-full max-w-[1440px] mx-auto relative flex flex-col lg:block">
//         {/* 1. Banner Image */}
//         <img
//           src="src\assets\Banner.avif"
//           alt="SaafSaathi Hero Banner"
//           className="w-full h-auto object-cover block"
//         />

//         {/* 2. Buttons Container */}
//         {/* Desktop (lg) par image ke upar absolute position, Mobile par image ke neeche normal flow */}
//         <div
//           className="
//         flex items-center justify-center gap-4 px-6 py-6
//         lg:absolute lg:bottom-16 lg:left-12 xl:left-20 lg:py-0 lg:px-0 lg:justify-start lg:bg-transparent
//       "
//         >
//           {/* Explore Products Button */}
//           <button className="bg-[#25a832] hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 text-[15px] font-semibold transition-colors shadow-lg">
//             Explore Products
//             <svg
//               className="w-5 h-5"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M14 5l7 7m0 0l-7 7m7-7H3"
//               ></path>
//             </svg>
//           </button>

//           {/* Contact Us Button */}
//           <button className="bg-white hover:bg-gray-50 text-[#1a2e7a] border-2 border-[#1a2e7a] px-6 py-3 rounded-full text-[15px] font-semibold transition-colors shadow-lg">
//             Contact Us
//           </button>
//         </div>
//       </section>
//     </>
//   );
// }

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Banner() {
  const navigate = useNavigate();
  const productsRef = useRef(null);

  // Explore Products → neeche products section tak scroll
  const handleExplore = () => {
    if (productsRef.current) {
      productsRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Contact Us → contact route pe navigate
  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <>
      <section className="w-full max-w-[1440px] mx-auto relative flex flex-col lg:block">
        {/* 1. Banner Image */}
        <img
          src="src/assets/Banner.avif"
          alt="SaafSaathi Hero Banner"
          className="w-full h-auto object-cover block"
        />

        {/* 2. Buttons Container */}
        <div
          className="
            flex items-center justify-center gap-4 px-6 py-6
            lg:absolute lg:bottom-16 lg:left-12 xl:left-20 lg:py-0 lg:px-0 lg:justify-start lg:bg-transparent
          "
        >
          {/* Explore Products Button */}
          <button
            onClick={handleExplore}
            className="bg-[#25a832] hover:bg-green-700 text-white px-6 py-3 rounded-full flex items-center gap-2 text-[15px] font-semibold transition-colors shadow-lg"
          >
            Explore Products
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </button>

          {/* Contact Us Button */}
          <button
            onClick={handleContact}
            className="bg-white hover:bg-gray-50 text-[#1a2e7a] border-2 border-[#1a2e7a] px-2 py-3 rounded-full text-[15px] font-semibold transition-colors shadow-lg"
          >
            Contact Us
          </button>
        </div>
      </section>

      {/* ⚠️ Products section ke saath is ref ko attach karna hai */}
      <section
        id="products"
        ref={productsRef}
        className="w-full max-w-[1440px] mx-auto px-4 py-2"
      >
        {/* Yahan apne products ka grid/list aayega */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* product cards... */}
        </div>
      </section>
    </>
  );
}
