import { useParams } from "react-router-dom";
import { blog } from "../../faker/blog";
import { createSlug } from "../../helpers/Helper";
import "./SingleBlog.scss";
import { useState } from "react";



const SingleBlog = () => {
    const {slug} = useParams()
   const blogData = blog.find((data) => slug === createSlug(data.title))
   
    const [like, setLike] = useState(5);
    //const [like, setdDisLike] = useState(3);

    const likeHeandler = () =>{

        setLike((prevState) =>  prevState + 1);
    }
    const dislikeHeandler = () =>{
        setLike((prevState) => prevState - 1)
    }
    
    
  
  return (
    <>
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-10">
                <div className="blogtitle my-3">
                    <h1>{blogData.title}</h1>
                </div>
                <div className="blogimg my-3">
                    <img src={blogData.photo} alt="photo" />
                </div>
                <div className="blogcontent my-3">
                    <p>{blogData.content}</p>
                    
                </div>
                <br />
                <hr />
                <br />
                <div className="userReaction">
                    <div className="like">
                        <button className="btn btn-sm btn btn-info" onClick={likeHeandler}>like</button> 
                        &nbsp;
                        <button className="btn btn-sm btn btn-danger" onClick={dislikeHeandler}>dislike</button>
                        <h6>{like}</h6>
                       

                    </div>
                    <div className="comment">
                        <button className="btn btn-sm btn btn-success">Comment</button>
                        <p>0</p>
                    </div>
                </div>
                <hr />

                
            </div>
        </div>
    </div>
    </>

  )
}

export default SingleBlog