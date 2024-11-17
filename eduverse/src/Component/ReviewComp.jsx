import React from "react";
import { FaStar } from "react-icons/fa";

const ReviewsComp = () => {
  // Dummy reviews data
  const reviews = [
    {
      id: 1,
      name: "John Smith",
      feedback:
        "Excellent product! The quality exceeded my expectations. Would definitely recommend to others.",
      rating: 5,
    },
    {
      id: 2,
      name: "Emily Johnson",
      feedback: "Good value for money. The customer service was also very helpful.",
      rating: 4,
    },
    {
      id: 3,
      name: "Michael Brown",
      feedback: "Decent product but there's room for improvement in terms of durability.",
      rating: 3,
    },
    {
      id: 4,
      name: "Sarah Wilson",
      feedback: "Amazing experience! The features are exactly what I was looking for.",
      rating: 5,
    },
  ];

  // Tính toán tổng số rating và rating trung bình
  const totalRatings = reviews.length;
  const averageRating =
    reviews.reduce((sum, review) => sum + review.rating, 0) / totalRatings;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Tiêu đề */}
        <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">
          Customer Reviews
        </h1>
        
        {/* Hiển thị số rating trung bình */}
        <div className="text-center mb-8">
          <p className="text-xl text-gray-700">
            <span className="font-bold text-yellow-500">{averageRating.toFixed(1)}</span> based on{" "}
            <span className="font-bold">{totalRatings}</span> ratings
          </p>
        </div>

        {/* Danh sách đánh giá */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out hover:shadow-xl"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{review.name}</h2>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`w-5 h-5 ${
                        review.rating >= star ? "text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">{review.feedback}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Showing {reviews.length} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewsComp;
