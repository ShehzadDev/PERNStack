const express = require("express");
const router = express.Router();
const todoController = require("../controllers/todo.Controller");

router.get("/tasks", todoController.getTasks);
router.post("/tasks", todoController.addTask);
router.get("/tasks/:id", todoController.getTaskById);
router.put("/tasks/:id", todoController.updateTask);
router.delete("/tasks/:id", todoController.deleteTask);

module.exports = router;
