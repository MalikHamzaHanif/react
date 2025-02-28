import { useState } from "react"


function App() {
  let [passwordLength, setPasswordLength] = useState(8)
  let [password, setPassword] = useState("");
  let [number, setNumber] = useState(false)
  let [specialChar, setSpecialChar] = useState(false)
  function generatePassword() {
    setPassword("")
    let newPassword = "";
    const lowercaseAlphabets = [
      'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
      'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    const uppercaseAlphabets = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const specialChars = [
      '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+',
      '[', ']', '{', '}', ';', ':', "'", '"', ',', '<', '>', '.', '/', '?',
      '|', '\\', '`', '~'
    ];
    for (let i = 0; i < passwordLength; i++) {
      if (specialChar) {
        let includeSpecialChar = Math.floor(Math.random() * 2)
        if (includeSpecialChar == 1) {
          let selectedIndex = Math.floor(Math.random() * specialChars.length)
          newPassword += specialChars[selectedIndex]
          continue;
        }
      }
      if (number) {
        let includeDigit = Math.floor(Math.random() * 2)
        if (includeDigit == 1) {
          let selectedIndex = Math.floor(Math.random() * digits.length)
          newPassword += digits[selectedIndex]
          continue;
        }
      }
      let selectedIndex = Math.floor(Math.random() * lowercaseAlphabets.length)
      let smallCapital = Math.floor(Math.random() * 2)
      if (smallCapital == 1) {
        newPassword += lowercaseAlphabets[selectedIndex];
      } else {
        newPassword += uppercaseAlphabets[selectedIndex];
      }


    }
    console.log(newPassword);
    setPassword(newPassword)
  }
  if (!password) {
    generatePassword();
  }
  return (
    <>

      <div id="card">
        <h1>Password generator</h1>
        <div id="pass-copy">
          <input type="text" id="passwordField" value={password} />
          <button onClick={() => {
            window.navigator.clipboard.writeText(password).then(() => {
              console.log("copied");

            }).catch(e => console.log(e)
            )
          }}>Copy</button>
        </div>
        <div id="range-num-char">
          <input type="range" min={0} max={100} value={passwordLength} onChange={(e) => {
            // setPasswordLength(e.target.value)
            // generatePassword()
            // React batches state updates for performance reasons. If it updated the state immediately every time, 
            // your component would re-render too frequently, leading to inefficiencies. Instead, React waits and 
            // processes multiple updates together before triggering a re-render.
            console.log(passwordLength);
            passwordLength = e.target.value
            setPasswordLength(passwordLength);
            console.log(passwordLength);
            generatePassword()
            console.log(passwordLength);
            
          }} id="range" />
          <label htmlFor="numbers">Numbers</label>
          <input type="checkbox" id="numbers" onChange={() => {
            console.log("number is:", number);
            if (number == false) {
              number = true;
              setNumber(true);
            } else {
              number = false;
              setNumber(false);
            }
            console.log("number is:", number);

            generatePassword()
          }} />
          <label htmlFor="chars">Characters</label>
          <input type="checkbox" id="chars" onChange={() => {
            if (specialChar == false) {
              specialChar = true;
              setSpecialChar(specialChar);
            } else {
              specialChar = true;
              setSpecialChar(specialChar);
            }
            generatePassword()
          }} />
        </div>
      </div>

    </>
  )
}

export default App
