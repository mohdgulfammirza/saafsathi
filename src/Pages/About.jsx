import React from "react";

const products = [
  {
    name: "Phenyl",
    description: "For cleaning household floors.",
    icon: "🧴",
  },
  {
    name: "Toilet Cleaner",
    description: "To help maintain toilet cleanliness and hygiene.",
    icon: "🚽",
  },
  {
    name: "Hand Wash",
    description: "For everyday hand hygiene.",
    icon: "🧼",
  },
  {
    name: "Dish Wash",
    description: "For cleaning dishes and utensils.",
    icon: "🍽️",
  },
];

export const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-green-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            About Us – SaafSaathi
          </h1>
          <p className="text-lg md:text-xl font-medium opacity-95">
            SaafSaathi – Your Trusted Cleaning Partner for Every Home
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-4xl mx-auto px-6 py-14">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-5">
            Welcome to SaafSaathi!
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Our goal is to provide useful cleaning products that help make your
            home and everyday life cleaner, more hygienic, and better.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            We understand that a clean home not only looks good but also makes
            everyday life more comfortable. With this in mind, SaafSaathi brings
            you a range of useful products designed to meet your daily cleaning
            and hygiene needs.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our product range includes{" "}
            <span className="font-semibold text-green-600">
              Phenyl, Toilet Cleaner, Hand Wash, and Dish Wash
            </span>
            , offering solutions for different cleaning needs around your home.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-blue-600 text-white rounded-2xl shadow-lg p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed opacity-95">
            Our mission is to make useful cleaning and hygiene products
            accessible to every home and help simplify everyday cleaning
            routines.
          </p>
        </div>
      </section>

      {/* Product Range */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-10">
          Our Product Range
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 text-center border border-gray-100 hover:-translate-y-1 transform"
            >
              <div className="text-5xl mb-3">{product.icon}</div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment Section */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-5">
            Our Commitment
          </h2>
          <p className="text-gray-700 leading-relaxed">
            At SaafSaathi, we prioritize our customers' needs and are committed
            to providing useful cleaning products. We strive to offer a variety
            of essential cleaning solutions under one brand, making it easier
            for you to manage your everyday household cleaning needs.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-4xl mx-auto px-6 py-10">
        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white rounded-2xl shadow-lg p-8 md:p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Why Choose SaafSaathi?
          </h2>
          <p className="text-lg leading-relaxed opacity-95">
            Because cleanliness is not just a chore; it is an essential part of
            a better lifestyle. We want to make cleaning easier for every
            household and encourage cleanliness as a daily habit.
          </p>
        </div>
      </section>

      {/* Footer / Tagline */}
      <section className="text-center py-14 px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-700 mb-3">
          SaafSaathi – Your Cleaning Partner, Every Home's Choice!
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Thank you for your trust and support. We welcome you to become a part
          of the SaafSaathi family!
        </p>
      </section>
    </div>
  );
};
