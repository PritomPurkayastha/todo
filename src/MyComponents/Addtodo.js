import React, { useState } from 'react'
export const Addtodo = (props) => {
    const[title, setTitle]=useState("");
    const[desc, setDesc]=useState("");

    const submit=(e)=>{
        // e.preventDefault();
        if(!title || !desc){
            alert("Title and Description can not be empty");
        }
        else
        console.log()
        props.addTodo(title, desc);
    }
    return (
        <div className='container'>
            <h3 className='text-center'>Add a ToDo</h3>
            <form >
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder='Add a title for your todo.'/>
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder='Add a description'/>
                </div>
                <button type="button" onClick={submit} className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}
