import React, { useEffect, useState } from 'react'
import { getAllBlogs } from '../app/feature/dataslice/dataApi'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../app/feature/dataslice/dataSlice'
import { useNavigate } from 'react-router-dom'

function Allblogs() {
  const blogs = useSelector((state) => state.blog.blogs)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const navigate=useNavigate()

  useEffect(() => {
    async function getAllBlogsFromServer() {
      try {
        const blogs = await getAllBlogs()
        if (blogs) {
          dispatch(getBlogs({ blogs: blogs.data.data }))
        }
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }
    getAllBlogsFromServer()
  }, [])

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    )
  }
  function navigateToSingleBlogPage(id){
    
    
    navigate(`/allblogs/${id}`)
  }
  return blogs.length > 0 ? (
    <div className="p-4 space-y-6">
      {blogs.map((blog) => (
        <div onClick={()=>{navigateToSingleBlogPage(blog._id)}} key={blog._id} className="border rounded-lg p-4 shadow">
          <h1 className="text-lg font-bold">{blog.title}</h1>
          <p className="mt-2 text-gray-700">{blog.content}</p>
          <p className="mt-2 text-sm text-blue-600 font-medium">Category: {blog.category}</p>
        </div>
      ))}
    </div>
  ) : (
    <h1 className="text-center mt-10 text-xl font-semibold">No blog found</h1>
  )
}

export default Allblogs
