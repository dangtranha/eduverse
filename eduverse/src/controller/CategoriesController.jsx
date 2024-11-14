import React from 'react';
import { categories } from '../model/CategoriesModel';
import CategoriesCard from '../component/CategoriesTop';

const CategoriesController = () => (
  <div className="max-w-screen-lg mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 p-10">
    {categories.map((category, index) => (
      <CategoriesCard key={index} {...category} />
    ))}
  </div>
);

export default CategoriesController;