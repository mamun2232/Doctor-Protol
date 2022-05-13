import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/Header/About';
import Navber from './Pages/Home/Navber';
import Appaitment from './Pages/Appaitment/Appaitment';
import Login from './Pages/Login/Login';
import Signin from './Pages/Login/Signin';

function App() {
  return (
    <div className='apps'>
      <Navber></Navber>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/apoitment' element={<Appaitment></Appaitment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signin></Signin>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
