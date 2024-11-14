// src/models/MenuModel.js
export const menuItems = [
  { id: 1, label: "Home", link: "#" },
  {
    id: 2,
    label: "Discover",
    link: "#",
  },
  {
    id: 3,
    label: "Categories",
    link: "#",
    submenu: [
      { id: "c1", label: "Art & Design", link: "#" },
      { id: "c2", label: "Development", link: "#" },
      { id: "c3", label: "Communication", link: "#" },
      { id: "c4", label: "Photography", link: "#" },
      { id: "c5", label: "Videography", link: "#" },
      { id: "c6", label: "Marketing", link: "#" },
      { id: "c7", label: "Content Writing", link: "#" },
      { id: "c8", label: "Finance", link: "#" },
      { id: "c9", label: "Science", link: "#" },
      { id: "c10", label: "Network", link: "#" }
    ]
  },
  { id: 4, label: "My Courses", link: "#" }
];
