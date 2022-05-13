import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { async } from '@firebase/util';


const Signin = () => {
      const navigate = useNavigate()
      const [user] = useAuthState(auth)



      // create account 
      const [
            createUserWithEmailAndPassword,
            Cuser,
            loading,
            error,
      ] = useCreateUserWithEmailAndPassword(auth);

      //     update fofile 
      const [updateProfile, updating, Uperror] = useUpdateProfile(auth);

      const { register, formState: { errors }, handleSubmit } = useForm();
      const onSubmit = async data => {
            console.log(data);
            await createUserWithEmailAndPassword(data.email, data.password)
            await updateProfile({ displayName: data.name })
      }
      // signUp gooogle 
      const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);

      // show arror massage 
      let errorMassage;

      if (error || Uperror) {
            errorMassage = <p className='text-red-500'>{error.message}</p>


      }

      if (user) {
            navigate('/')
            console.log(user);
      }
      return (
            <div className='flex h-screen justify-center items-center'>
                  <div class="card w-96  shadow-xl">
                        <div class="card-body">
                              <h2 class="text-black text-2xl font-bold text-center">Sign Up</h2>

                              <form onSubmit={handleSubmit(onSubmit)}>
                                    {/* Name  */}
                                    <div class="form-control w-full max-w-xs">
                                          <label class="label">
                                                <span class="label-text text-black">Name</span>

                                          </label>
                                          <input type="text"
                                                placeholder="Name"
                                                class="input input-bordered w-full max-w-xs bg-white text-black"
                                                {...register("name", {
                                                      required: {
                                                            value: true,
                                                            message: 'Email is Required'
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

                                          {errorMassage}
                                    </div>




                                    {/* submit btn  */}
                                    <input className='btn w-full max-w-xs text-white' type="submit" value="Login" />
                                    <small className='text-end text-red-500'>Forgate Password</small>


                              </form>

                              <p className='text-center text-black'>All ready Account? <span className='text-accent' onClick={() => navigate('/login')}>Please login</span></p>



                              <div class="divider">OR</div>
                              <button onClick={() => signInWithGoogle()} class="btn text-white">Cuntinue With Google</button>



                        </div>
                  </div>
            </div>
      );
};

export default Signin;