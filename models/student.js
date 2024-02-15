const mongoose = require("mongoose");


const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    phoneNumber :{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    }
});


const Student = mongoose.model("Student", studentSchema);

module.exports = Student;