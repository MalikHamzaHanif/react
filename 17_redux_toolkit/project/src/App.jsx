import React from 'react'
import InputCard from './components/InputCard'
import TodosList from './components/TodosList'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome</h1>

      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <InputCard />
      </div>

      <div className="w-full max-w-md mt-4">
        <TodosList />
      </div>
    </div>
  )
}

export default App
