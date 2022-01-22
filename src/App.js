
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Products from './components/Products/Products';
import Profile from './components/Profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Detail from './Detail/Detail';


function App() {
  const products = [
    {
      id:0,
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/Hc72f3726c52c459a8c9d68be9cea111eF.jpg_300x300.jpg",
      name: "AirPods",
      price: `6,99 $`,
    },
    {
      id:1,
      imgSrc: `https://s.alicdn.com/@sc01/kf/Hdfd49d641a21425b980735a170a9de89K.jpg_300x300.jpg`,
      name: "Smart watch",
      price: `8,64 $`,
    },
    {
      id:2,
      imgSrc:
        "https://s.alicdn.com/@sc01/kf/H06b8a5528adc413b8f4eeef65d889acfK.jpg_300x300.jpg",
      name: "Iphone 11 ",
      price: `150 $`,
    },
  ];
  return (
    <div className="App">
     <BrowserRouter>
       <NavBar/>
     <Routes>
       {/* Switch */}
     <Route path="/" element={<Home/>}/>
     {/* <Route path="/" component = {Home}/> */}
     <Route path="/profile" element={<Profile/>}/>
     <Route path="/products" element={<Products products={products}/>}/>
     <Route path="/products/:id" element={<Detail products={products}/>}/>
   
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
