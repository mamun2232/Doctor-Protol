import { signOut } from 'firebase/auth';
import React from 'react';

import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Navber = () => {
      const [user] = useAuthState(auth)
      
      
      const menu  = <>
      <li className='mx-3'><Link to='/'>Home</Link></li>
      <li className='mx-3'><a>About</a></li>
      <li className='mx-3'><Link to='/apoitment'>Appoitment</Link></li>
      <li className='mx-3'><a>Review</a></li>
      <li className='mx-3'><a>Contact Us</a></li>
      <li className='mx-3'>{user ? <button onClick={()=> signOut(auth)}>LogOut</button> : <Link to='/login'>Login</Link>}</li>

      
      </>
      return (
            <div class="navbar text-black">
                  <div class="navbar-start">
                        <div class="dropdown">
                              <label tabindex="0" class="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow 0 rounded-box lg:w-52">
                                    {menu}
                                 
                              </ul>
                        </div>
                        <a class="btn btn-ghost normal-case text-xl">Doctors Protol</a>
                  </div>
                  <div class="navbar-center hidden lg:flex">
                        <ul class="menu menu-horizontal p-0">
                              {menu}
                        </ul>
                  </div>
                  
            </div>
      );
};

export default Navber;