import React from 'react'
import blogdata from '../api/Blogdata.json'
import Button from './Button'
import { Link } from "react-router";

import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";

const   Blogs = () => {
    return (
        <>
            <section className="blogs mt-5">
                <div className="container">
                    <div className="row g-4">
                        {blogdata.map((item, index) => {

                            return (


                                <div className="col-lg-4 col-md-6 text-white
                                " key={index}>
                                    <div className="Blog_box h-100">
                                        <div className="blog_img">
                                            <img src={item.image} className='img-fluid' alt="" />
                                        </div>
                                        <div className="b_heading">
                                            <h3>

                                                {item.heading}
                                            </h3>
                                        </div>
                                        <div className="b_title">
                                            <p>

                                                {item.content}
                                            </p>
                                        </div>
                                        <div className="date_admin">
                                            <div className="date">
                                                <HiOutlineCalendarDateRange className='me-2 fs-4' />

                                                {item.post_date}

                                            </div>
                                            <div className="views">
                                                <AiOutlineEye className='me-2 fs-4' />
                                                {item.views}

                                            </div>
                                        </div>
                                        <div className="b_button">
                                         <Link to={`/blogs/${item.id}`}>   <Button text={item.button_text} onClick={() => navigate("/blogdetails")} /></Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blogs
// import { Link } from "react-router";

// const blogs = [
//   { id: 1, title: "How to Learn React", summary: "A guide to start learning React..." },
//   { id: 2, title: "Understanding React Hooks", summary: "Hooks are a powerful feature in React..." },
// ];

// function BlogList() {
//   return (
//     <div>
//       <h1>Blog List</h1>
//       <ul>
//         {blogs.map((blog) => (
//           <li key={blog.id}>
//             <h2>{blog.title}</h2>
//             <p>{blog.summary}</p>
//             <Link to={`/blogs/${blog.id}`}>Read More</Link> {/* Redirects to BlogDetails */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default BlogList;
