import {v4 as uuidv4} from 'uuid';
import React, {useEffect} from 'react';
import "../App.css";


function Form({input, setInput, todos, setTodos, editTodo, setEditTodo}) {

  const updateTodo = (title, id, completed) => {
  const newTodo = todos.map(todo => todo.id === id ? {title, id, completed} : todo)
  setTodos(newTodo)
  setEditTodo("")
 }

 useEffect(() => {
  if(editTodo) {
   setInput(editTodo.title)
  }else {
   setInput("")
  }
 }, [setInput, editTodo]);

 const onInputChangeHandler = (e) => {
  setInput(e.target.value)
 }


 const formOnSubmit = (e) => {
  e.preventDefault()
  if(!editTodo) {
  setTodos([...todos, { id: uuidv4() ,title: input, completed: false}])
  setInput("")
  }else {
   updateTodo(input, editTodo.id, editTodo.completed)
  }

 }

 return (
  <div>
   <form onSubmit={formOnSubmit}>
    <input 
    type="text" 
    placeholder = "Enter your todo" 
    className="task-input" 
    value={input}
    required
    onChange={onInputChangeHandler}
    />
    <button type = "submit" className = "button-add"> {editTodo ? "OK" : "Add"} </button>
   </form>
  </div>
 )
}

export default Form
