import React from 'react';
import './Bookmark.css'

const Bookmark = ({description}) => {

    // console.log(description);
    return (
        <div className='bookmark'>  
            <h6>{description}</h6> 
        </div>
    );
};

export default Bookmark;