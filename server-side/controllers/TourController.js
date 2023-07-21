import Tour from "../models/Tour";

//CREATE A NEW TOUR
export const createTour = async (req, res) => {
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();
        
        res.status(200).json({success: true, message: "successfully created"})
    } catch (err) {
        res.status(200).json({success: true, message: "successfully created"})
    }
}