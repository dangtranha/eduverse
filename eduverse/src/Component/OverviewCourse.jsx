import React, { useState } from "react";
import ReviewsComp from "./ReviewComp";
const OverviewCourse = () => {
  // State để theo dõi tab đang được chọn
  const [activeTab, setActiveTab] = useState("Overview");

  // Nội dung các tab
  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="bg-white rounded-lg shadow-md p-6 text-xl text-left">
            <p>
              This course will teach you how to create stunning scenes in
              Illustrator in just 60 minutes.
            </p>
          </div>
        );
      case "Curriculum":
        return (
          <div className="bg-white rounded-lg shadow-md p-6 text-xl text-left">
            <ul className="list-disc pl-5 space-y-4">
               {/* Cái ni thay sau : D*/} 
              <li>Lesson 1 - 45 mins</li>
              <li>Lesson 2 - 45 mins</li>
              <li>Lesson 3 - 45 mins</li>
              <li>Lesson 4 - 45 mins</li>
            </ul>
          </div>
        );
      case "Outcome":
        return (
          <div className="bg-white rounded-lg shadow-md p-6 text-xl text-left">
            <ol className="list-decimal pl-5 space-y-4">
              <li>Receive Training From Industry Experts</li>
              <li>Gain Hands-On Experience Solving Real-World Job Tasks</li>
              <li>
                Build Confidence Using The Latest Tools And Technologies
              </li>
            </ol>
          </div>
        );
        case "Reviews":
            return (
                <ReviewsComp />);   
        case "Payment":
            return (
              <div className="bg-white rounded-lg shadow-md p-6 text-xl">
                {/* Tiêu đề */}
                <p className="text-left text-gray-700 mb-6">
                  By purchasing this course, you will have lifetime access to its content as well as the right to download it. Are you ready to explore our exciting courses now?
                </p>
                <div className="flex items-center justify-center">
                  {/* Cột bên trái: Hình ảnh */}
                  <div className="w-1/2 flex justify-center">
                    <img
                      src="https://cdni.iconscout.com/illustration/premium/thumb/online-payment-with-mobile-2645883-2218295.png" // Thay URL bằng link ảnh thực tế
                      alt="Course preview"
                    />
                  </div>
                  {/* Cột bên phải: Giá và nút */}
                  <div className="w-1/2 flex flex-col items-center space-y-4">
                    <p className="text-2xl font-bold text-gray-800">$99.99</p>
                    <div className="flex flex-col space-y-4">
                      {/* Nút Add to Cart */}
                      <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md shadow hover:bg-gray-100">
                        Add to Cart
                      </button>
                      {/* Nút Buy Now */}
                      <button className="px-6 py-3 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          
      default:
        return null;
    }
  };

  return (
    <div className="app font-sans bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="max-w-4xl w-full">
        <h1 className="text-3xl font-bold mb-10 text-left">
          Learning how to create scenes in Illustrator in 60 mins
        </h1>
        <div className="flex justify-center space-x-4 mb-6">
          {["Overview", "Curriculum", "Outcome", "Reviews", "Payment"].map(
            (tab) => (
              <button
                key={tab}
                className={`px-6 py-3 text-lg font-medium rounded-md ${
                  activeTab === tab
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-orange-400 hover:text-white`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};

export default OverviewCourse;
