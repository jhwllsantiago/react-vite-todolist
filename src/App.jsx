import { useState } from "react";
import AddForm from "./AddForm";
import SearchForm from "./SearchForm";
import Todo from "./Todo";
import { loadFromLocal, saveToLocal } from "./utils";

const FILTER_MAP = {
  All: (todo) => todo,
  Completed: (todo) => todo.completed,
  Incomplete: (todo) => !todo.completed,
};

const App = () => {
  const [todos, setTodos] = useState(loadFromLocal() || []);
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState(Object.keys(FILTER_MAP)[0]);

  const addTodo = (title) => {
    const newTodo = { id: Date.now(), title, completed: false };
    const updated = [newTodo, ...todos];
    saveToLocal(updated);
    setTodos(updated);
  };

  const deleteTodo = (id) => {
    const updated = todos.filter((todo) => todo.id !== id);
    saveToLocal(updated);
    setTodos(updated);
  };

  const updateTodo = (id, changes) => {
    const updated = todos.map((todo) => {
      if (todo.id === id) return { ...todo, ...changes };
      return todo;
    });
    saveToLocal(updated);
    setTodos(updated);
  };

  return (
    <div className="App">
      <h1>Todo or not Todo</h1>
      <h2>
        {todos.length} {todos.length === 1 ? "todo" : "todos"} left
      </h2>

      <AddForm onSubmit={addTodo} />

      <SearchForm query={query} onSearch={setQuery} />

      {Object.keys(FILTER_MAP).map((type) => (
        <button
          key={type}
          onClick={() => setFilter(type)}
          className={filter === type ? "active" : ""}
        >
          {type}
        </button>
      ))}

      <ul>
        {todos
          .filter(FILTER_MAP[filter])
          .filter((todo) => todo.title.startsWith(query))
          .map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          ))}
      </ul>
    </div>
  );
};

export default App;
