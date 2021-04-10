import React from 'react'
import img1 from '../../../images/Ellipse 1.png'
import img2 from '../../../images/Ellipse 2.png'
import img3 from '../../../images/Ellipse 3.png'
import BloggInfo from './BloggInfo'

 const Blogg = () => {
    const blogData=[
        {name:'Dr Rahul datta',
        date:'25 april, 2021',
        img:img1,
        message:'services we provide services we provide services we provide services we provide services we services we provide services we provide services we provide services we provide services we ',
         title:'we provide services we provide services  we provide services '},
         {name:'Dr Rahul datta',
         date:'25 april, 2021',
         img:img2,
         message:'services we provide services we provide services we provide services we provide services we services we provide services we provide services we provide services we provide services we ',
          title:'we provide services we provide services we provide services'},
          {name:'Dr Rahul datta',
          date:'25 april, 2021',
          img:img3,
          message:'services we provide services we provide services we provide services we provide services we  services we provide services we provide services we provide services we provide services we',
           title:'we provide services we provide services we provide services'},
     ]
    return (
        <div style={{padding:'100px 0px'}}>
            <h5 style={{paddingTop:'20px'}}>OUR BLOG</h5>
            <h1 style={{paddingTop:'40px',paddingBottom:'100px'}}>From our Blog News</h1>
            <div className='d-flex container'>
                {
                    blogData.map(blog =><BloggInfo blog={blog}> </BloggInfo>)
                }
            </div>
        </div>
    )
}
export default Blogg