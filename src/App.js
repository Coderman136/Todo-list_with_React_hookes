import React, {useState, useEffect} from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodoList from './components/TodoList';
import "./App.css";


function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])

  return (
    <div className="container">
      

        <div className = "app-wrapper">

        <div>
          <Header/>
        </div>

        <Form input={input}
        setInput = {setInput}
        todos= {todos}
        setTodos = {setTodos}
        editTodo = {editTodo}
        setEditTodo= {setEditTodo}/>
        <TodoList todos={todos} setTodos = {setTodos} setEditTodo= {setEditTodo} />

        </div>
      
    </div>
  )
}

export default App