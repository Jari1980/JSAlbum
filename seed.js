const Album = require("./models/Album")

async function seedAlbums(){
    const count = await Album.countDocuments();
    if(count === 0){
        console.log("Seeding database...")
        await Album.insertMany([
            {title: "Broccoli", artist: "SuperMan", year: 1980},
            {title: "GreenIsGood", artist: "Another Bites Dust", year: 1990},
            {title: "What is Java", artist: "Gevalia", year: 2000}
        ]);
        console.log("Seeding completed");
    } else {
        console.log("Not seeding since there are albums in database");
    }
}

module.exports = seedAlbums;