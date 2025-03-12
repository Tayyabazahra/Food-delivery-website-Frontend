import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import FoodDisplay from './components/FoodDisplay/FoodDisplay';
import Placeorder from './Pages/Placeorder/Placeorder';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import ExploreMenu from './components/ExploreMenu/ExploreMenu';
import Verify from './Pages/Verify/Verify';
import MyOrders from './Pages/MyOrders/MyOrders';
import Appdownload from './components/Appdownload/Appdownload';
import Footer from './components/Footer/Footer';
import { useState } from 'react'; // Add this import

function App() {
  const [category, setCategory] = useState("All");

  return (
    <div className="App">
      <div className='main-app'>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/sign-up' element={<Signup />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/order' element={<Placeorder />} />
            <Route path='/verify' element={<Verify />} />
            <Route path='/myorders' element={<MyOrders />} />
            <Route path='/menu' element={
              <>
                <ExploreMenu category={category} setcategory={setCategory} />
                <FoodDisplay category={category} />
              </>
            } />
            <Route path='/mobile-app' element={<Appdownload />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;