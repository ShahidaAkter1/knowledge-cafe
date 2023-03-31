import React from 'react';
import SingleCard from '../SingleCard/SingleCard';
import './Home.css'

const Home = () => {
    return (
        <div>
          <div className="container-fluid cafe-container">
             {/* {
                cards.map((card) => <SingleCard ></SingleCard>)
               }  */}
            
              <SingleCard></SingleCard>
               
            </div>
        </div>
    );
};

export default Home;