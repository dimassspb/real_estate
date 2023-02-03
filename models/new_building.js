const mongoose = require("mongoose");

const new_buildingSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },

        developername: {
            type: String,
            required: true,
        },

        district: {
            type: String,
            required: true,
        },

        position: [],

        panorama: {
          type: String,
          required: true,
        },

        distance: {
            type: Number,
            required: true,
        },

        countofrooms: {
            type: Number,
            required: true,
        },

        imageurls: [],
        dateofputting: {
            type: String,
            required: true,
        },

        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const new_buildingModel = mongoose.model("new_buildings", new_buildingSchema);


module.exports = new_buildingModel;