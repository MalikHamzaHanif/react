import React, { useEffect, useState } from 'react'
import { TodoContextProvider } from './context/todocontext'
import TodoForm from './components/TodoForm'
import TodoCard from './components/TodoCard'

function App() {
  const [todos, setTodos] = useState([])
  function addTodo(todo) {
    if (todos.length > 0) {
      const index = todos[todos.length - 1].id + 1
      setTodos((prev) => [...prev, { name: todo, id: index, completed: false }])
    } else {
      setTodos((prev) => [...prev, { name: todo, id: 1, completed: false }])
    }
  }
  function removeTodo(id) {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  function updateTodo(id, newTodo) {


    setTodos((prev) => prev.map((todo) => { 
  
      
     return todo.id === id ? { ...todo, name: newTodo } : todo 
    }))
  

  }

  function toggleTodo(id) {

    
    setTodos((prev) => prev.map((todo) => {

      return todo.id === id ? { ...todo, completed: !todo.completed } : todo 
      
      }))
  }

  useEffect(() => {
    if (localStorage.getItem("todos")) {
  

      const myTodos = JSON.parse(localStorage.getItem("todos"))
   

      if (myTodos.length > 0) {
        setTodos(myTodos)
      }
    }

  }, [])
  useEffect(() => {
  

    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <TodoContextProvider value={{ addTodo, removeTodo, todos, updateTodo, toggleTodo }}>
      <div className="max-w-xl mx-auto p-4">
        <TodoForm />
      </div>
      <div className="max-w-xl mx-auto p-4 space-y-4">
        {todos.length <= 0 ? (
          <h1 className="text-center text-2xl text-gray-600">No Todos Found</h1>
        ) :
          todos.map((todo) => (


            <TodoCard
              key={todo.id}
              todoId={todo.id}
              todoName={todo.name}
              todoChecked={todo.completed}
            />
          ))
        }
      </div>


    </TodoContextProvider>

  )
}

export default App
