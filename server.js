const express = require("express");

const app = express();

const dbConfig = require("./db");

const new_buildingsRoute = require("./routes/new_buildingsRoute")
app.use(express.json())
app.use("/api/new_buildings", new_buildingsRoute);

if (process.env.NODE_ENV === "production") {
    app.use("/", express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client/build/index.html"));
    });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Node JS Server Started`));
