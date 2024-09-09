const todoModel = require("../models/todo.Model");

const getTasks = async (req, res) => {
  try {
    const tasks = await todoModel.getAllTasks();
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

const getTaskById = async (req, res) => {
  try {
    const id = req.params.id;
    const task = await todoModel.getTaskById(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

const addTask = async (req, res) => {
  try {
    const { title, descp, status } = req.body;
    const newTask = await todoModel.createTask(title, descp, status);
    res.status(201).json(newTask);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, descp, status } = req.body;
    const updatedTask = await todoModel.updateTask(id, title, descp, status);
    res.json(updatedTask);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

const deleteTask = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedTask = await todoModel.deleteTask(id);
    res.json(deletedTask);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getTasks,
  addTask,
  getTaskById,
  updateTask,
  deleteTask,
};
