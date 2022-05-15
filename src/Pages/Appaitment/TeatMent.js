import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import TreatmentCard from './TreatmentCard';
import BookingModal from './BookingModal';
import { useQuery } from 'react-query';
import Loading from '../Sheard/Loading';

const TeatMent = ({date}) => {
      
     
      
      const formateDate = format(date, 'PP')


      // btn e click kore je tratment take nebo setake set kore debo 
      const [newTreatment , setNewTreatment] = useState(null)



      // useEffect(() => {
      //       fetch(`http://localhost:5000/available?date=${formateDate}`)
      //           .then(res => res.json())
      //           .then(data => setTreatment(data));
      //   }, [])
      //   console.log(treatments);

      // use reaact querry 
        const {data: treatments , isLoading , refetch } = useQuery(['available' , formateDate] , ()=>
            fetch(`http://localhost:5000/available?date=${formateDate}`)
            .then(res => res.json())

        )

        if(isLoading){
              return <Loading></Loading>
        }
      
      
      return (
            <div className="teatment-section">
                    <p className='text-xl text-accent text-center '>Avalibale Appoinments on {format(date, 'PP')}</p>


                    <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 my-20'>
                          {
                                treatments?.map(treatment => <TreatmentCard
                                    key={treatment._id} 
                                    treatment={treatment}
                                    setNewTreatment={setNewTreatment}
                                
                                
                                ></TreatmentCard>)
                          }
                    </div>

                    {/* stap -3 : ekhane newmodal e jehutu select kora item ese prse tahole modal e sei start ta patiye debo */}
                    {
                          newTreatment && <BookingModal
                          setNewTreatment={setNewTreatment}
                           newTreatment={newTreatment}
                           refetch={refetch}
                           date={date}></BookingModal>
                    }

                  

            </div>
      );
};

export default TeatMent;