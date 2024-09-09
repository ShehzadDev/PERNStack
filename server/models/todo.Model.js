const pool = require("../db");

// Get all tasks
const getAllTasks = async () => {
  const result = await pool.query("SELECT * FROM tasks");
  return result.rows;
};

// Create a new task
const createTask = async (title, description, status) => {
  const result = await pool.query(
    "INSERT INTO tasks (title, descp, status) VALUES($1, $2, $3) RETURNING *",
    [title, description, status]
  );
  return result.rows[0];
};

//Get a task by id
const getTaskById = async (id) => {
  const result = await pool.query("SELECT * FROM tasks WHERE id = $1", [id]);
  return result.rows[0];
};

//Update task by ID
const updateTask = async (id, title, description, status) => {
  const result = await pool.query(
    "UPDATE tasks SET title = $1, descp = $2, status = $3 WHERE id = $4 RETURNING *",
    [title, description, status, id]
  );
  return result.rows[0];
};

//Delete task by ID
const deleteTask = async (id) => {
  const result = await pool.query("DELETE FROM tasks WHERE id = $1", [id]);
  return result.rows[0];
};

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
