import React, { useState, useRef, useEffect } from 'react';
import TodoCard from './TodoCard';
import { TodoProvider } from '../context/todoContext';

function Todo() {
  const [todos, setTodos] = useState([]);
  function addTodo(todo) {
    let id = todos[todos.length - 1]?.id + 1 || 0;
    setTodos([...todos, { ...todo, id }]);

  }
  function deleteTodo(id) {
    let newTodos = todos.filter((e) => e.id !== id);
    setTodos(newTodos);
  }
  function editTodo(id, editText) {
    let newTodo = todos.map((e) => {
      if (e.id === id) {
        return { ...e, name: editText }
      } else {
        return e
      }
    })
    setTodos([...newTodo])
  }
  function toggleTodo(id) {
    let newTodo = todos.map((e) => {
      if (e.id === id) {
        return { ...e, checked: !e.checked }
      } else {
        return e
      }
    })
    setTodos([...newTodo]);
  }


  const todoName = useRef();
  // with Strict Mode this will work 
  //  let i=0;
  //   useEffect(() => {
  //     console.log("I am use effect one",i);
  //     let todos = JSON.parse(localStorage.getItem("todos")) || [];
  //     console.log("todos from useeffect one",todos);
  //     if(i==0){
  //       localStorage.setItem("mytodos", JSON.stringify(todos));
  //     }
  //     setTodos(todos);    
  //     i++;
  //   }, [])
  // let j=0;
  //   useEffect(() => {
  //     console.log("I am use effect two",j);
  //     localStorage.setItem("todos", JSON.stringify(todos));
  //     if(j==1){
  //       setTodos(JSON.parse(localStorage.getItem("mytodos"))||[]);   
  //     }
  //     console.log("todos from useeffect two",todos);
  //     j++
  //   }, [todos])



  //with strict mode off

  useEffect(() => {
    console.log("I am use effect one");
    let todos = JSON.parse(localStorage.getItem("todos")) || [];
    console.log("todos from useeffect one", todos);
    setTodos(todos);

  }, [])

  useEffect(() => {
    console.log("I am use effect two");
    localStorage.setItem("todos", JSON.stringify(todos));
    console.log("todos from useeffect two", todos);
  }, [todos])
  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, editTodo, toggleTodo }}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white p-4 shadow-lg rounded-lg">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Add a new task..." ref={todoName}
          />
          <button onClick={() => {
            addTodo({
              name: todoName.current.value,
              checked: false
            });
          }} className="w-full p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">Add</button>
        </div>

        <div className="w-full max-w-md bg-white p-4 shadow-lg rounded-lg mt-4 space-y-2">
          {
            todos?.length <= 0 ? <h1>No task for today</h1> : todos.map((todo) => {
              return <TodoCard todo={todo} key={todo.id}/>
            })
          }

        </div>
      </div>
    </TodoProvider>
  );
}

export default Todo;
