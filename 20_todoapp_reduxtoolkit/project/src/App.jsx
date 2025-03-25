import React from 'react'
import AddTask from './components/AddTask'
import { useSelector } from 'react-redux'
import TaskCard from './components/TaskCard'

function App() {
  const todos=useSelector((state)=>state.todos)
  return (
    <div>
    <AddTask/>
    {todos.map((todo)=>{
      return <TaskCard taskId={todo.id} taskName={todo.name}/>
    })}
    </div>
  )
}

export default App
