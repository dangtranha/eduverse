// src/models/MenuModel.js
export const menuItems = [
  { id: 1, label: "Home", link: "/home" },
  {
    id: 2,
    label: "Discover",
    link: "/discover",
  },
  {
    id: 3,
    label: "Categories",
    link: "/categories",
    submenu: [
      { id: "c1", label: "Art & Design", link: "/categories/art-design" },
      { id: "c2", label: "Development", link: "/categories/development" },
      { id: "c3", label: "Communication", link: "/categories/communication" },
      { id: "c4", label: "Photography", link: "4" },
      { id: "c5", label: "Videography", link: "5" },
      { id: "c6", label: "Marketing", link: "6" },
      { id: "c7", label: "Content Writing", link: "7" },
      { id: "c8", label: "Finance", link: "8" },
      { id: "c9", label: "Science", link: "9" },
      { id: "c10", label: "Network", link: "10" }
    ]
  },
  { id: 4, label: "My Courses", link: "/mycourse" }

];

