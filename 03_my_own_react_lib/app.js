const root=document.getElementById("root")

const reactElement={
    type:"a",
    props:{
        href:"https://www.google.com",
        target:"blank"
    },
    content:"lets go to google.com"
}
const reactElementTwo={
    type:"h1",
    props:{
        class:"fl-h1",
        id:"my-h1"
    },
    content:"My Name Is Hamza"
}

function createElement(reactElement,whereToInject){
  const element=document.createElement(reactElement["type"]);
 for(let i in reactElement["props"]){
      element.setAttribute(i,reactElement["props"][i])
 }
 element.innerHTML=reactElement["content"]
  whereToInject.appendChild(element);
}

createElement(reactElement,root)
createElement(reactElementTwo,root)