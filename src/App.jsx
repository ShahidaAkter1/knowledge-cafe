import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import SideCart from './components/SideCart/SideCart';
import SingleCard from './components/SingleCard/SingleCard';

function App() {
  

  return (
    <div className="App">
    <Header></Header>
    <div className="main row mt-5">
      <div className="home-container col-md-8">
        <Home></Home>
        {/* <SingleCard></SingleCard> */}
      </div>
      <div className="sideCart col-md-4 card">
        {/* <SideCart></SideCart> */}
      </div>
     </div>
    </div>
  )
}

export default App
