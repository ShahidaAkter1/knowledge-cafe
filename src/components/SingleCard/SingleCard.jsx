import React, { useState } from 'react';
import './SingleCard.css'
import { ToastContainer, toast } from 'react-toastify';

const SingleCard = (props) => {
    const {singleData,handleReadTime}= props;
  // console.log(props.singleData);

  const {description}=props.singleData;
  // console.log(description);

    return (
      
        <div className="cafe-card card card-container">
           
        <div className="cafe-poster w-50 mt-4 m-auto">
         <img className='w-100 mb-3 cover-pic' src={singleData.poster} alt="" />
        </div>
      <div className='d-flex justify-content-evenly'>
      <div className=' d-flex' >
     
       <img  className='imageUser img-fluid rounded-circle h-24 w-24 ' src={singleData.authorPic} alt="" />
  
      <div className='author'>
      <h5>{singleData.name}</h5>
      <p>{singleData.date}</p>
      </div>
      </div>
      <div className='read '>
         <div>
         <p> <span>{singleData.readTime}</span> min read</p>
         </div>
         <div>
         <svg onClick={()=> props.handleBookMark(description)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 iconBookmark">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
        </svg>
      </div>
      </div>
      </div>
      <div className='titlePart'>
      <h1 className='fs-5 fw-bold ms-5 '>{singleData.description}</h1>
      <p className='ms-5'>#beginners    &nbsp; &nbsp; #programming</p>
    <button className='btnMark' onClick={() => handleReadTime(singleData.readTime)}  href="">Mark as read</button>
    
      </div>
   
           </div>  
    );
};

export default SingleCard;