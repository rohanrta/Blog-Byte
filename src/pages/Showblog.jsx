import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import {  useParams } from 'react-router-dom'
import { editFormAPI } from '../services/allAPI'

Button
useEffect
const Showblog = () => {
  const handleEditButtonClick = () => {
    setIsEditing(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsEditing(false); // Close the modal
  };
  const getAllPost = async () =>{
        try{
          const result = await getAllBlogssAPI()
          console.log(result);
          if (result.status >=200 && result.status <= 300){
            setallBlogs(result.data) 
            
      
          }else{
            console.log("Api call Failed");
            
          }
          
        }catch(e){
          console.log(e);
          
        }
      }
  const editPost = async(e) =>{
    e.preventDefault()
    try {
      const updatedBlog = { ...blog, ...editForm };
      await editFormAPI(updatedBlog); // Send the updated blog to the server
      setBlog(updatedBlog);
       getAllPost()// Update the local state with the new blog data
      handleCloseModal();
    } catch (error) {
      console.log(error);
      
      
    }
  }
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ title: '', content: '',imgUrl:'',author:'' });
  const [blog,setBlog]=useState({})
  const {id} =useParams()
  useEffect(() => {
    // Retrieve the blogs from session storage
    const allBlogs = JSON.parse(sessionStorage.getItem("allblogs"));

    // Find the blog with the matching ID
    const foundBlog = allBlogs?.find(blog => blog.id == id); // Assuming id is a number

    if (foundBlog) {
      setBlog(foundBlog); // Set the found blog to state
      setEditForm({ title: foundBlog.title, content: foundBlog.content,imgUrl: foundBlog.imgUrl,author: foundBlog.author }); 
    } else {
      console.log("Blog not found");
    }
  }, [id]);
  return (
    <>
    <div style={{paddingTop:'100px',minHeight:'100vh'}} className='container d-flex align-items-center'>
      <div className="row w-100 shadow d-flex align-items-center justify-content-center p-3">
        <div className="col-lg-6">
          <div className='d-flex justify-content-center align-items-center'>
          <img width={'400px'} src={blog.imgUrl} alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <h1 style={{fontSize:'70px',fontWeight:'600'}}>{blog.title}</h1>
          <p style={{fontSize:'25px'}}>{blog.author}</p>
          <p style={{textAlign:'justify',fontSize:'15px'}}>{blog.content}</p>
          <button onClick={handleEditButtonClick} className='btn btn-primary mt-5 p-2'><i class="fa-regular fa-pen-to-square"> EDIT</i></button>
        </div>
      </div>
      <Modal show={isEditing} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={editPost}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="title"
                value={editForm.title}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Content</label>
              <textarea
                className="form-control"
                id="content"
                value={editForm.content}
                onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">imgurl</label>
              <textarea
                className="form-control"
                id="imgUrl"
                value={editForm.imgUrl}
                onChange={(e) => setEditForm({ ...editForm, imgUrl: e.target.value })}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content" className="form-label">Author</label>
              <textarea
                className="form-control"
                id="author"
                value={editForm.author}
                onChange={(e) => setEditForm({ ...editForm, author: e.target.value })}
              />
            </div>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </div>
    </>
  )
}

export default Showblog