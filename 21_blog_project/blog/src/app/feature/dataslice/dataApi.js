import { useSearchParams } from "react-router-dom";
import conf from "../../../conf/conf"


async function getAllBlogs(searchParams) {
    try {
       
        const token = localStorage.getItem("x-auth-token")
        if (!token) {
            return null;
        }
        console.log("here are search params inside datapi",searchParams);
        
        const res = await fetch(`${conf.blogUrl}${searchParams?searchParams:""}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },

        })
        const blogData = await res.json()
        if (blogData.success === true) {
            return blogData
        } else {
            return null
        }
    } catch (error) {
        console.log("error while registering");
        console.log(error);
        return null
    }
}
async function getSingleBlog(blogId) {
    const token = localStorage.getItem("x-auth-token")
    if (!token) {
        return null;
    }
    try {
        const res = await fetch(`${conf.blogUrl}/${blogId}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },

        })
        const blogData = await res.json()
        if (blogData.success === true) {
            return blogData
        } else {
            return null
        }
    } catch (error) {
        console.log("error while loggin in");
        console.log(error);
        return null
    }
}


async function postBlog(data) {
    try {
        const token = localStorage.getItem("x-auth-token")
        if (!token) {
            return null;
        }
        const res = await fetch(`${conf.blogUrl}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)

        })
        const blogData = await res.json()
        if (blogData.success === true) {
            return blogData
        } else {
            return null
        }
    } catch (error) {
        console.log("error while getting user data");
        console.log(error);
        return null
    }
}




async function updateBlog(data, blogId) {
    try {
        const token = localStorage.getItem("x-auth-token")
        if (!token) {
            return null;
        }
        const res = await fetch(`${conf.blogUrl}/${blogId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(data)

        })
        const blogData = await res.json()
     
            return blogData
       
    } catch (error) {
        console.log("error while getting user data");
        console.log(error);
        return null
    }
}
async function deleteBlog(blogId) {
    try {
        const token = localStorage.getItem("x-auth-token")
        if (!token) {
            return null;
        }
        const res = await fetch(`${conf.blogUrl}/${blogId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },


        })
        const blogData = await res.json()
     
            return blogData
    } catch (error) {
        console.log("error while getting user data");
        console.log(error);
        return null
    }
}

export { getAllBlogs, getSingleBlog, postBlog, deleteBlog, updateBlog }