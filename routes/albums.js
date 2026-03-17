const express = require("express");
const router = express.Router();
const Album = require("../models/Album");

//Get all albums
router.get("/", async (req, res, next) => {
    try {
        const albums = await Album.find();
        res.json(albums);
    } catch (err){
        next(err);
    }
});

//Get album by id
router.get("/:id", async (req, res, next) => {
    try {
        const album = await Album.findById(req.params.id);
        if(!album) {
            return res.status(404).json({error: "Album not found"});
        }
        res.json(album);
    } catch(err) {
        next(err);
    }
});

//Create album
router.post("/", async (req, res, next) => {
    try {
        const album = new Album(req.body);
        const saved = await album.save();
        res.status(201).json(saved);
    } catch(err) {
        next(err);
    }
});

//Delete album
router.delete("/:id", async (req, res, next) => {
    try {
        const result = await Album.findIdAndDelete(req.params.id);
        if(!result){
            return res.status(404).json({error: "Album not found"});
        }
        res.json({message: "Album deleted"});
    } catch(err) {
        next(err);
    }
});

module.exports = router;