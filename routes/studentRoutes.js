const express = require("express");
const router = express.Router();
const studentController = require("../controllers/studentController");


// Define routes

router.post("/", studentController.createStudent);
router.delete("/:id", studentController.deleteStudent);
router.get("/", studentController.getStudents);
router.put("/:id", studentController.updateStudent);

module.exports = router;