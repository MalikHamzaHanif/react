import React, { useState } from 'react';

function Calculator() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operators = ['+', '-', '/', '*'];
  const [stack, setStack] = useState([]);

  function pushValueToStack(value) {
    setStack((prev) => {
      const lastElement = prev[prev.length - 1];
      if (operators.includes(lastElement) && operators.includes(value)) {
        alert('Wrong operator choice');
        return prev;
      } else {
        return [...prev, value];
      }
    });
  }

  function evaluateExpression() {
    let include;
    let operatorWhichIncluded;
    for (let i = 0; i < operators.length; i++) {
      if (stack.includes(operators[i])) {
        include = true;
        operatorWhichIncluded = operators[i];
        break;
      }
    }
    console.log(operatorWhichIncluded);

    if (include) {
      let val1 = stack.slice(0, stack.indexOf(operatorWhichIncluded))
      let val2 = stack.slice(stack.indexOf(operatorWhichIncluded) + 1,)
      console.log("hi");



      let total;
      val1 = parseInt(val1.join(""))
      val2 = parseInt(val2.join(""))

      console.log("i am val1", val1);
      console.log("i am val2", val2);
      switch (operatorWhichIncluded) {
        case "+":
          total = val1 + val2
          break;
        case "-":
          total = val1 - val2

          break;
        case "*":
          total = val1 * val2

          break;
        case "/":
          total = val1 / val2

          break;
        default:
          break;
      }

      setStack([])
      pushValueToStack(total)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-xs bg-white p-4 shadow-lg rounded-lg space-y-4">
        <div className="w-full p-3 text-right bg-gray-200 rounded-lg text-xl font-mono">
          {stack}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {numbers.map((num) => (
            <button
              key={num}
              onClick={(e) => pushValueToStack(e.target.value)}
              value={num}
              className="p-3 bg-blue-500 text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
            >
              {num}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2">
          {operators.map((op) => (
            <button
              key={op}
              onClick={(e) => {
                let include;
                let operatorWhichIncluded;
                for (let i = 0; i < operators.length; i++) {
                  if (stack.includes(operators[i])) {
                    include = true;
                    operatorWhichIncluded = operators[i];
                    break;
                  }
                }
                console.log(operatorWhichIncluded);

                if (include) {
                  let val1 = stack.slice(0, stack.indexOf(operatorWhichIncluded))
                  let val2 = stack.slice(stack.indexOf(operatorWhichIncluded) + 1,)
                  console.log("hi");



                  let total;
                  val1 = parseInt(val1.join(""))
                  val2 = parseInt(val2.join(""))

                  console.log("i am val1", val1);
                  console.log("i am val2", val2);
                  switch (operatorWhichIncluded) {
                    case "+":
                      total = val1 + val2
                      break;
                    case "-":
                      total = val1 - val2

                      break;
                    case "*":
                      total = val1 * val2

                      break;
                    case "/":
                      total = val1 / val2

                      break;
                    default:
                      break;
                  }

                  setStack([])
                  pushValueToStack(total)
                  pushValueToStack(e.target.value)
                } else {

                  pushValueToStack(e.target.value)
                }

              }}
              value={op}
              className="p-3 bg-red-500 text-white rounded-lg text-lg font-semibold hover:bg-red-600 transition"
            >
              {op}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={evaluateExpression}
            className="col-span-2 p-3 bg-green-500 text-white rounded-lg text-lg font-semibold hover:bg-green-600 transition"
          >
            =
          </button>
          <button
            onClick={() => setStack([])}
            className="col-span-2 p-3 bg-gray-500 text-white rounded-lg text-lg font-semibold hover:bg-gray-600 transition"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
