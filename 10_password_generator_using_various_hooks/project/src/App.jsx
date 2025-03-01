import { memo, useCallback, useEffect, useRef, useState } from "react"
import "./App.css"
import Navbar from "./Navbar";

function App() {
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState(false);
  const [char, setChar] = useState(false);
  const [length, setLength] = useState(8);
  const generatePassword = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newPassword = "";
    if (number) {
      str += "1234567890";
    }
    if (char) {
      str += "!@#$%^&*()_+{}|:<>?"
    }

    for (let i = 0; i < length; i++) {
      const selectedIndex = Math.floor(Math.random() * str.length);
      newPassword += str.charAt(selectedIndex);
    }
    setPassword(newPassword);

  }, [length, number, char]);

  useEffect(() => { generatePassword() }, [length, number, char, setPassword]);
  const passwordRef = useRef(null);

  function copyPassword() {
    console.log(passwordRef.current?.value);
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0,3);

  }
  const [luckyNumber, setLuckyNumber] = useState(0);
  const generateLuckyNumber = () => {
    setLuckyNumber(Math.floor(Math.random() * 100 + 1))
    console.log("called");

  }


  const helloAndLuckyNumber = useCallback(() => {
    return "Hello" + luckyNumber;
  }, [])

 
  return (
    <>
      <Navbar helloAndLuckyNumber={helloAndLuckyNumber} userName={"Hamza"} luckynumber={luckyNumber} generateLuckyNumber={generateLuckyNumber} />
      <div><h1>Password Generator</h1></div>
      <div>
        <input ref={passwordRef} type="text" value={password} readOnly />
        <button onClick={copyPassword}>Copy</button>
      </div>

      <div>
        <input type="range" min={0} max={100} value={length} onChange={(e) => { setLength(e.target.value) }} />
        <p>Total Length: {length}</p>
        <label htmlFor="num">Include Numbers</label>
        <input type="checkbox" id="num" onChange={() => { setNumber((prev) => !prev); }} />
        <label htmlFor="char">Include Special Chars</label>
        <input type="checkbox" id="char" onChange={() => { setChar((prev) => !prev); }} />
      </div>
    </>
  )
}

export default App
