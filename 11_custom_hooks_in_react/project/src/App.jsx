import { useEffect, useState } from "react"
import "./App.css"
import CurrencyCard from './components/CurrencyCard'
function App() {
  const [selectedCurr, setSelectedCurr] = useState("pkr");
  const [selectedCurrValue, setSelectedCurrValue] = useState(0);
  const [calculateCurr, setCalculateCurr] = useState("usd");
  const [calculateCurrValue, setCalculateCurrValue] = useState(0);
  function setTheCurrency(c) {
    setSelectedCurr(c)
  }

  function setTheSelectedCurrValue(val) {
    setSelectedCurrValue(val);
  }
  function setThecalculateCurr(cur) {
    setCalculateCurr(cur)
  }
  function setThecalculateCurrValue(value) {
    setCalculateCurrValue(value);
  }
  async function calculateTheCurrency(c) {
    let res = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${selectedCurr}.json`)
    let data = await res.json();
    let curValue = data[selectedCurr][calculateCurr];
    let value = selectedCurrValue * curValue;
    setCalculateCurrValue(value);
  }
  useEffect(() => {
    calculateTheCurrency();
  }, [selectedCurr, selectedCurrValue, calculateCurr])



  function swapBtnFunctionality() {
    let selected = calculateCurr;
    setCalculateCurr(selectedCurr)
    setSelectedCurr(selected);

    let selectedValue = calculateCurrValue;
    setCalculateCurrValue(selectedValue)
    setSelectedCurrValue(selectedValue)
  }

  return (
    <>
      <h1>Currency Converter</h1>
      <CurrencyCard yourLable={"From"} readOnly={false} setTheSelectedCurrValue={setTheSelectedCurrValue} selectedCurrValue={selectedCurrValue} selectedCurrency={selectedCurr} setTheCurrency={setTheCurrency} />
      <button onClick={swapBtnFunctionality}>Swap</button>
      <CurrencyCard yourLable={"To"} readOnly={true} selectedCurrValue={calculateCurrValue} selectedCurrency={calculateCurr} setTheCurrency={setThecalculateCurr} />
    </>
  )
}

export default App
