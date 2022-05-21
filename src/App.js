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
import { Toaster } from 'react-hot-toast';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppoinment from './Pages/Dashboard/MyAppoinment';
import Review from './Pages/Dashboard/Review';
import AllUser from './Pages/Dashboard/AllUser';
import RequareAdmin from './Pages/Login/RequareAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
import ManageDoctor from './Pages/Dashboard/ManageDoctor';
import Payment from './Pages/Dashboard/Payment';


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

        <Route path='/dashborad'  element={<RequireAuth>
          <Dashboard>
          </Dashboard>
        </RequireAuth>}>

          <Route path='/dashborad/Myappoinment' index element={<MyAppoinment></MyAppoinment>}></Route>
          <Route path='/dashborad/review' element={<Review></Review>}></Route>
          <Route path='/dashborad/payment/:id' element={<Payment></Payment>}></Route>
          <Route path='/dashborad/user' element={
          <RequareAdmin>
            <AllUser></AllUser>
          </RequareAdmin>}>
          </Route>
          <Route path='/dashborad/addDoctor' element={
          <RequareAdmin>
            <AddDoctor></AddDoctor>
          </RequareAdmin>}>
          </Route>
          <Route path='/dashborad/manageDoctor' element={
          <RequareAdmin>
            <ManageDoctor></ManageDoctor>
          </RequareAdmin>}>
          </Route>

        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signin></Signin>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
   
    </div>
  );
}

export default App;
