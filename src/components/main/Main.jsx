import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Bookmark from "../bookmark/Bookmark";
import Card from "../card/Card";

const Main = () => {
const [blogs,setBlogs] = useState([])
const [bookBlogs, setBookBlogs] = useState([])

useEffect(()=>{
    fetch("blog.json")
    .then(res => res.json())
    .then(data => setBlogs(data));
},[])


// handle bookmark 

function addBookmark (blog){
    const updateBlog = bookBlogs.find(b => b.id === blog.id);
    if(!updateBlog){
        setBookBlogs([...bookBlogs, blog])
        toast.success("Just Wow 😍")
    }else{
        
        toast.warn("already added !");
    }

}



// console.log(blogs)

    return (
        <div className="max-w-6xl mx-auto md:flex gap-4 my-10 px-2">
          
            <div className="md:w-[75%]">
               {blogs.map((blog,id)=> <Card key={id} blog={blog} addBookmark={addBookmark}></Card>)}
            </div>
            <div className="md:w-[25%]">
               <Bookmark bookBlogs={bookBlogs}></Bookmark>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Main;