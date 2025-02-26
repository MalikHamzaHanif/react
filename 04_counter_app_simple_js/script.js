function incrementCounter() {


    let value = document.getElementsByTagName("h1")[1]
    let valueTwo = document.getElementsByTagName("h1")[3]

    let parsedValue = parseInt(value.innerHTML) + 1;
    let parsedValueTwo = parseInt(valueTwo.innerHTML) + 1;

    value.innerHTML = parsedValue
    valueTwo.innerHTML = parsedValueTwo
}
function decrementCounter() {
    let value = document.getElementsByTagName("h1")[1]
    let valueTwo = document.getElementsByTagName("h1")[3]

    let parsedValue = parseInt(value.innerHTML) -1;
    let parsedValueTwo = parseInt(valueTwo.innerHTML) - 1;

    value.innerHTML = parsedValue
    valueTwo.innerHTML = parsedValueTwo
}