const mongoose = require("mongoose");

const bountySchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    bountyAmount: {
        type: Number,
        required: true
    },
    living: {
        type: Boolean,
        required: true
    }, 
    type: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Bounty", bountySchema);