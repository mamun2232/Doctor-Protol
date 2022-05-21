import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppoinment = () => {
      const [myAppoinment, setAppoinment] = useState([])
      const [user] = useAuthState(auth)
      const navigate = useNavigate()
      console.log(user);
      useEffect(() => {
            fetch(`http://localhost:5000/myBooking?patient=${user.email}`, {
                  method: "GET",
                  headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  }
            })
                  .then(res => {
                        // cheack jwt token stutas 
                        if(res.status == 401 || res.status === 403){
                              signOut(auth)
                              localStorage.removeItem('accessToken')
                              navigate('/login')

                        }
                        return res.json()
                  })
                  .then(data => setAppoinment(data))

      }, [])
      
      return (
            <div className="my-appoainment bg-white">
                  <p className='text-xl text-black mt-2'>My Appoinment</p>
                  <div class="overflow-x-auto">
                        <table class="table w-full  ">

                              <thead className=''>
                                    <tr>
                                          <th></th>
                                          <th>Name</th>
                                          <th>Service</th>
                                          <th>Time</th>
                                          <th>Date</th>
                                          <th>Payment</th>
                                    </tr>
                              </thead>
                              <tbody>

                                    {
                                          myAppoinment.map(appoanment =>
                                                <tr>
                                                      <th>{appoanment.length}</th>
                                                      <td>{appoanment.patienName}</td>
                                                      <td>{appoanment.treatment}</td>
                                                      <td>{appoanment.slot}</td>
                                                      <td>{appoanment.date}</td>
                                                      <td>
                                                            {/* set a payment button  */}
                                                            {
                                                                  (appoanment.price && !appoanment.paid) && <Link to={`/dashborad/payment/${appoanment._id}`} ><button className='btn btn-md btn-success'>Pay</button></Link>

                                                            }

                                                            {/* judi payment hoy paid dekabo  */}
                                                            {
                                                            (appoanment.price && appoanment.paid) && <p className='text-succes'>
                                                                  Paid
                                                            </p>

                                                            }


                                                      </td>

                                                </tr>

                                          )
                                    }
                              </tbody>
                        </table>
                  </div>
            </div>
      );
};

export default MyAppoinment;