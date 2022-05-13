import React from 'react';
import tretment from '../../assets/images/fluoride.png'
import cabity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Service = () => {
      const services = [
            {      
                  _id: 1,
                  name: 'Fluride Treatment',
                  title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, dignissimos?',
                  img: tretment
            },
            {      
                  _id: 2,
                  name: 'Cabity Flaing',
                  title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, dignissimos?',
                  img: cabity
            },
            {      
                  _id: 3,
                  name: 'Treat Whitening',
                  title: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, dignissimos?',
                  img: whitening
            },
      ]
      return (
           <div className="service-section my-20">
                 <h3 className='text-xl uppercase font-bold text-accent text-center'>our service</h3>
                 <h1 className='text-3xl text-center text-black'>Service We provide</h1>

                 <div className="service grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 ">

                       {
                             services.map(service => <ServiceCard
                             service={service}>
                                   key={service._id}

                             </ServiceCard>)
                       }

                 </div>
           </div>
      );
};

export default Service;