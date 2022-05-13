import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import TreatmentCard from './TreatmentCard';
import BookingModal from './BookingModal';

const TeatMent = ({date}) => {
      const [treatments , setTreatment] = useState([])

      // btn e click kore je tratment take nebo setake set kore debo 
      const [newTreatment , setNewTreatment] = useState(null)
      useEffect(()=>{
            fetch('service.json')
            .then(res => res.json())
            .then(data => setTreatment(data))

      },[])
      
      return (
            <div className="teatment-section">
                    <p className='text-xl text-accent text-center '>Avalibale Appoinments on {format(date, 'PP')}</p>


                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-20'>
                          {
                                treatments.map(treatment => <TreatmentCard
                                    key={treatment._id} 
                                    treatment={treatment}
                                    setNewTreatment={setNewTreatment}
                                
                                
                                ></TreatmentCard>)
                          }
                    </div>

                    {/* stap -3 : ekhane newmodal e jehutu select kora item ese prse tahole modal e sei start ta patiye debo */}
                    {
                          newTreatment && <BookingModal
                           newTreatment={newTreatment}
                           date={date}></BookingModal>
                    }

                  

            </div>
      );
};

export default TeatMent;