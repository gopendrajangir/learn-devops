const express = require("express");

const app = express();
const PORT = 3001;

const todos = [
  { id: 1, title: "Learn Node", completed: true },
  { id: 2, title: "Learn Express", completed: true },
  { id: 3, title: "Build a todo API", completed: false },
  { id: 4, title: "Write some tests", completed: false },
  { id: 5, title: "Deploy it", completed: false },
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
