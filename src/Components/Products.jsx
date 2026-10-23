import React, { useState } from "react";
import productsData from "./products.json"; // JSON ka path apne hisaab se badalein

export function Products() {
  // Har product ke liye currently selected image track karne ke liye
  const [currentImgIndex, setCurrentImgIndex] = useState({});

  // WhatsApp number (country code ke saath, bina + ke)
  const whatsappNumber = "919634871123"; // Apna number yahan daalein

  // WhatsApp pe link banane ke liye function
  const handleBuy = (product) => {
    const message = `Hello SaafSaathi, I want to buy: ${product.name} - ₹${product.price}`;
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-bold text-[#1a2e7a] mb-8 text-center">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsData.map((product) => {
          const activeIndex = currentImgIndex[product.id] || 0;

          return (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col transition-transform hover:-translate-y-1"
            >
              {/* Main Image */}
              <div className="relative w-full h-64 bg-gray-50">
                <img
                  src={product.images[activeIndex]}
                  alt={product.name}
                  className="w-full h-full object-contain p-4"
                />
              </div>

              {/* Thumbnails (3 images) */}
              <div className="flex justify-center gap-3 px-4 py-3 border-b border-gray-100">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() =>
                      setCurrentImgIndex({
                        ...currentImgIndex,
                        [product.id]: idx,
                      })
                    }
                    className={`w-14 h-14 rounded-lg overflow-hidden border-2 ${
                      activeIndex === idx
                        ? "border-[#25a832]"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Product Info */}
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-[#1a2e7a] mb-1">
                  {product.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4 flex-grow">
                  {product.details}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-extrabold text-[#1a2e7a]">
                    ₹{product.price}
                  </span>

                  <button
                    onClick={() => handleBuy(product)}
                    className="bg-[#25a832] hover:bg-green-700 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-semibold transition-colors shadow"
                  >
                    {/* WhatsApp Icon */}
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
