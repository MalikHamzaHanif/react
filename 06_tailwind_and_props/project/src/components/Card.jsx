function Card({userName,userNumber="forgot to enter the user number",arr}){
    console.log(arr);
    
    return(<>
    <h1>User</h1>
    <h1>UserName: {userName}</h1>
    <h1>UserNumber: {userNumber}</h1>
    <img className="w-xs h-50" src="https://images.unsplash.com/photo-1740487092927-d6e9d14373cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="userimg" />
    </>)
}
// function Card(props){
//     console.log(arr);
    
//     return(<>
//     <h1>User</h1>
//     <h1>UserName: {props.userName}</h1>
//     <h1>UserNumber: {props.userNumber}</h1>
//     <img className="w-xs h-50" src="https://images.unsplash.com/photo-1740487092927-d6e9d14373cb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8" alt="userimg" />
//     </>)
// }

export default Card