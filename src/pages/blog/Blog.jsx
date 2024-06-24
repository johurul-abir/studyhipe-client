
import { Link } from "react-router-dom"

import{blog} from "../../faker/blog"
import { createSlug } from "../../helpers/Helper";
import './Blog.scss'




const Blog = () => {


  return (
    <>
   
    <div className="blog">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="blogBanner">
              <h1>Our Blogs</h1>
            </div>      
          </div>

          {blog.map((item, index)=> {
          return(
            <div className="card my-2 shadow" key={index}>
              <div className="card-body">
                <div className="container">
                  <div className="row">
                    <div className="col-md-3">
                      <div className="blog-img">
                        <img className="w-100" src={item.photo} alt="photo" />
                      </div>
                    </div>

                    <div className="col-md-9">
                      <div className="blog-content">
                        <h2>{item.title} </h2>
                        <p>{item.content}</p>
                        <Link to={createSlug(item.title)}><button className="btn btn-sm btn btn-primary">Read more</button></Link>
                      </div>
                    </div>
                  </div> 
                </div>           
              </div>
          </div>
          )
        })} 
          
          
        </div>
      </div>
 
    </>
  )
}

export default Blog