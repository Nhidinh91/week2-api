const ToDo = require("./todoLib");

const getAllTodos = (req, res) => {
  res.json(ToDo.getAll());
};

const getTodoById = (req, res) => {
  const todoId = req.params.todoId;
  const todo = ToDo.findById(todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

const createTodo = (req, res) => {
  const { task, completed, dueDate } = req.body;
  const newTodo = ToDo.addOne(task, completed, dueDate);
  if (newTodo) {
    res.json(newTodo);
  } else {
    res.status(500).json({ message: "Fail to create Task" });
  }
};

const updateTodo = (req, res) => {
  const todoId = req.params.todoId;
  const { task, completed, dueDate } = req.body;
  const updatedToDo = ToDo.updateOneById(todoId, { task, completed, dueDate });
  if (updatedToDo) {
    res.json(updatedToDo);
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

const deleteTodo = (req, res) => {
  const todoId = req.params.todoId;
  const isDeleted = ToDo.deleteOneById(todoId);
  if (isDeleted) {
    res.json({ message: "Deleted successfully" });
  } else {
    res.status(404).json({ message: "Task not found" });
  }
};

module.exports = {
    getAllTodos,
    getTodoById,
    createTodo,
    updateTodo,
    deleteTodo,
};
