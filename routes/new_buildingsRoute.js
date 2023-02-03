const express = require("express");
const router = express.Router();
const New_building = require("../models/new_building");
const mongoose = require("mongoose");
// router.get("/getallrooms", async (req, res) => {
//     try {
//         const rooms = await Room.find();
//         res.send(rooms);
//     } catch (error) {
//         return res.status(400).json({ message: "something went wrong" });
//     }
// });

router.post("/getnewbuildingbyid", async (req, res) => {
    const buildingid = req.body.buildingid;
    try {
        const building = await New_building.findOne({ _id: buildingid });
        res.send(building);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

router.get("/getallnewbuildings", async (req, res) => {
    console.log(req.body);
    try {
        const new_buildings = await New_building.find({});
        res.send(new_buildings);
    } catch (error) {
        return res.status(400).json({ message: error });
    }
});

// router.post("/addroom", async (req, res) => {
//     const {
//         room,
//         rentperday,
//         maxcount,
//         description,
//         phonenumber,
//         type,
//         image1,
//         image2,
//         image3,
//     } = req.body;

//     const newroom = new Room({
//         name: room,
//         rentperday,
//         maxcount,
//         description,
//         phonenumber,
//         type,
//         imageurls: [image1, image2, image3],
//         currentbookings: [],
//     });
//     try {
//         await newroom.save();
//         res.send("New Room Added Successfully");
//     } catch (error) {
//         return res.status(400).json({ error });
//     }
// });

module.exports = router;
