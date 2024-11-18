// data/courseData.js

const courseData = [
  {
    id: 1,
    title: "Course Intro",
    progress: "2/18",
    totalTime: "60min Total, 18 Lessons",
    subItems: [
      { id: 101, title: "01: Learn The Alphabets", duration: "Completed", state: "completed", content: "Content for Learn The Alphabets" },
      { id: 102, title: "02: Touch The Grass", duration: "23 Minutes", state: "completed", content: "Content for Touch The Grass" },
      { id: 103, title: "03: Practice, Practice, Practice", duration: "112 Minutes", state: "not-started", content: "Content for Practice, Practice, Practice" },
      { id: 104, title: "04: Just Do It", duration: "99 Minutes", state: "not-started", content: "Content for Just Do It" },
    ],
  },



  {
    id: 2,
    title: "History of Cringe",
    progress: "22/22",
    totalTime: "112 Minutes Total",
    subItems: [
      { id: 201, title: "01: The Origins of Cringe", duration: "30 Minutes", state: "completed", content: "Content for The Origins of Cringe" },
      { id: 202, title: "02: Modern Cringe Trends", duration: "40 Minutes", state: "completed", content: "Content for Modern Cringe Trends" },
      { id: 203, title: "03: Why Cringe is Universal", duration: "42 Minutes", state: "completed", content: "Content for Why Cringe is Universal" },
    ],
  },
  {
    id: 3,
    title: "Role Of Technology",
    progress: "8/747",
    totalTime: "987 Minutes Total",
    subItems: [],
  },
  {
    id: 4,
    title: "Age Of AI/ML",
    progress: "2/8",
    totalTime: "60min Total",
    subItems: [],
  },
  {
    id: 5,
    title: "Final Quiz & Transformation",
    progress: "12/77",
    totalTime: "12 Questions Total",
    subItems: [],
  },
];

export default courseData;
