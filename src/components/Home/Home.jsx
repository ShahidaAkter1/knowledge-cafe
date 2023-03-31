import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css'

const Home = ({handleReadTime}) => {

 
    const [loadData, setLoadData] = useState([]);

    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setLoadData(data))
    },[])

    return (
        <>
          <div className="cafe-container">
            {
                loadData.map(singleData=><SingleCard
              key={singleData.id}
                 singleData={singleData}
                 handleReadTime={handleReadTime}
                >

                </SingleCard>)

            }
          
           
               
            </div>
        </>
    );
};

export default Home;