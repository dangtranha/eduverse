import { FiPenTool, FiCode, FiMessageCircle, FiCamera, FiImage, FiTrendingUp, FiEdit, FiDollarSign, FiMic, FiGlobe } from 'react-icons/fi';

export const categories = [
  { name: 'Art & Design', courses: '3 Courses', icon: <FiPenTool /> },
  { name: 'Development', courses: '3 Courses', icon: <FiCode /> },
  { name: 'Communication', courses: '4 Courses', icon: <FiMessageCircle /> },
  { name: 'Videography', courses: '5 Courses', icon: <FiCamera /> },
  { name: 'Photography', courses: '6 Courses', icon: <FiImage /> },
  { name: 'Marketing', courses: '7 Courses', icon: <FiTrendingUp /> },
  { name: 'Content Writing', courses: '8 Courses', icon: <FiEdit /> },
  { name: 'Finance', courses: '9 Courses', icon: <FiDollarSign /> },
  { name: 'Science', courses: '10 Courses', icon: <FiMic /> },
  { name: 'Network', courses: '11 Courses', icon: <FiGlobe /> },
];


// src/model/MenuPopoverModel.js
export const MenuPopupInformation = [
  { id: 1, label: "My Information", link: "/my-information" },
  { id: 2, label: "My Profile", link: "/my-profile" },
  { id: 3, label: "Payment History", link: "/payment-history" },
  { id: 4, label: "Sign Out", link: "/sign-out" },
];
