import express from "express";
import { getAllCourses } from "../model/CardModel.js";
import AuthController from "../controller/AuthController.js";

const router = express.Router();
// Đăng nhập người dùng
router.post("/login", AuthController.handleLoginSubmit);

// Đăng ký
router.post("/register", AuthController.handleRegisterSubmit);


router.get("/course", async (req, res) => {
  try {
    const courses = await getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" });
  }
});

export default router;
