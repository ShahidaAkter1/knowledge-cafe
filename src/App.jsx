import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import { useEffect, useState } from 'react';
import QuestionAnswer from './components/QuestionAnswer/QuestionAnswer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  let previousSpentTime = JSON.parse(localStorage.getItem('SpentTime'));
  if (previousSpentTime === null) {
    previousSpentTime = 0;
  }
  const [spentTime, setSpentTime] = useState(previousSpentTime);
  const handleReadTime = (time) => {
    // console.log(time);
    let sum = 0;
    // console.log(previousSpentTime);
    if (previousSpentTime) {
      sum = previousSpentTime + time;
      localStorage.setItem('SpentTime', sum);
      setSpentTime(sum);
    }
    else {
      localStorage.setItem('SpentTime', time);
      setSpentTime(time);
    }
  }


  const getBookmark = JSON.parse(localStorage.getItem('bookmark'));
  const [bookmarked, setBookmarked] = useState([]);
  const handleBookMark = (description) => {
    // console.log(description);
    const previousBookmark = JSON.parse(localStorage.getItem("bookmark"));
    // console.log(previousBookmark);
    let bookmark = [];
    const singleData = { description, bookmark: true };
    // console.log(singleData);

    if (previousBookmark) {
      // console.log("ache");

      const isSingleDataMarked = previousBookmark.find(single => single.description == description);
      // console.log(isSingleDataMarked);

      if (isSingleDataMarked) {
        // alert("already bookmark");
        toast(" wow already Bookmarked!");
      }
      else {
        bookmark.push(...previousBookmark, singleData);
        // console.log(bookmark);
        localStorage.setItem("bookmark", JSON.stringify(bookmark))
        setBookmarked(bookmark);
      }
    }
    else {
      // console.log("nai");
      bookmark.push(singleData);
      localStorage.setItem("bookmark", JSON.stringify(bookmark));
      setBookmarked(bookmark);
    }


  }

  //  console.log(bookmarked);

  return (
    <div className="App">
      <Header></Header>
      <div className="container p-5 row mt-5 mx-auto">
        <div className="home-container col-md-8 ">
          <Home handleReadTime={handleReadTime}
            handleBookMark={handleBookMark}

          ></Home>

        </div>
        <div className="sideCart col-md-4 card">
          <SideCart
            bookmarked={bookmarked}
            spentTime={spentTime}
          ></SideCart>
        </div>
      </div>
      <QuestionAnswer></QuestionAnswer>
      <ToastContainer></ToastContainer>
    </div>
  )
}

export default App
