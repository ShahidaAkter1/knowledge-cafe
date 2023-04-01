import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import { useState } from 'react';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [readTime, setReadTime] =useState("");

  const handleReadTime = (time) =>{
// console.log(time);
const previousReadTime= JSON.parse(localStorage.getItem("readTime"));
    if(previousReadTime){
      // console.log(previousReadTime);
      const sum= previousReadTime + time;
      // console.log(sum);
      localStorage.setItem("ReadTime" , sum);
      setReadTime(sum);
 
    }
    else{
      localStorage.setItem("ReadTime" , time);
      setReadTime(time);
    }
  }

  return (
    <div className="App">
    <Header></Header>
    <div className="container p-5 row mt-5 mx-auto">
      <div className="home-container col-md-8 ">
        <Home handleReadTime={handleReadTime}></Home>
      
      </div>
      <div className="sideCart col-md-4 card">
        <SideCart></SideCart>
      </div>
     </div>
     <QuestionAnswer></QuestionAnswer>
     <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
