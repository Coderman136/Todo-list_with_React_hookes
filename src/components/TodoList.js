import React from 'react';
import "../App.css";


function TodoList({todos, setTodos, setEditTodo}) {

 const deleteHandler = ({id}) => {
  setTodos(todos.filter(todo => todo.id !== id))
 }
 const completeHandler = (todo) => {
  setTodos(todos.map(item => {
   if(item.id === todo.id) {
    return {...item, completed: !item.completed}
   }
   return item;
  }))
 }
 const editHandler= ({id}) => {
  const findTodo = todos.find(todo => todo.id === id);
  setEditTodo(findTodo)
 }

 return (
  <div>
   {todos.map(todo =>
   (
    <li className="list-item" key={todo.id}>
     <input type="text"value={todo.title} className={`list ${todo.completed ? "complete" : ""}`} onChange={e => e.preventDefault()} />
     <button className="button-complete task-button"> <i className="fa fa-check-circle" onClick={() => completeHandler(todo)}/> </button>
     <button className="button-edit task-button"> <i className="fa fa-edit" onClick={() => editHandler(todo)}/> </button>
     <button className="button-delete task-button"> <i className="fa fa-trash" onClick={() => deleteHandler(todo)}/> </button>
     </li>
   ) 
    )}
  </div>
 )
}

export default TodoList
