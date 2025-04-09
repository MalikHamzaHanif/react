import conf from "../../../conf/conf"


async function signUp(data) {
    try {
        const res = await fetch(`${conf.authUrl}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const userData = await res.json()

        return userData

    } catch (error) {
        console.log("error while registering");
        console.log(error);
        return null
    }
}
async function logIn(data) {
    try {
        const res = await fetch(`${conf.authUrl}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        const userData = await res.json()
       
            return userData
        
    } catch (error) {
        console.log("error while loggin in");
        console.log(error);
        return null
    }
}
async function getUserData() {
    try {
        const token = localStorage.getItem("x-auth-token")
        if (!token) {
            return null;
        }
        const res = await fetch(`${conf.authUrl}/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },

        })
        const userData = await res.json()
        return userData
    } catch (error) {
        console.log("error while getting user data");
        console.log(error);
        return null;
    }
}

export { getUserData, logIn, signUp }