let todos = [
  { id: 1, text: "Belajar JS", done: false },
  { id: 2, text: "Belajar React", done: true },
  { id: 3, text: "Push ke Github", done: false },
];

const updatedTodos = todos
  .filter((todos) => todos.id >= 2)
  .map((todos) => todos.done === true);

console.log(updatedTodos);
