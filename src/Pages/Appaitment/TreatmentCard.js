import React from 'react';

const TreatmentCard = ({treatment , setNewTreatment}) => {
      const { name , slots} = treatment
      return (
            <div class="card lg:max-w-lg shadow-xl text-black">
            <div class="card-body text-center">
              <h2 className='text-xl text-accent font-bold'>{name}</h2>
              {
                    slots.length > 0 ? 
                    <span>{slots[0]}</span>
                     : 
                     <p className='text-red-500'>No Slot Available</p>
              }
              <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'}   Available</p>


              {/* ekhane je traetment er btn e click kora hoise seta setkorbe debo start e  */}
            
              <div>

              <label onClick={() => setNewTreatment(treatment)} disabled={slots.length === 0} for="booking-modal" class="btn btn-accent">Book Appoinment</label>
              
              </div>
            </div>
            
          </div>
      );
};

export default TreatmentCard;