import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/Header/About';
import Navber from './Pages/Home/Navber';
import Appaitment from './Pages/Appaitment/Appaitment';
import Login from './Pages/Login/Login';
import Signin from './Pages/Login/Signin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './Pages/Login/RequireAuth';


function App() {
  return (
    <div className='apps'>
      <Navber></Navber>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/apoitment' element={<RequireAuth>
          <Appaitment></Appaitment>
        </RequireAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signin></Signin>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
   
    </div>
  );
}

export default App;
