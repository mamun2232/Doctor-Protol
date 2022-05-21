import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hook/UseAdmin';

const Dashboard = () => {
      const [user] = useAuthState(auth)
      const [admin] = useAdmin(user)
      return (
            <div className='dashborad  max-w-7xl m-auto'>
                  <div class="drawer drawer-mobile">
                        <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                        <div class="drawer-content mx-3">

                              <h1 className='text-4xl text-accent font-bold'>Walcome to Our DashBoard</h1>


                              <Outlet />


                        </div>
                        <div class="drawer-side">
                              <label for="my-drawer-2" class="drawer-overlay"></label>
                              <ul class="menu p-4 overflow-y-auto w-80 bg-white text-base-content">
                                    {/* <!-- Sidebar content here --> */}
                                    <li className='text-black'><NavLink to='Myappoinment'>My Appintment</NavLink></li>
                                    <li className='text-black'><NavLink to='review'>Review</NavLink></li>
                                    {
                                          admin && <>
                                                <li className='text-black'>
                                                      <NavLink to='user'>All User</NavLink></li>
                                                <li className='text-black'>
                                                      <NavLink to='addDoctor'>Add Doctor</NavLink></li>
                                                <li className='text-black'>
                                                      <NavLink to='manageDoctor'>Manage Doctor</NavLink></li>


                                          </>
                                    }

                              </ul>

                        </div>
                  </div>

            </div>
      );
};

export default Dashboard;