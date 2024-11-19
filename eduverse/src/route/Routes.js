import express from "express";
import { getAllCourses } from "../model/CardRouteModel.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const courses = await getAllCourses();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: "Error fetching courses" });
  }
});

export default router;
