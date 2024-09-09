const express = require("express");
const app = express();
const todoRoutes = require("./routes/todo.Route");
const cors = require("cors");

// Middleware
app.use(express.json());

// Routes
app.use("/api", todoRoutes);

app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the Express API!");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
