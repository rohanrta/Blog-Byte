import React, { useEffect, useState } from 'react'
import './List.css'
useState
import { getAllBlogssAPI, removeBlogAPI } from '../services/allAPI';
import { Link } from 'react-router-dom';
const List = ({addResponseFromHome,setdeleteResponseFromView,deleteResponseFromView}) => {
  useEffect(()=>{
    getAllPost()
   },[addResponseFromHome,deleteResponseFromView])
  const [allBlogs,setallBlogs]=useState([])
  const getAllPost = async () =>{
      try{
        const result = await getAllBlogssAPI()
        console.log(result);
        if (result.status >=200 && result.status <= 300){
          setallBlogs(result.data) 
          sessionStorage.setItem("allblogs",JSON.stringify(result.data))
    
        }else{
          console.log("Api call Failed");
          
        }
        
      }catch(e){
        console.log(e);
        
      }
    }
    const removeBlog = async(id) =>{
      try {
         const result=await removeBlogAPI(id)
         setdeleteResponseFromView(result)
      } catch (error) {
        console.log(error);
        
      }
    }
    
  return (
    // <div className='table-responsive ' >
    //   <table className='table border container' style={{width:'100%',tableLayout:'fixed'}}>
    //     <tr>
    //       <thead>
    //         <th>#</th>
    //         <th>Title</th>
    //         <th>Author</th>
    //         <th>Action</th>
    //         <th>Delete</th>
    //       </thead>
    //       <tbody>
    //         <tr>
    //         <td>1</td>
    //         <td>sfs</td>
    //         <td>fdc</td>
    //         <td>View <i class="fa-solid fa-eye"></i></td>
    //         <td><i class="fa-solid fa-trash"></i></td>
    //         </tr>
    //       </tbody>
    //     </tr>
    //   </table>
    // </div>
    <div class="table-container">
  <table>
    <thead>
      <tr>
        <th>Sno</th>
        <th>Title</th>
        <th>Author</th>
        <th>Action</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>{
      allBlogs?.length>0?
      allBlogs?.map((blogDetail,index)=>(
      <tr key={blogDetail?.id}>
        <td>{index+1}</td>
        <td>{blogDetail?.title.toUpperCase()}</td>
        <td>{blogDetail?.author.toUpperCase()}</td>
        <td><Link to={`/${blogDetail.id}/showBlog`}><button className='btn'><i class="fa-solid fa-eye text-primary"></i> VIEW MORE</button></Link></td>
        <td><button onClick={()=>removeBlog(blogDetail?.id)} className='btn'><i class="fa-solid fa-trash text-danger"></i></button></td>
      </tr>
      )):
      <div className='fw-bolder test-danger fs-5'>NO BLOGS ARE POSTED</div>
}
    </tbody>
  </table>
</div>
  )
}

export default List