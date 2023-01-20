import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const intialState = [
  
];

export const getAsynctodo = createAsyncThunk("todo/getAsynctodo", async () => {
  //   const response = await fetch("http://localhost:3001/books");
  //   console.log(response);
  //   if (response.ok) {
  //     const data = await response.json();
  //     return { data };
  //   }
  const response = await axios.get("http://localhost:3001/todos");
  //   console.log(response);
  //   if (response.statusText=="OK") {
  //     return { data: response.data };
  //   }
  return { data: response.data };
});

export const addAsynctodo = createAsyncThunk(
  "book/addAsynctodo",
  async (payload) => {
    const object = {
      id: Date.now(),
      title: payload.title,
      completed: false,
    };
    const response = await axios.post("http://localhost:3001/todos", object);
    // console.log(response);
    return { data: response.data };
  }
);

export const toggleCompleteAysnctodo = createAsyncThunk(
  "todos/toggleCompleteAysnctodo",
  async (payload) => {
    const response = await axios.put(
      `http://localhost:3001/todos/${payload.id}`
    );
    console.log(response);
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: intialState,

  //   reducers: {
  //    addBook: (state, action) => {
  //       const newBook = {
  //         id: Date.now(),
  //         title: action.payload.title,
  //       };
  //       state.push(newBook);
  //     },
  //   },

  extraReducers: {
    [getAsynctodo.fulfilled]: (state, action) => {
      return action.payload.data;
    },
    [addAsynctodo.fulfilled]: (state, action) => {
      state.push(action.payload.data);
    },
    // [toggleCompleteAysnctodo.fulfilled]: (state, action) => {
    //   const index = state.findIndex(
    //     (todo) => todo.id === action.payload.id
    //   );
    //   state[index].completed = action.payload.completed;
    // },
  },
});

// export const { addBook } = todoSlice.actions;
export default todoSlice.reducer;
