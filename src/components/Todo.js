import TodoDisplay from "./TodoDisplay";
import TodoInput from "./TodoInput";
import axios from "axios";
import { useState } from "react";
import "../styles/Todo.css";

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [updateId, setUpdateId] = useState("");
    const getTodos = async() => {
        let tasks = await axios.get("https://todo-app-num9.onrender.com/todos/all");
        setTodos(tasks.data);
    }
    getTodos()
    return <div id="todo">
        <h1 id="title">Todo App</h1>
        <TodoInput getTodos={getTodos} updateId={updateId} setUpdateId={setUpdateId} />
        <TodoDisplay setUpdateId={setUpdateId} getTodos={getTodos} todos={todos} />
    </div>
}

export default Todo;