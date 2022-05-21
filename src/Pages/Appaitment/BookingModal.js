import React, { useRef } from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import toast from 'react-hot-toast';
const BookingModal = ({ newTreatment, date  , setNewTreatment , refetch}) => {
      const {_id, name, slots , price} = newTreatment

      const formateDate = format(date, 'PP')

      const nameRef = useRef('')
      const slotRef = useRef('')
      const numberRef = useRef('')

      const [user] = useAuthState(auth)


      // add booking to server 

      const bookingHendeler = (event) => {
            event.preventDefault()
      
            const number = numberRef.current.value
            const slot = slotRef.current.value
           

            const booking = {
                  treatmentID : _id ,
                  treatment: name,
                  date: formateDate,
                  patient: user.email,
                  patienName: user.displayName,
                  number: number,
                  slot,
                  price
            

                  

            }

            fetch('http://localhost:5000/booking', {
                  method: 'POST',
                  body: JSON.stringify(
                       booking
                  ),
                  headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                  },
            })
                  .then((response) => response.json())
                  .then((data) => {
                        console.log(data);
                        if(data.success){
                              toast.success(`Appointment is set, ${formateDate} at ${slot}`)

                        }
                        else{
                              toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)

                        }
                  });
                  refetch()
                  setNewTreatment(null)
      }

      return (

            <div className=''>



                  <input type="checkbox" id="booking-modal" class="modal-toggle" />
                  <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box bg-white">
                              <label for="booking-modal" class="btn btn-sm btn-circle  absolute right-2 top-2">✕</label>
                              <h3 class="font-bold text-lg text-accent">Your Booking: {name}</h3>
                              <div className="from-section text-center">
                                    <form onSubmit={bookingHendeler} className=' mt-2'>
                                          <input type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs my-2 bg-white text-black" />
                                          <br />
                                          <select ref={slotRef} class="select w-full max-w-xs bg-white text-black">
                                                {/* ekhane slot ke map kora hoyese  */}
                                                {
                                                      slots.map((slot, index) => <option key={index}>{slot}</option>)
                                                }


                                          </select>


                                          <br />
                                          <input ref={nameRef} type="text" value={user?.displayName} class="input input-bordered w-full max-w-xs my-2 bg-white text-black" />
                                          <br />
                                          <input type="text" value={user?.email} class="input input-bordered w-full max-w-xs my-2 bg-white text-black" />
                                          <br />
                                          <input ref={numberRef} type="number" placeholder="Enter Phone Number" class="input input-bordered w-full max-w-xs my-2 bg-white" />
                                          <br />
                                          <input type="submit" value='Submit' class="input input-bordered w-full max-w-xs bg-accent text-white font-bold" />
                                          <br />
                                    </form>
                              </div>

                        </div>
                  </div>
            </div>
      );
};

export default BookingModal;