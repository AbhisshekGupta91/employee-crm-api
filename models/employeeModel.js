const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeModel = new Schema({
    name: {
        type: String,
        required: true
    },
    fname: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    bloodgroup: {
        type: String,
        required: true
    },
    aadhar: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    pinno: {
        type: Number,
        required: true
    },
    image: {
        type: String
    }
})

module.exports = mongoose.model("employees", employeeModel);