import React, { useEffect, useState } from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css'

const Home = () => {

 
    const [loadData, setLoadData] = useState([]);

    useEffect( ()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setLoadData(data))
    },[])

    return (
        <div>
          <div className="cafe-container">
            {
                loadData.map(singleData=><SingleCard
                 singleData={singleData}
                >

                </SingleCard>)

            }
          
           
               
            </div>
        </div>
    );
};

export default Home;