const express = require("express");
const mongoose = require("mongoose");
const albumRoutes = require("./routes/albums");
const seedAlbums = require("./seed");

const app = express();

//Middleware
app.use(express.json());

//Routes
app.use("/albums", albumRoutes);

//Advanced error handling
app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        error: "Something bad",
        details: err.message
    });
});

//Connecting DB and starting server, order important
const start = async () => {
    try {
        await mongoose.connect("mongodb://mongo:27017/albums");
        console.log("MongoDB connected");

        await seedAlbums();

        app.listen(3000, () => {
            console.log("Server running on port 3000");
        });
    } catch(err) {
        console.log("Error starting:", err);
        process.exit(1);
    }
}

start();