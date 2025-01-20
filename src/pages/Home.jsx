import React, { useState } from 'react'
import View from '../components/View'

const Home = () => {
  const [addResponseFromHome,setaddResponseFromHome]=useState("")
  const [deleteResponseFromView,setdeleteResponseFromView]=useState("")
  return (
    <>
    <div style={{paddingTop:'50px'}}>
      <View addResponseFromHome={addResponseFromHome} setaddResponseFromHome={setaddResponseFromHome} setdeleteResponseFromView={setdeleteResponseFromView} deleteResponseFromView={deleteResponseFromView}/>
    </div>
    </>
  )
}

export default Home