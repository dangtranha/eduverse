import React from 'react';

const CategoriesCard = ({ name, courses, icon }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center h-32 p-4 border hover:text-orange-500">
    <div className="text-4xl text-orange-500 transition-colors duration-300">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-black hover:text-orange-500 transition-colors duration-300 mt-2">
      {name}
    </h3>
    <p className="text-sm text-gray-500">{courses}</p>
  </div>
);

export default CategoriesCard;