const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task');

router.get('/', taskController.getAllTasks);

router.post('/', taskController.createTask);

router.put('/:taskId', taskController.updateTask);

router.delete('/:taskId', taskController.deleteTask);

module.exports = router;
