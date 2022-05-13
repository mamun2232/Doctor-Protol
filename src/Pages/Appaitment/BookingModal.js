import React from 'react';
import { format } from 'date-fns';
const BookingModal = ({ newTreatment, date }) => {
      const { name, slots } = newTreatment

      return (

            <div className=''>



                  <input type="checkbox" id="booking-modal" class="modal-toggle" />
                  <div class="modal modal-bottom sm:modal-middle">
                        <div class="modal-box bg-white">
                              <label for="booking-modal" class="btn btn-sm btn-circle  absolute right-2 top-2">✕</label>
                              <h3 class="font-bold text-lg text-accent">Your Booking: {name}</h3>
                              <div className="from-section text-center">
                                    <form className=' mt-2'>
                                          <input type="text" value={format(date, 'PP')} class="input input-bordered w-full max-w-xs my-2 bg-white text-black" />
                                          <br />
                                          <select class="select w-full max-w-xs bg-white text-black">
                                                {/* ekhane slot ke map kora hoyese  */}
                                          {
                                                slots.map(slot => <option>{slot}</option>)
                                          }

                                               
                                          </select>

                                          
                                          <br />
                                          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs my-2 bg-white text-black" />
                                          <br />
                                          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs my-2 bg-white text-black" />
                                          <br />
                                          <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs my-2 bg-white" />
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