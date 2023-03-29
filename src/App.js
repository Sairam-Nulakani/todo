import { useState } from "react";
import "./App.css";
import TodoList from "./TodoList";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);
  const changeHandler = (e) => {
    setTask(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const newTodos = [...todos, task];
    console.log(newTodos);
    setTodos(newTodos);
    setTask("");
  };
  const deleteHandler = (indexValue) => {
    const newTodos = todos.filter((todo, index) => index !== indexValue);
    setTodos(newTodos);
  };
  return (
    <div>
      <center>
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">TODO APPLICATION</h4>
            <form onSubmit={submitHandler}>
              <input
                size={30}
                type="text"
                name="task"
                value={task}
                onChange={changeHandler}
              />{" "}
              &nbsp;
              <input
                className="btn btn-primary"
                type="submit"
                name="Add"
                value="Add"
              />
            </form>
            <TodoList todolist={todos} deleteHandler={deleteHandler} />
          </div>
        </div>
      </center>
    </div>
  );
}

export default App;
