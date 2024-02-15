const Student = require("../models/student");
const mongoose = require("mongoose");


const createStudent = async (req,res)=>{
    try{
        const student = new Student({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            age: req.body.age,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email
        });
        const newStudent = await student.save();
        res.status(201).json(newStudent);
    }catch(error){
        console.log(error);
    res.status(500).json({ error: "Error creating Student" });
    }
}

const updateStudent = async (req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        if(student){
            student.firstName = req.body.firstName;
            student.lastName = req.body.lastName;
            student.age = req.body.age;
            student.phoneNumber = req.body.phoneNumber;
            student.email = req.body.email;
            const updatedStudent = await student.save();
            res.status(200).json(updatedStudent);
        }else{
            res.status(404).json({error: "Student not found"});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "Error updating Student" });
    }
}

const getStudents = async (req,res)=>{
    try{
        const students = await Student.find();
        res.status(200).json(students);
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "Error getting Students" });
    }
}

const deleteStudent= async(req,res)=>{
    try{
        const student = await Student.findById(req.params.id);
        if(student){
            await student.remove();
            res.status(200).json({message: "Student removed"});
        }else{
            res.status(404).json({error: "Student not found"});
        }
    }catch(error){
        console.log(error);
        res.status(500).json({ error: "Error deleting Student" });
    }
}

module.exports={
    createStudent,
    updateStudent,
    getStudents,
    deleteStudent
}