import React from 'react'
import { useParams } from "react-router-dom"
function UserWithId() {
    const {userId} = useParams()
  return (
    <div>
      <h1>Hello </h1>
      <h1>{userId}</h1>
    </div>
  )
}

export default UserWithId
