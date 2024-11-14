import React, { useState } from "react";
import { FaFilter, FaSort } from "react-icons/fa";

const CourseCard = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      image: "images.unsplash.com/photo-1516116216624-53e697fedbea",
      author: "Tran Ha Dang",
      price: 49.99,
      timeforlearn: "2 weeks",
      student: 129,
      category: "Development",
      inCart: false
    },
    {
      id: 2,
      title: "Advanced Data Science and Analytics",
      image: "images.unsplash.com/photo-1551288049-bebda4e38f71",
      author: "Nguyen Quoc Huy",
      price: 54.99,
      timeforlearn: "3 weeks",
      student: 130,
      category: "Data Science",
      inCart: false
    },
    {
      id: 3,
      title: "Digital Marketing Masterclass",
      image: "images.unsplash.com/photo-1432888622747-4eb9a8efeb07",
      author: "Nguyen Ngoc Minh Nhat",
      price: 69.99,
      student: 131,
      timeforlearn: "1 week",
      category: "Marketing",
      inCart: false
    },
    {
      id: 4,
      title: "UI/UX Design Principles",
      image: "images.unsplash.com/photo-1513542789411-b6a5d4f31634",
      author: "John Doe",
      price: 80.0,
      student: 132,
      timeforlearn: "2 weeks",
      category: "Design",
      inCart: false
    }
  ]);

  const [sortBy, setSortBy] = useState("price");
  const [filterCategory, setFilterCategory] = useState("All");

  const categories = ["All", "Development", "Data Science", "Marketing", "Design"];

  const handleSort = (type) => {
    setSortBy(type);
    const sortedCourses = [...courses].sort((a, b) => {
      if (type === "price") return a.price - b.price;
      if (type === "student") return b.student - a.student;
      return 0;
    });
    setCourses(sortedCourses);
  };

  const handleFilter = (category) => {
    setFilterCategory(category);
  };

  const filteredCourses = courses.filter(course => 
    filterCategory === "All" ? true : course.category === filterCategory
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <FaFilter className="text-gray-600" />
          <select
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleFilter(e.target.value)}
            value={filterCategory}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-4">
          <FaSort className="text-gray-600" />
          <select
            className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => handleSort(e.target.value)}
            value={sortBy}
          >
            <option value="price">Sort by Price</option>
            <option value="student">Sort by Students</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 flex flex-col h-full"
          >
            <img
              src={`https://${course.image}`}
              alt={course.title}
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1516116216624-53e697fedbea";
              }}
            />
            <div className="p-4 flex-grow" style={{ minHeight: '150px' }}>
              <p className="text-gray-600 mb-2">by {course.author}</p>
              <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
              <div className="flex items-center text-gray-500 text-sm space-x-2">
                <span className="flex items-center">
                  <svg width="14" height="14" fill="#FF782D" viewBox="0 0 14 14" className="mr-1">
                    <path d="M6.99992 0.333984C3.33325 0.333984 0.333252 3.33398 0.333252 7.00065C0.333252 10.6673 3.33325 13.6673 6.99992 13.6673C10.6666 13.6673 13.6666 10.6673 13.6666 7.00065C13.6666 3.33398 10.6666 0.333984 6.99992 0.333984ZM9.79992 9.80065L6.33325 7.66732V3.66732H7.33325V7.13398L10.3333 8.93398L9.79992 9.80065Z"/>
                  </svg>
                  {course.timeforlearn}
                </span>
                <span className="flex items-center">
                  <svg width="16" height="16" fill="#FF782D" viewBox="0 0 16 16" className="mr-1">
                    <path d="M3.33341 8.78667V11.4533L8.00008 14L12.6667 11.4533V8.78667L8.00008 11.3333L3.33341 8.78667ZM8.00008 2L0.666748 6L8.00008 10L14.0001 6.72667V11.3333H15.3334V6L8.00008 2Z"/>
                  </svg>
                  {course.student}
                </span>
              </div>
            </div>

            {/* Price Section */}
            <div className="border-t border-gray-200 p-4 flex items-center justify-between mt-auto">
              <p className="text-gray-400 line-through">${course.price.toFixed(2)}</p>
              <p className="text-green-500 font-semibold ml-2">Free</p>
            </div>

            {/* View More Button */}
            <div className="p-4">
              <button className="bg-blue-500 text-white rounded-md px-4 py-2 w-full font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                View More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseCard;
