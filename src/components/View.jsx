import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import List from './List';
import uploadimg from '../assets/upload.png'
import { FloatingLabel, Form } from 'react-bootstrap';
import { saveBlogAPI } from '../services/allAPI';
saveBlogAPI
Form

const View = ({addResponseFromHome,setaddResponseFromHome,deleteResponseFromView,setdeleteResponseFromView}) => {
  
  const [addBlog,setaddBlog]=useState({
    title:"",
    author:"",
    content:"",
    imgUrl:""
  })
  console.log(addBlog);

  const handleBlogPost = async() =>{
    
      const {title,author,content,imgUrl} = addBlog
      if(title&&author&&content&&imgUrl){
        try {
          const result = await saveBlogAPI(addBlog)
          console.log(result);
          if(result.status>=200 && result.status<300){
            alert('Blog has been posted successfully')
            handleClose()
            setaddResponseFromHome(result)
          }
          else{
            console.log(result);
            
          }
          

      }catch (error) {
        console.log('API call failed');
        
      }
    } 
    else{
      alert("Please fill the form")
    }
  }
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="container">
        <div className="row" style={{ width: '100%', minHeight: '100vh' }}>
          <div className="col-lg-6 col-md-12" style={{ marginTop: '20%' }}>
            <h1 style={{ fontSize: '50px' }}>"Unfiltered & Unstoppable: Your Blog, Your Way!"</h1>
            <div className='d-block'><button style={{fontWeight:'600'}} onClick={handleShow} className='btn btn-warning'>START BLOGGING</button></div>
          </div>
          <div className="col-lg-6 col-md-12 " style={{marginTop:'20%'}} >
            <img width={'100%'} src="data:image/jpeg;base64,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" alt="" />
          </div>
        </div>
        <div className='row'>

          <List addResponseFromHome={addResponseFromHome} setdeleteResponseFromView={setdeleteResponseFromView} deleteResponseFromView={deleteResponseFromView} />

        </div>

      </div>
      <Modal
        centered
        size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title >Start Your Blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row container-fluid align-items-center justify-content-center  rounded p-5'>
            <div className="col-lg-4">
              <label >
                <input type="file" style={{ display: 'none' }} />
                <img height={'150px'} width={'150px'} className='img-fluid' src={uploadimg} alt="" />
              </label>
            </div>
            <div className="col-lg-8">
              <div className="mb-3">
                <input onChange={e=>setaddBlog({...addBlog,title:e.target.value})} type="text" placeholder='Title of your Blog' className='form-control p-3' />
              </div>
              <div className="mb-3">
                <input type="text"
                onChange={e=>setaddBlog({...addBlog,author:e.target.value})} 
                placeholder='Author' className='form-control p-3' />
              </div>
              <div className="mb-3">
                <FloatingLabel controlId="floatingTextarea2" label="Type Here">
                  <Form.Control
                    as="textarea"
                    onChange={e=>setaddBlog({...addBlog,content:e.target.value})}
                    placeholder="Leave a comment here"
                    style={{ height: '100px' }}
                  />
                </FloatingLabel>
                <div className="mb-3">
                <input onChange={e=>setaddBlog({...addBlog,imgUrl:e.target.value})} type="text" placeholder='URL of the image' className='form-control mt-3 p-3' />
              </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleBlogPost} variant="primary">Post</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default View