import React from "react";

const InfoCard = ({ icon, title, description, link }) => {
  return (
    <div className="max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="flex items-center space-x-3 mb-4 bg-gray-400 py-4 text-white">
        <div className="text-blue-500 text-2xl">{icon}</div>
        <h2 className="text-3xl font-semibold text-gray-800">{title}</h2>
      </div>
      <div className=" p-6">
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={link}
        className="text-blue-500 hover:text-blue-700 font-medium transition"
      >
        Read More
      </a>
      </div>
    </div>
  );
};

export default InfoCard;
