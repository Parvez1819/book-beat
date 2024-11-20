import { useLoaderData } from "react-router-dom";
import Blog from "../Blog/Blog";


const Blogs = () => {
  const blogs = useLoaderData();
  console.log(blogs)
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 gap-5">
        {
          blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;