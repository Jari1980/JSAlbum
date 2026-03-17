const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        requires: true
    },
    artist: {
        type: String,
        requires: true
    },
    year: {
        type: Number
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Album", albumSchema);