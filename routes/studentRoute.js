

const { Router } = require('express');

const studentController = require('../controllers/studentControllers');
const router = Router();
// GET all users
router.get('/',studentController.getAllStudents);

// GET a single user by ID
router.get('/:id', studentController.getStudentById);

// POST a new user
router.post('/',studentController.createStudent);

// PATCH/PUT update a user
router.patch('/:id',studentController.updateStudent);

// DELETE a user
router.delete('/:id',studentController.deleteStudent);

module.exports = router;
