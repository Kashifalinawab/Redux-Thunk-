import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAsynctodo,
  addAsynctodo,
  toggleCompleteAysnctodo,
  deleteTodoAsync,
} from "../redux/todoSlice";

function Home(props) {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  //   console.log("Before useeffect", books);

  useEffect(() => {
    dispatch(getAsynctodo());
  }, [dispatch]);

  const todoAdded = (event) => {
    event.preventDefault();
    dispatch(
      addAsynctodo({
        title: value,
      })
    );
    // console.log(value);
  };

  const handleCheckbox = (id, completed, ) => {
    // console.log(todo.id);
    dispatch(toggleCompleteAysnctodo({ id,  completed: !completed }));
  };

  const handleDelete = (id) => {
    dispatch(deleteTodoAsync({ id }));
    // console.log(id);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <br />
      <form onSubmit={todoAdded}>
        <input
          type="text"
          placeholder="Add ToDo List"
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <br />

      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <p>
              {" "}
              <span>
                <input
                  type="checkbox"
                  onClick={() =>
                    handleCheckbox(todo.id, todo.completed, )
                  }
                  defaultChecked={todo.completed}
                />
              </span>
              Task: {todo.title}
            </p>
            {/* <p>completed:{todo.completed ? "Yes" : "No"}</p> */}
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
