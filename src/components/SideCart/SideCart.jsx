import React, { useEffect, useState } from 'react';
import './SideCart.css'

const SideCart = ({ readTime }) => {

    const [time,setTime] = useState(readTime);

    useEffect(()=>{
        const getReadTime=localStorage.getItem("readTime");
        // console.log(getReadTime);
        setTime(getReadTime);
    },[readTime])

    return (
        <div >
            <div className='spentTime '>
                <h3 className='mt-4 p-5'>Spent time on read: <span>{time}</span> min</h3>
            </div>
            <div className="bookMark">
            <h3 className='mt-4 p-5'>Bookmarked Blogs: <span>0</span></h3>
            </div>

        </div>
    );
};

export default SideCart;