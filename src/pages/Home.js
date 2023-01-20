import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAsynctodo,
  addAsynctodo,
  toggleCompleteAysnctodo,
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

  const handleCheckbox = (todo) => {
    // console.log(id);
    dispatch(
      toggleCompleteAysnctodo({ id: todo.id, completed: !todo.completed })
    );
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

      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <p>
              {" "}
              <span>
                <input
                  type="checkbox"
                  onChange={() => handleCheckbox(todo)}
                  checked={todo.completed}
                />
              </span>
              Name: {todo.title}
            </p>
            <button>Update</button>
            <button>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
