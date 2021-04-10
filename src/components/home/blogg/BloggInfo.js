import React from 'react'


 const BloggInfo = ({blog}) => {
    return (
        <div className='col-md-4 text-center p-4 border m-3'>
       
            <div className='d-flex'>
                <img src={blog.img}></img>
                <div>
                     <h5>{blog.name}</h5>
              <h4>{blog.date}</h4>
                </div>
               
            </div>
            <h4 style={{padding:'10px',letterSpacing:'1px',textAlign:'justify'}}>{blog.title}</h4>
            <p style={{padding:'10px',letterSpacing:'1px',textAlign:'justify'}}>{blog.title}</p>
             
    </div>
    )
}
export default BloggInfo