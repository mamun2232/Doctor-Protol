import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Sheard/Loading';
import CheckoutForm from './CheckoutForm';

// step 1 
// pk test key take diclar korbo 
const stripePromise = loadStripe('pk_test_51L1nmNCGpaTt0RU8npNSNITrjLTAUDjwjX275RD6RDk5SGoYi1H1zLKxAis8OFp4C0PxQBT2L5c0L0VsTI9ewqGl00dT2UHEXy');

const Payment = () => {
      const { id } = useParams()


      const { data: booking, isLoading, refetch } = useQuery(['bookings', id], () => fetch(`http://localhost:5000/booking/${id}`, {
            method: "GET",
            headers: {
                  'content-type': 'application/json',
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`


            }
      })
            .then(res => res.json()))

      if (isLoading) {
            return <Loading></Loading>
      }


      return (
            <div>
                  <p className='text-xl text-black mt-2'>Your payment id: {id}</p>

                  <div class="card w-96 shadow-xl">
                        <div class="card-body">
                              <p class="card-title text-black">Hello {booking.patienName} ,</p>
                              <h2 className='text-black'>Please Pay For {booking.treatment}</h2>

                              <p className='text-black'>Your Appainment <span className='text-orange-500'>{booking.date}</span> at <span className='text-orange-500'>
                                    {booking.slot}</span></p>

                              <p className='text-orange-500 font-bold'>Please Pay ${booking.price}</p>

                        </div>
                  </div>

                  <div class="card w-96 shadow-xl my-3">
                        <div class="card-body">
                              {/* step -2: components dicler chackout from */}
                              <Elements stripe={stripePromise}>
                                    <CheckoutForm booking={booking} />
                              </Elements>

                        </div>
                  </div>
            </div>
      );
};

export default Payment;