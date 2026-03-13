import "./App.css";
import Todoitem from "./Components/Todoitem";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo = () => {
    if (!input.trim()) return;

    if (editIndex !== null) {
      const updatedTodos = [...todos];
      updatedTodos[editIndex] = input;
      setTodos(updatedTodos);
      setEditIndex(null);
    } else {
      setTodos([...todos, input]);
    }

    setInput("");
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setInput(todos[index]);
    setEditIndex(index);
  };

  return (
    <main>
      <section>
        <h2>To-Do List</h2>

        <div className="inputHolder">
          <input
            type="text"
            placeholder="Enter your task here"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button className="btn" onClick={addTodo}>
            {editIndex !== null ? "Update Task" : "Add Task"}
          </button>
        </div>

        <ul>
          {todos.map((item, index) => (
            <Todoitem
              key={index}
              data={item}
              index={index}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;
