import React, { useEffect, useState } from 'react'
import { getAllBlogs } from '../app/feature/dataslice/dataApi'
import { useDispatch, useSelector } from 'react-redux'
import { getBlogs } from '../app/feature/dataslice/dataSlice'
import { useNavigate, useSearchParams } from 'react-router-dom'
import Input from '../components/Input'
import { useForm } from 'react-hook-form'
import Select from '../components/Select'

function Allblogs() {
  let [sort, setSort] = useState("a-z")
  let [category, setCategory] = useState("All")
  let [search, setSearch] = useState("")
  const [totalPages, setTotalPages] = useState(1)
  const [activePage, setActivePage] = useState(1)
  const blogs = useSelector((state) => state.blog.blogs)
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()
  const options = ["All", 'technology', 'fashion', 'politics', 'other'];
  const [searchParams, setSearchParams] = useSearchParams()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      "category": "All",
      "sort": "a-z"
    }
  })

  useEffect(() => {

    async function getAllBlogsFromServer() {
    setLoading(true)
      const queryObj = {
        sort,
        category,
        page: activePage
      }
      if (search) {
        queryObj.search = search
      }

      const queryString = new URLSearchParams(queryObj).toString()
      setSearchParams(queryObj)

      try {
        const blogs = await getAllBlogs(`?${queryString}`)
        if (blogs) {
          dispatch(getBlogs({ blogs: blogs.data.data }))
          setTotalPages(blogs.totalPages);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error)
      } finally {
        setLoading(false)
      }
    }
    getAllBlogsFromServer()
  }, [sort, search, category, activePage])


  function createButton() {
    const buttons = [];
    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => setActivePage(i)}
          className={`px-4 py-1 m-1 border ${activePage === i ? "bg-blue-500 text-white" : "bg-white text-black"}`}
        >
          {i}
        </button>
      );
    }
    return buttons;
  }




  async function customSearch(data) {

    setLoading(true);
    if (data.search !== "") {
      setSearch(data.search)


    }
    setCategory(data.category)
    setSort(data.sort)
    setLoading(false)

  }


  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    )
  }
  function navigateToSingleBlogPage(id) {
    navigate(`/allblogs/${id}`)
  }
  return blogs.length > 0 ? (
    <div className="p-4 space-y-6">
      <form onSubmit={handleSubmit(customSearch)}>
        <Input
          placeholder="search"
          {...register("search")}
        />
        <Select
          label="Category"
          options={options}
          {...register("category")}
        />
        <Select
          label="Sort"
          options={["a-z", "z-a", "latest", "oldest",]}
          {...register("sort")}
        />
        <button type='submit' >Search</button>
      </form>
      {createButton()}
      {blogs.map((blog) => (
        <div onClick={() => { navigateToSingleBlogPage(blog._id) }} key={blog._id} className="border rounded-lg p-4 shadow">
          <h1 className="text-lg font-bold">{blog.title}</h1>
          <p className="mt-2 text-gray-700">{blog.content}</p>
          <p className="mt-2 text-sm text-blue-600 font-medium">Category: {blog.category}</p>
          <p className="mt-2 text-sm text-blue-600 font-medium">
            CreatedAt: {new Date(blog.createdAt).toLocaleString()}
          </p>
          <p className="mt-2 text-sm text-blue-600 font-medium">
            updatedAt: {new Date(blog.updatedAt).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  ) : (
    <h1 className="text-center mt-10 text-xl font-semibold">No blog found</h1>
  )
}

export default Allblogs
