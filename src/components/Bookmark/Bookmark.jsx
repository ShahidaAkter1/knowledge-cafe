import React from 'react';
<<<<<<< HEAD
import './Bookmark.css'

const Bookmark = ({description}) => {

    // console.log(description);
    return (
        <div className='bookmark'>  
            <h6>{description}</h6> 
=======

const Bookmark = (props) => {

    console.log(props);
    return (
        <div>


            
>>>>>>> ac5d72fb876b369e226d12470c0fc7d081d967fa
        </div>
    );
};

export default Bookmark;