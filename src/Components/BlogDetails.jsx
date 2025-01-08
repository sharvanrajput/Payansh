import { useParams } from "react-router";
import Experties_complesity from "../../public/img/Experties_complexity.webp"
import blogdata from '../api/Blogdata.json'
import Button from "./Button";

function BlogDetails() {
    const { id } = useParams();
    const blog = blogdata.find((b) => b.id === parseInt(id));

    if (!blog) {
        return <h2>Blog not found</h2>;
    }

    return (
        <>
            <section className="expertiex_complesity" style={{ paddingTop: 200 }}>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="mainimg">
                                <img src={blog.image} className='w-100' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center g-4">
                        <div className="col-10 ">
                            <div className="bottom_two">

                                <div className="banner_left text-white">
                                    <h1 className="section-head heading-graident">{blog.heading}</h1>
                                    <p className='my-4'>{blog.content}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default BlogDetails;
