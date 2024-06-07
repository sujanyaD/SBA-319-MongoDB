// const { Router } = require('express');
 //const usersCtrl = require('../controllers/userControllers');


const { Router } = require('express');

const userController = require('../controllers/userControllers');
const router = Router();
// GET all users
router.get('/', userController.getAllUsers);

// GET a single user by ID
router.get('/:id', userController.getUserById);

// POST a new user
router.post('/', userController.createUser);

// PATCH/PUT update a user
router.patch('/:id', userController.updateUser);

// DELETE a user
router.delete('/:id', userController.deleteUser);

module.exports = router;
