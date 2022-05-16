import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
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
                              <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                                    {/* <!-- Sidebar content here --> */}
                                    <li><Link to='Myappoinment'>My Appintment</Link></li>
                                    <li><Link to='review'>Review</Link></li>
                                    <li>{admin && <Link to='user'>All User</Link>}</li>
                              </ul>

                        </div>
                  </div>

            </div>
      );
};

export default Dashboard;