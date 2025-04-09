import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { deleteBlog, getSingleBlog, updateBlog } from '../app/feature/dataslice/dataApi';
import Input from '../components/Input';
import { useForm } from 'react-hook-form';
import Select from '../components/Select';

function Singleblog() {
    const { id } = useParams()
    const { register, handleSubmit, formState: { errors }, setValue } = useForm();
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setcategory] = useState("");
    const [loading, setLoading] = useState(true);
    const [notEditAble, setNotEditAble] = useState(true);
    const options = ['technology', 'fashion', 'politics', 'other'];
    const navigate = useNavigate();
    const [resMsg, setResMsg] = useState("")

    useEffect(() => {
        async function getSingleBlogData() {
            setTitle("")
            setContent("")
            setcategory("")
            try {
                const blogData = await getSingleBlog(id);
                if (blogData.success === true) {
                    const { title, content, category } = blogData.data.data;
                    setValue("title", title)
                    setValue("content", content)
                    setValue("category", category)
                    setTitle(title)
                    setContent(content)
                    setcategory(category)
                }
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        getSingleBlogData()
    }, [])

    async function updateTheBlog(data) {
        setResMsg("");
        try {
            setLoading(true)
            const blogData = await updateBlog(data, id)
            if (blogData.success === true) {
                const { title, content, category } = blogData.data.data;
                setTitle(title)
                setContent(content)
                setcategory(category)
                setResMsg(blogData.data.msg)
            } else {
                setResMsg(blogData.data.msg)
            }
        } catch (error) {
            setResMsg("Failed to update blog")
        } finally {
            setLoading(false)
        }
    }

    async function deleteTheBlog() {
        setResMsg("")
        try {
            setLoading(true)
            const blogData = await deleteBlog(id)
            if (blogData.success === true) {
                navigate("/allblogs")
            } else {
                setResMsg(blogData.data.msg)
            }
        } catch (error) {
            setResMsg("Blog Deletion failed")
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return <h1 className="text-center text-2xl font-semibold mt-10">Loading...</h1>
    }

    if (!loading && (!content || !category || !title)) {
        return <h1 className="text-center text-2xl font-semibold mt-10">No blog found with this id</h1>
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
            <form onSubmit={handleSubmit(updateTheBlog)} className="space-y-6">

                <div>
                    <Input
                        disabled={notEditAble}
                        placeholder="Enter your title here please"
                        label="Title"
                        {...register("title", { required: "title can not be empty" })}
                    />
                    {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                </div>

                <div>
                    <Input
                        disabled={notEditAble}
                        placeholder="Enter your content here please"
                        label="Content"
                        {...register("content", { required: "content can not be empty" })}
                    />
                    {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content.message}</p>}
                </div>

                <div>
                    <Select
                        label="Category"
                        options={options}
                        disabled={notEditAble}
                        {...register("category", { required: "category is required" })}
                    />
                    {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                </div>

                {resMsg && <p className="text-green-600 font-medium">{resMsg}</p>}

                <div className="flex flex-wrap gap-4">
                    <button
                        type='submit'
                        disabled={notEditAble}
                        className={`px-4 py-2 rounded text-white transition-all ${
                            notEditAble ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                    >
                        Update Now
                    </button>

                    <button
                        type="button"
                        onClick={() => setNotEditAble((prev) => !prev)}
                        className="px-4 py-2 rounded bg-yellow-500 hover:bg-yellow-600 text-white"
                    >
                        {notEditAble ? "Open Editing" : "Close Editing"}
                    </button>

                    <button
                        type="button"
                        onClick={deleteTheBlog}
                        className="px-4 py-2 rounded bg-red-600 hover:bg-red-700 text-white"
                    >
                        Delete Now
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Singleblog;
