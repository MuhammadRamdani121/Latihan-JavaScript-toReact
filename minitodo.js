let todos = [
  { id: 1, text: "Belajar JS", done: false },
  { id: 2, text: "Belajar React", done: true },
  { id: 3, text: "Push ke Github", done: false },
];

// ubah todo 1
const updatedTodos = [
  ...todos
    .map((todo) => (todo.id === 1 ? { ...todo, done: !todo.done } : todo))
    .filter((todo) => todo.id !== 2),

  { id: 4, text: "Deploy Project", done: false },
];

console.log(updatedTodos);
