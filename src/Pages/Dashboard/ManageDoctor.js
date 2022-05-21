import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheard/Loading';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {

      const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        }).then(res => res.json()));

   if(isLoading){
         return <Loading></Loading>
   }
     


      return (
            <div>
                  <p className='text-xl text-black mt-2'>Manage All Doctor </p>
                  <div className="my-appoainment bg-white">
                  <div class="overflow-x-auto">
                        <table class="table w-full  ">

                              <thead className=''>
                                    <tr>
                                          <th>No</th>
                                          <th>Picture</th>
                                          <th>Name</th>
                                          <th>Speciality</th>
                                          <th>Acction</th>
                                    </tr>
                              </thead>
                              <tbody>

                                    {
                                          doctors?.map((doctor , index) => <DoctorRow
                                          doctor={doctor}
                                          key={doctor._id}
                                          index={index}
                                          refetch={refetch}
                                          
                                          >


                                          </DoctorRow>)
                                       
                                    }
                              </tbody>
                        </table>
                  </div>
            </div>
            </div>
      );
};

export default ManageDoctor;