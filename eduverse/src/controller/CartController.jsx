import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa"; // Import React Icons
import BuyingCard from "../Component/BuyingCard";
import { course as initialCourses } from "../model/CartModel";

const CartController = () => {
  // Quản lý state
  const [cartCourses, setCartCourses] = useState(initialCourses);

  const handleAddCourse = (course) => {
    setCartCourses((prev) =>
      prev.map((c) =>
        c.id === course.id ? { ...c, inCart: true } : c
      )
    );
  };

  const handleDeleteCourse = (courseId) => {
    setCartCourses((prev) =>
      prev.map((c) =>
        c.id === courseId ? { ...c, inCart: false } : c
      )
    );
  };

  // Lọc danh sách khóa học có inCart = true
  const filteredCourses = cartCourses.filter((course) => course.inCart);

  // Tính tổng số tiền phải trả
  const totalPrice = filteredCourses.reduce(
    (total, course) => total + course.price,
    0
  );

  // Xử lý mua tất cả
  const handleBuyAll = () => {
    alert("Cảm ơn bạn đã mua hàng!"); // Tùy chỉnh theo yêu cầu
    setCartCourses((prev) =>
      prev.map((course) => ({ ...course, inCart: false }))
    );
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Tiêu đề */}
      <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        My cart
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {/* Danh sách khóa học */}
        <div className="col-span-2 mt-10">
          <BuyingCard
            courses={filteredCourses} // Chỉ truyền các khóa học có inCart = true
            onAddCourse={handleAddCourse}
            onDeleteCourse={handleDeleteCourse}
          />
        </div>

        {/* Hiển thị tổng số tiền và nút mua tất cả */}
        <div className="col-span-1 bg-white shadow-lg p-6 rounded-lg">
          <h2 className="text-lg font-semibold mb-4">Cart Summary</h2>
          <ul className="mb-4">
            {filteredCourses.map((course) => (
              <li key={course.id} className="flex justify-between my-2">
                <span>{course.title}</span>
                <span>${course.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="border-t border-gray-200 mt-4 pt-4">
            <p className="text-lg font-semibold">Total price:</p>
            <p className="text-2xl font-bold text-green-500 mb-4">
              ${totalPrice.toFixed(2)}
            </p>
            <button
              onClick={handleBuyAll}
              className="flex items-center justify-center bg-blue-500 text-white px-6 py-3 w-full rounded-md font-semibold hover:bg-blue-600 transition-all duration-300"
            >
              <FaShoppingCart className="mr-2 text-lg" /> Buy all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartController;
