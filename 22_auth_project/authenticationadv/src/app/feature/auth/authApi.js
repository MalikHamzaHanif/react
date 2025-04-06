import conf from "../../../conf/conf";
async function loginUser(authData) {
    try {
        const res = await fetch(`${conf.authUrl}/login`, {
            method: "POST",
            body: JSON.stringify(authData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await res.json();
        if (data) {
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(`Got error at login controller: ${error}`);
        return null;
    }
}
async function registerUser(authData) {

    try {
        const res = await fetch(`${conf.authUrl}/register`, {
            method: "POST",
            body: JSON.stringify(authData),
            headers: {
                "Content-Type": "application/json",
            },
        });
        console.log(res);
        
        const data = await res.json();
        if (data) {
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(`Got error at register controller: ${error}`);
        return null;
    }
}
async function getUserData() {
    try {
        const token = localStorage.getItem("x-auth-token")
        const res = await fetch(`${conf.authUrl}/login`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                authorization: token
            },
        });
        const data = await res.json();
        if (data) {
            return data;
        } else {
            return null;
        }
    } catch (error) {
        console.log(`Got error at getuserdata controller: ${error}`);
        return null;
    }
}

export {getUserData,registerUser,loginUser}