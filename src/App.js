import "./App.css";
import Header from "./MyComponents/Header";
import {Todos} from "./MyComponents/Todos";
import {Footer} from "./MyComponents/Footer";
import {Addtodo} from "./MyComponents/Addtodo";
import React, { useState } from 'react';

function App() {
  const onDelete=(todo)=>{
    console.log("delete");
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  }
  const addTodo=(title,desc)=>{
    // let sno= todos[todos.length-1].sno+1;
    const sno=todos.length+1;
    console.log("I am adding this",title,desc)
    const myTodo={
      sno,
      title,
      desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }

  const [todos, setTodos] = useState([
    
  ]);

  return (
    <>
      <Header/>
      <Addtodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/>
    </>
  );
}

export default App;
