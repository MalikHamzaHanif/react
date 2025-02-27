
import "./App.css"

// function App() {
//   document.body.style.backgroundColor="black"
//   function changeBg(color){
//     document.body.style.backgroundColor=color||"black"
//   }
//   return (
//     <>

// <div id="child">
//   <ul>
//     <li><button onClick={()=>changeBg("red")}>Red</button></li>
//     <li><button onClick={()=>{changeBg("green")}}>Green</button></li>
//     <li><button onClick={()=>{changeBg("blue")}}>Blue</button></li>
//     <li><button onClick={()=>{changeBg("yellow")}}>Yellow</button></li>
//     <li><button onClick={()=>{changeBg("purple")}}>Purple</button></li>
//   </ul>
// </div>

//     </>
//   )
// }
// import { useState } from "react";

// function ReactComponent(props) {
//   console.log(props);

//   return (
//     <>
//       <li>
//         <button onClick={() => document.body.style.backgroundColor = props.color}>{props.color}</button>
//       </li>
//     </>);
// }
// function App() {

//   let [arr, setArr] = useState(["red", "blue", "green", "yellow", "orange"]);


//   return (
//     <>
//       <div>
//         <ul>
//           {arr.map((color) => {
//             // console.log(color);

//             return <ReactComponent color={color} />;
//           })}
//         </ul>
//       </div>
//     </>);
// }

// export default App


import { useState } from "react";


function App() {

  let [color, setColor] = useState("black");
  document.body.style.backgroundColor = color;

  return (
    <>
      <div>
        <ul>
          <li><button onClick={() => setColor("red")}>Red</button></li>
          <li><button onClick={() => setColor("green")}>Green</button></li>
          <li><button onClick={() => setColor("blue")}>Blue</button></li>
          <li><button onClick={() => setColor("yellow")}>Yellow</button></li>
          <li><button onClick={() => setColor("purple")}>Purple</button></li>
        </ul>
      </div>
    </>);
}

export default App
