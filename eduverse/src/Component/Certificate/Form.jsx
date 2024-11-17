import React, { useState } from "react";

const Form = ({ onGenerate }) => {
  const [formData, setFormData] = useState({
    name: "",
    course: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGenerate(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-lg space-y-4"
    >
      <div>
        <label className="block font-medium text-gray-700">Họ và Tên:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Nhập tên"
          required
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700">Khóa học:</label>
        <input
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Nhập tên khóa học"
          required
        />
      </div>
      <div>
        <label className="block font-medium text-gray-700">Ngày hoàn thành:</label>
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
      >
        Tạo chứng chỉ
      </button>
    </form>
  );
};

export default Form;
