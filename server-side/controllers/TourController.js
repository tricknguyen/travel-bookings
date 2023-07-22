import Tour from "../models/Tour.js";

//CREATE A NEW TOUR
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();
        
        res.status(200).json({success: true, message: "successfully created", data:savedTour});
    } catch (err) {
        res.status(500).json({success: false, message: "failed to create, try again"});
    }
}

//UPDATE TOUR
export const updateTour = async (req, res) => {
    const id = req.params.id
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})
        res.status(200).json({
            success: true, 
            message: "successfully updated", 
            data: updatedTour
        })
    } catch (err) {
        res.status(500).json({
            success: false, 
            message: "failed to update"
        })
    }
}

//DELETE TOUR
export const deleteTour = async (req, res) => {
    const id = req.params.id
    try {
        const deleteTour = await Tour.findByIdAndDelete(id, {
            $set: req.body
        }, {new:true})
        res.status(200).json({
            success: true, 
            message: "successfully deleted"
        })
    } catch (err) {
        res.status(404).json({
            success: false, 
            message: "failed to delete"
        })
    }
}

//GET A TOUR
export const getSingleTour = async (req, res) => {
    const id = req.params.id
    try {
        const tour = await Tour.findById(id);
        res.status(200).json({
            success: true, 
            message: "Found a tour",
            data: tour
        })
    } catch (err) {
        res.status(404).json({
            success: false, 
            message: "Not found"
        })
    }
}

//GET ALL TOURS
export const getAllTours = async (req, res) => {
    //for pagination
    const page = parseInt(req.query.page);

    try {
        const tours = await Tour.find({}).skip(page * 8).limit(8);
        res.status(200).json({
            success: true, 
            message: "Successful",
            data: tours
        })
    } catch (err) {
        res.status(500).json({
            success: false, 
            message: "Not found"
        })
    }
}

//GET TOUR BY SEARCH
export const getTourBySearch = async (req, res) => {
    const city = new RegExp(req.query.city, "i");
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

    try {
        const tours = await Tour.find({ city, distance:{$gte:distance}, maxGroupSize:{$gte:maxGroupSize} });
        res.status(200).json({
            success: true, 
            message: "Successful",
            data: tours
        })
    } catch (err) {
        res.status(500).json({
            success: false, 
            message: "Not found"
        })
    }
}