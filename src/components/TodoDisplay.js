import "axios";
import axios from "axios";
import "../styles/TodoDisplay.css";

const TodoDisplay = ({getTodos, todos, setUpdateId}) => {
    const deleteTodo = async(id) => {
        await axios.delete("https://todo-app-num9.onrender.com/todos/delete/"+id)
        getTodos()
    }
    return <div id="todoDisplay">
        {todos.map(todo=>{
            return <div class="todoCard" key={todo._id}>
                <div id="todoTask">{todo.task}</div>
                <div id="controlsContainer">
                    <button class="controls" onClick={()=>setUpdateId(todo._id)}>Edit</button>
                    <button class="controls" onClick={()=>deleteTodo(todo._id)}>Delete</button>
                </div>
            </div>
        })}
    </div>
}

export default TodoDisplay;