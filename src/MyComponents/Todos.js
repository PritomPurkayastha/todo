import React from 'react'
import {TodoList} from "./TodoList"
export const Todos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center'>Todos List</h3>
      {props.todos.length===0? <h1 className='text-center'>No todos to display</h1> :
      props.todos.map((todo)=>{
        return (<TodoList todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
      })}
      
    </div>
  )
}

