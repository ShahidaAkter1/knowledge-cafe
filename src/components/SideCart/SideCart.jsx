import React, { useEffect, useState } from 'react';
import './SideCart.css'

const SideCart = ({ readTime,description }) => {

    const [time,setTime] = useState(readTime);

    useEffect(()=>{
        const getReadTime=localStorage.getItem("readTime");
        // console.log(getReadTime);
        setTime(getReadTime);
    },[readTime])

    return (
        <div className='cart'>
            <div className='spentTime '>
                <h5 className='mt-2 p-2'>Spent time on read: <span>{time}</span> min</h5>
            </div>
            <div className="bookMark">
            <h3 className='mt-2 p-2'>Bookmarked Blogs: <span>0</span></h3>
            <span onClick={()=> handleBookMark(description)}></span>
            </div>

        </div>
    );
};

export default SideCart;