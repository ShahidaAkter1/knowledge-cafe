import React, { useEffect, useState } from 'react';
import './SideCart.css'
import Bookmark from '../Bookmark/Bookmark';
 

const SideCart = (props) => {
    //spent Time
    // console.log(props.spentTime);
    const [timeSpent,setTimeSpent]=useState(props.spentTime);
    useEffect( ()=>{
       const previousSpentTime = JSON.parse(localStorage.getItem('SpentTime'));
       if(previousSpentTime===null){
        setTimeSpent(0);
       }
       else{
        setTimeSpent(previousSpentTime);
       }
    },[props.spentTime])





    

    //bookmark
    const [book,setBook]=useState([]);
    useEffect( ()=>{
        setBook(props.bookmarked);
    },[])
    // console.log(book);


   const { readTime,handleBookMark }=props;
//  console.log(handleBookMark);
    const [time,setTime] = useState(readTime);
    // const [cartMark, setCartMark] = useState([]);

    useEffect(()=>{
        const getReadTime=localStorage.getItem("readTime");
        // console.log(getReadTime);
        setTime(getReadTime);
    },[readTime])


//   console.log(props.bookmarked);
// const len=props.bookmarked.length;
const len=0;




  



    return (
        <div className='cart'>
            <div className='spentTime '>
                <h5 className='mt-2 p-2'>Spent time on read: <span>{props.spentTime}</span> min</h5>
            </div>
            <div className="bookMark">
            <h3 className='mt-2 p-2'>Bookmarked Blogs: <span> {len}</span></h3>
            <span onClick={()=> handleBookMark(description)}></span>
{/* 
            {
                 book.map(data=><p> {data.description}</p>)             
            }
  */}


            </div>

        </div>
    );
};

export default SideCart;