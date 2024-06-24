const Task = require('../models/index');

const handleErrorResponse = (res, statusCode, message) => {
  res.status(statusCode).json({ message });
};

// GET 
exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    handleErrorResponse(res, 500, err.message);
  }
};

// POST 
exports.createTask = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newTask = await Task.create({ title, description });
    res.status(201).json(newTask);
  } catch (err) {
    handleErrorResponse(res, 400, err.message);
  }
};

// PUT 
exports.updateTask = async (req, res) => {
  const { taskId } = req.params;
  try {
    const updatedTask = await Task.findByIdAndUpdate(taskId, req.body, { new: true });

    if (!updatedTask) {
      return handleErrorResponse(res, 404, 'Task not found');
    }
    res.json(updatedTask);
  } catch (err) {
    handleErrorResponse(res, 500, 'Server error');
  }
};

// DELETE
exports.deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return handleErrorResponse(res, 404, 'Task not found');
    }

    res.json({ message: 'Task deleted' });
  } catch (err) {
    console.error('Error deleting task:', err);
    handleErrorResponse(res, 500, 'Failed to delete task. Please try again later.');
  }
};
