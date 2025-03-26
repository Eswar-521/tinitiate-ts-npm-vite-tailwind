import React from "react";

const services = [
  {
    title: "Product Catalog",
    description: "Browse and explore 100+ products with detailed descriptions, pricing, and images.",
    icon: "📦",
  },
  {
    title: "Search & Filtering",
    description: "Easily search for products by name, price, or description with an interactive search bar.",
    icon: "🔍",
  },
  {
    title: "Comparison Cart",
    description: "Add products to a comparison list and analyze their features side by side.",
    icon: "📊",
  },
  {
    title: "Wishlist",
    description: "Save your favorite products for later purchase.",
    icon: "❤️",
  },
  {
    title: "User Authentication",
    description: "Sign up, log in, and manage your profile securely.",
    icon: "🔑",
  },
];

const Services = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 border border-gray-200 transform hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold flex items-center gap-2 text-gray-800">
              {service.icon} {service.title}
            </h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
