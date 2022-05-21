import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import { Navigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Sheard/Loading';


const AddDoctor = () => {
      const { register, formState: { errors }, handleSubmit } = useForm();

      // loadin to serivece to name 
      const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()))

      if(isLoading){
            return <Loading></Loading>
      }

      const imageStorageKey = 'a45015337aeaebbc3fd4a9e91434cf3a'
   
      const onSubmit = async data => {
           const image = data.image[0]
           const formData = new FormData()
           formData.append("image" ,image)
           const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`
           fetch(url ,{
                 method: "POST",
                 body: formData
           })
           .then(res => res.json())
           .then(result => {
            //      ekhane imgdb theke img er url peye jabo
            const img = result.data.url
            const doctor = {
                  name: data.name,
                  email: data.email,
                  specialty: data.Specialty,
                  img
            }
            // nested api call 
            // send to database 
            fetch('http://localhost:5000/doctor', {
                  method: "POST",
                  headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify(doctor)
            })
                  .then(res => {
                        // cheack jwt token stutas 
                        if(res.status == 401 || res.status === 403){
                              signOut(auth)
                              localStorage.removeItem('accessToken')
                              Navigate('/login')

                        }
                        return res.json()
                  })
                  .then(data => {
                        toast.success(data.success)
                  })

             

           })
       
      }

    
      return (
            <div>
                  <p className='text-xl text-black mt-2 '>Add A new Doctor</p>
                  <div className='doctor-section'>

                        <form onSubmit={handleSubmit(onSubmit)}>
                              {/* Name  */}
                              <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                          <span class="label-text text-black">Doctor Name</span>

                                    </label>
                                    <input type="text"
                                          placeholder="Name"
                                          class="input input-bordered w-full max-w-xs bg-white text-black"
                                          {...register("name", {
                                                required: {
                                                      value: true,
                                                      message: 'Name is Required'
                                                }

                                          })} />
                                    <label class="label">

                                          {errors.name?.type === 'required' && <span className='text-red-500'>{errors.name.message}</span>}

                                    </label>
                              </div>

                              {/* email  */}

                              <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                          <span class="label-text text-black">Email</span>

                                    </label>
                                    <input type="email"
                                          placeholder="Enter Email"
                                          class="input input-bordered w-full max-w-xs bg-white text-black"
                                          {...register("email", {
                                                required: {
                                                      value: true,
                                                      message: 'Email is Required'
                                                },
                                                pattern: {
                                                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                                      message: 'Provide a valid Email'
                                                }
                                          })} />
                                    <label class="label">

                                          {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}

                                          {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                                    </label>
                              </div>

                              {/* specuality*/}
                              <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                          <span class="label-text text-black">Specialty</span>

                                    </label>
                                    <select 
                                          class="input input-bordered w-full max-w-xs bg-white text-black"  {...register("Specialty")}
                                               > 

                                               {
                                                     services?.map(service => <option>
                                                           {service.name}
                                                     </option>)
                                               }

                                               </select>  
                              </div>

                              {/* file atteched  */}
                              <div class="form-control w-full max-w-xs">
                                    <label class="label">
                                          <span class="label-text text-black">Picure</span>

                                    </label>
                                    <input type="file"
                                        
                                          class="input input-bordered w-full max-w-xs bg-white text-black"
                                          {...register("image", {
                                                required: {
                                                      value: true,
                                                      message: 'Image is Required'
                                                }

                                          })} />
                                    <label class="label">

                                          {errors.image?.type === 'required' && <span className='text-red-500'>{errors.image.message}</span>}

                                    </label>
                              </div>




                              {/* submit btn  */}
                              <input className='btn w-full max-w-xs text-white' type="submit" value="Add" />
                            


                        </form>

                  </div>
            </div>
      );
};

export default AddDoctor;