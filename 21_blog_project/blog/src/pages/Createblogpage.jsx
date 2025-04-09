import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../components/Input'
import Select from '../components/Select'
import { postBlog } from '../app/feature/dataslice/dataApi'

function Createblogpage() {
  const options = ['technology', 'fashion', 'politics', 'other']
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const [error, setError] = useState('')
  const [blogSuccessMsg, setBlogSuccessMsg] = useState('')

  async function createBlog(data) {
    setError('')
    setBlogSuccessMsg('')
    try {
      const blogdata = await postBlog(data)
      if (blogdata.success === true) {
        setBlogSuccessMsg(blogdata.data.msg)
      } else {
        setError('Error while creating the blog')
      }
    } catch (error) {
      setError('Error while creating the blog')
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Create Blog</h1>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      {blogSuccessMsg && <p className="text-green-500 text-sm mb-4">{blogSuccessMsg}</p>}

      <form onSubmit={handleSubmit(createBlog)} className="space-y-5">
        <div>
          <Input
            type="text"
            placeholder="Enter your title here"
            label="Title"
            {...register('title', { required: 'Title cannot be empty.' })}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>

        <div>
          <Input
            type="text"
            placeholder="Enter your content here"
            label="Content"
            {...register('content', { required: 'Content cannot be empty.' })}
          />
          {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
        </div>

        <div>
          <Select
            label="Category"
            options={options}
            {...register('category', { required: 'Category is required' })}
          />
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
        >
          Create Blog
        </button>
      </form>
    </div>
  )
}

export default Createblogpage
