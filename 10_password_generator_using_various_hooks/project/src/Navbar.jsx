function Navbar({ userName = "Please enter username", luckynumber, generateLuckyNumber,helloAndLuckyNumber }) {
    return (
        <>
            <h1>Welcome {userName}</h1>
            <h2>Your Lucky Number Is : {luckynumber}</h2>
            <button onClick={() => {
                console.log("navbar re-rendered");
                generateLuckyNumber();
            }}>Click To Generate New Lucky Number {luckynumber}</button>
            <h1>No Effect On Me{helloAndLuckyNumber()}</h1>
        </>)
}

export default Navbar