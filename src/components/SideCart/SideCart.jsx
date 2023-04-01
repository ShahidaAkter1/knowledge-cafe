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
 
    // console.log(props.bookmarked);
    const [book,setBook]=useState(props.bookmarked);
   
    let len=0;
    useEffect(()=>{
        // console.log(book);

        const previousBookMarked=JSON.parse(localStorage.getItem('bookmark'));
        if(previousBookMarked===null){
            // console.log(previousBookMarked);
           //  console.log('get null  ');
          // setBook(previousBookMarked);
        }
        else{
            //  console.log('exist');
             setBook(previousBookMarked);
        }
    } ,[props.bookmarked])

    // console.log(book.length);
     len=book.length;
    
     


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
            {/* {
                 book.map(data=><h6> {data.description}</h6>)             
            }  */}

             {
                 book.map(data=> <Bookmark
                  description={data.description}
                 ></Bookmark>)      
             }
     

            </div>

        </div>
    );
};

export default SideCart;