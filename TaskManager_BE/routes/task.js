const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');

// GET /tasks
router.get('/', taskController.getAllTasks);

// POST /tasks
router.post('/', taskController.createTask);

// PUT /tasks/:taskId
router.put('/:taskId', taskController.updateTask);

// DELETE /tasks/:taskId
router.delete('/:taskId', taskController.deleteTask);

module.exports = router;
