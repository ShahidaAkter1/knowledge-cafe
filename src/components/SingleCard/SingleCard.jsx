import React from 'react';
import './SingleCard.css'

const SingleCard = () => {
    return (
        <div className="cafe-card card">
        <div className="cafe-poster w-50 mt-4 m-auto">
         <img className='w-100 mb-3 cover-pic' src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80  " alt="" />
        </div>
      <div className='d-flex justify-content-evenly'>
      <div className=' d-flex' >
     
       <img  className='imageUser img-fluid rounded-circle h-24 w-24 ' src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=1024x1024&w=is&k=20&c=O_h1ic7M0SWTC40NVzYUTLWE2Yy8511S8QPUGEUT9tE=" alt="" />
  
      <div className='author'>
      <h5>Mr. Raju</h5>
      <p>Mar 14(4 Days ago)</p>
      </div>
      </div>
      <div className='read '>
         <div>
         <p>0 <span>5</span> min read</p>
         </div>
         <div>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 iconBookmark">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      </div>
      </div>
      </div>
      <div className='titlePart'>
      <h1 className='fs-5 fw-bold ms-5 '>How to get your first job as a self-taught programmer</h1>
      <p className='ms-5'>#beginners    &nbsp; &nbsp; #programming</p>
      <a className='ms-5' href="">Mark as read</a>
      </div>
   
           </div>  
    );
};

export default SingleCard;