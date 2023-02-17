import axios from "axios";
import { useEffect, useState } from "react";
import "../styles/TodoInput.css";

const TodoInput = ({ getTodos, updateId, setUpdateId }) => {
    const [todo, setTodo] = useState("");
    const addTodo = async() => {
        if(updateId){
            await axios.put("https://todo-app-num9.onrender.com/todos/update/"+updateId, {task: todo})
                .then(res=>console.log(res))
                .catch(err=>console.log(err));
            setUpdateId("")
        }else{
            await axios.post("https://todo-app-num9.onrender.com/todos/add", { task: todo })
                .then(res=>console.log(res))
                .catch(err=>{console.log(err)});
            getTodos()
            setTodo("");
        }
    }
    useEffect(()=>{
        if(updateId){
            axios.get("https://todo-app-num9.onrender.com/todos/todo/"+updateId).then(data=>{setTodo(data.data.task)})
        }
    },[updateId]);
    return <div id="todoInput">
        <input id="inputBox" type="text" value={todo} onChange={e=>{setTodo(e.target.value)}} required />
        <button id="add" onClick={addTodo}>{!updateId ? "Add" : "Save"}</button>
    </div>
}

export default TodoInput;