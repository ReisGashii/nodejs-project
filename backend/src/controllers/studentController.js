// src/controllers/studentController.js
const Student = require("../models/Student");
// GET /api/students
async function listStudents(req, res) {
 const students = await Student.find().sort({ createdAt: -1 });
 res.json(students);
}
// POST /api/students
async function createStudent(req, res) {
 const { fullName, email, className } = req.body;
 // Simple beginner validation
 if (!fullName || !email) {
 res.status(400);
 throw new Error("fullName and email are required");
 }
 const student = await Student.create({ fullName, email, className });
 res.status(201).json(student);
}
// PUT /api/students/:id
async function updateStudent(req, res) {
 const student = await Student.findByIdAndUpdate(
 req.params.id,
 req.body,
 { new: true }
 );
 if (!student) {
 res.status(404);
 throw new Error("Student not found");
 }
 res.json(student);
}
// DELETE /api/students/:id
async function deleteStudent(req, res) {
 const removed = await Student.findByIdAndDelete(req.params.id);
 if (!removed) {
 res.status(404);
 throw new Error("Student not found");
 }
 res.json({ message: "Student deleted" });
}
module.exports = { listStudents, createStudent, updateStudent, deleteStudent };
