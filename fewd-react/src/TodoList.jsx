import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px" }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      <button onClick={addTask}>Add</button>
      <ol>
        {tasks.map((t, index) => (
          <li key={index}>
            {t} <button style={{color:"red"}} onClick={() => removeTask(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}
