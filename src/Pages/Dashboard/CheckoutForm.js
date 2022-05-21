import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ booking }) => {
      // step -3 : copy to from and past chackoutFrom
      //stap - 4: declare useStrip and useElement hook
      const stripe = useStripe();
      const elements = useElements();
      const [cardError, setCardError] = useState('')
      const [clientSecret, setClientSecret] = useState('')
      const [success, setSucces] = useState('')
      const [transactionId, setTransactionId] = useState('');

      // step 8 : Initialize Stripe Elements
      // server theke ei api ta call korbo and price e patabo 
      const { price, patienName, patien , _id } = booking

      useEffect(() => {
            fetch('http://localhost:5000/create-checkout-session', {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                  },
                  body: JSON.stringify({ price })
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data?.clientSecret) {
                              setClientSecret(data.clientSecret);
                        }
                  });

      }, [price])


      const handleSubmit = async (event) => {
            event.preventDefault()

            // element or stripe theke data read korte na parle return
            if (!stripe || !elements) {
                  return
            }

            // ui te card er je information decci ta access kore niye astese 
            const card = elements.getElement(CardElement);

            // card er kuno data na payle return
            if (card === null) {
                  return
            }

            // step - 5: kon typer emplement hobe ta set kora 
            // Use your card Element with other Stripe.js APIs
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                  type: 'card',
                  card,
            });

            if (error) {
                  console.log(error);
                  setCardError(error.message)

            }
            else {
                  // eror na takle ekhane asbe 
                  setCardError('')
            }

            setSucces('')

            // part - 2
            // integrate payment method 
            // ---------------------
            // step : 9 confrom card payment
            // ekhane payment success full hobe 
            const { paymentIntent, errors: interntError } = await stripe.confirmCardPayment(
                  clientSecret,
                  {
                        payment_method: {
                              card: card,
                              billing_details: {
                                    name: patienName,
                                    email: patien
                              },
                        },
                  },
            );

            //     payment success na hoye error khele 
            if (interntError) {
                  setCardError(interntError?.message)


            }
            else {
                  setCardError('')
                  setSucces("Your Payment is complect")
                  //     payment succesfull hole onk information pabo sekahe  tranzation id pabo ..setike state e rakbo
                  setTransactionId(paymentIntent?.id)


                      // step 10 : store payment in database 
                      const payment = {
                            appainment: _id,
                            transactionId: paymentIntent.transactionId
                      }
                      fetch(`http://localhost:5000/booking/${_id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json',
                            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(payment)
                    }).then(res=>res.json())
                    .then(data => {
                        
                        console.log(data);
                    })

            }

        





      }
      return (

            <>
                  <form onSubmit={handleSubmit}>
                        <CardElement
                              options={{
                                    style: {
                                          base: {
                                                fontSize: '16px',
                                                color: '#424770',
                                                '::placeholder': {
                                                      color: '#aab7c4',
                                                },
                                          },
                                          invalid: {
                                                color: '#9e2146',
                                          },
                                    },
                              }}
                        />
                        <button className='btn btn-success my-3' type="submit" disabled={!stripe || !clientSecret}>
                              Pay
                        </button>
                  </form>
                  {
                        cardError && <p className='text-red-500'>{cardError}</p>
                  }
                  {
                        success && <div>

                              <p className='text-green-500'>{success}</p>
                              <p className='text-orange-500'>Your Transaction Id: {transactionId}</p>
                        </div>
                  }

            </>

      );
};

export default CheckoutForm;