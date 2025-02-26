import { useState } from "react"


function App() {

  let [counter, setCounter] = useState(0);

  function incrementCounter() {
    if(counter>=10){

      alert("Counter can not be greator then 10")
    }else{

      counter++;
      setCounter(counter);
    }
  }
  function decrementCounter() {
    if(counter<=0){
      alert("Counter can not be less then 0")
    }else{

      counter--;
      setCounter(counter);
    }
  }

  return (
    <>
      <h1>Counter Application Using React</h1>
      <h1>Counter </h1>
      <h1>{counter}</h1>
      <button onClick={incrementCounter}>Increment Counter</button>
      <button onClick={decrementCounter}>decrement Counter</button>
      <h1>Counter </h1>
      <h1>{counter}</h1>
    </>
  )
}

export default App
