const mongoose = require("mongoose");

var mongoURL =
    "mongodb+srv://dimassspb:pathfinder999@cluster0.bt65b.mongodb.net/real-estate";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var connection = mongoose.connection;

connection.on("error", () => {
    console.log("====================================");
    console.log("Mongo DB connection failed !!!");
    console.log("====================================");
});

connection.on("connected", () => {
    console.log("====================================");
    console.log("Mongo DB connection successful !!!");
    console.log("====================================");
});

module.exports = mongoose;
