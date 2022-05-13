import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

const Login = () => {
      const navigate =  useNavigate()

      const { register, formState: { errors }, handleSubmit } = useForm();
      const onSubmit = data => {
            console.log(data);
      }
      return (
            <div className='flex h-screen justify-center items-center'>
                  <div class="card w-96  shadow-xl">
                        <div class="card-body">
                              <h2 class="text-black text-2xl font-bold text-center">Login</h2>

                              <form onSubmit={handleSubmit(onSubmit)}>

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

                                    {/* password */}
                                    <div class="form-control w-full max-w-xs">
                                          <label class="label">
                                                <span class="label-text text-black">Password</span>

                                          </label>
                                          <input type="password"
                                                placeholder="Password"
                                                class="input input-bordered w-full max-w-xs bg-white text-black"  {...register("password",
                                                      {
                                                            required: {
                                                                  value: true,
                                                                  massage: "Password is Requied"
                                                            },
                                                            minLength: {
                                                                  value: 6,
                                                                  message: 'Must be 6 characters or longer'
                                                              }

                                                      })} />
                                                      


                                          <label class="label">
                                          
                                                {errors.password?.type === 'required' && <span className='text-red-500'>{errors.password.message}</span>}

                                                {errors.password?.type === 'minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                                              

                                          </label>
                                    </div>
                                  



                                    {/* submit btn  */}
                                    <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                                    <small className='text-end text-red-500'>Forgate Password</small>


                              </form>

                              <p className='text-center text-black'>New Doctor Protal? <span className='text-accent' onClick={()=> navigate('/signup')}>Create a Acccount</span></p>



                              <div class="divider">OR</div>
                              <button class="btn text-white">Cuntinue With Google</button>



                        </div>
                  </div>
            </div>
      );
};

export default Login;