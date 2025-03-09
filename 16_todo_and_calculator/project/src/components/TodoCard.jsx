import { useState } from "react";
import deletelogo from "../assets/deletelogo.jpg";
import editlogo from "../assets/editlogo.jpg";
import savelogo from "../assets/savelogo.jpg";
import { UseTodoContext } from "../context/todoContext";


function TodoCard({todo}) {
  const [newEditedValue,setNewEditedValue]=useState(todo.name);
  const { deleteTodo, editTodo, toggleTodo } = UseTodoContext();
  const [valueReadOnly, setValueReadOnly] = useState(true)
  return (


    <div className="flex items-center space-x-4 w-full p-3 border-b border-gray-300 bg-white shadow-sm rounded-lg">
      <input checked={todo.checked} onChange={(e)=>{
        toggleTodo(todo.id)
      }} type="checkbox" className="w-5 h-5" />
      <input
        readOnly={valueReadOnly}
        type="text"
        value={newEditedValue}
        onChange={(e)=>{
          setNewEditedValue(e.target.value);
        }}
        className="flex-1 p-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Task description..."
      />
      <button onClick={
        () => {
          setValueReadOnly((prev) => !prev);
         if(valueReadOnly==false){
          editTodo(todo.id,newEditedValue);
         }
        }
      } className="p-2 hover:opacity-80 transition">
        <img src={valueReadOnly==true? editlogo:savelogo} alt="Edit" className="w-6 h-6" />
      </button>
      <button onClick={()=>{
        deleteTodo(todo.id)
      }} className="p-2 hover:opacity-80 transition">
        <img src={deletelogo} alt="Delete" className="w-6 h-6" />
      </button>
    </div>

  );
}

export default TodoCard;
