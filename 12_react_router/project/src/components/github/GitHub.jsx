import React, { useEffect, useState } from 'react'
import {useLoaderData} from "react-router-dom";
function GitHub() {
    const data=useLoaderData();
    // const [ userFollower, setFollowers ]= useState("")
    // const [ userImgLink, setImageLink ] = useState("")
    // useEffect(() => {
    //     fetch("https://api.github.com/users/MalikHamzaHanif").
    //         then((data) => {
    //             return data.json()}).
    //         then((data) => {
            
                
    //             setFollowers(data.followers);
    //             setImageLink(data.avatar_url);
    //         }).catch(e => console.log(e)
    //         )
    // },[])
    return (
        <div>
            <h1>Wellcome</h1>
            {/* <h1>{userFollower}</h1>
            <img src={userImgLink} alt="user image" /> */}
            <h1>{data.followers}</h1>
            <img src={data.avatar_url} alt="user image" />
        </div>
    )
}

export default GitHub


export   async  function loadGitHubData(){
   const res=await fetch("https://api.github.com/users/MalikHamzaHanif");
   const data=await res.json();
   return data;
}
