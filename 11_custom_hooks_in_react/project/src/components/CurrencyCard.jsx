import { useEffect, useId, useState } from "react";
import "./Currency.css"

function CurrencyCard({ yourLable, selectedCurrency, setTheCurrency, selectedCurrValue, setTheSelectedCurrValue, readOnly }) {
    const labelId = useId();
    const [currencies, setCurrencies] = useState([]);
    async function getDataFromApi() {
        let latestCurrency = [];
        const res = await fetch("https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json");
        const data = await res.json()
        //    console.log(Object.keys(data));
        // for (let i in data) {
        // latestCurrency = [...latestCurrency, i]
        // latestCurrency.push(i);

        // }
        setCurrencies(Object.keys(data))
        // setCurrencies(latestCurrency);
        // console.log(currencies);
    }
    // if (currencies.length == 0) {
    //     console.log(currencies);
    //     getDataFromApi()
    //     console.log(currencies);
    // }

    useEffect(() => {
        getDataFromApi()
    }, [])
    return (
        <>
            <div id="top">
                <p>{yourLable}</p>
                <p>Currecy Type</p>
            </div>
            <div id="bottom">
                <label htmlFor={labelId}>Amount</label>
                <input id={labelId} type="number" value={selectedCurrValue} readOnly={readOnly} onChange={(e) => {
                    setTheSelectedCurrValue(e.target.value)
                }} />
                <select onChange={(e) => {

                    setTheCurrency(e.target.value);
                }} value={selectedCurrency} name="currency" id="currency">
                    {currencies.map((cur) => (
                        <option key={cur} value={cur}>{cur}</option>
                    ))}
                </select>
            </div>

        </>
    );
}


export default CurrencyCard;