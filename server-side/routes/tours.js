import express from "express";
import { createTour, deleteTour, getAllTours, getSingleTour, getTourBySearch, updateTour } from "../controllers/TourController.js";

const router = express.Router();

//create new tour
router.post("/", createTour);

//update tour
router.put("/:id", updateTour);

//delete tour
router.delete("/:id", deleteTour);

//get single tour
router.get("/:id", getSingleTour);

//get all tours
router.get("/", getAllTours);

//get tour by search
router.get("/search/getTourBySearch", getTourBySearch);

export default router;