import Card from "./components/Card.jsx"
function App() {
  return (<>
    <h1 className="bg-amber-500 font-black ">Hello</h1>
    <Card userName="Hamza" userNumber="032222222222222" />
    <Card userName="Ali" userNumber="039999999266622" arr={{name:"ahzma",age:12,married:false}} />
  </>);
}

export default App