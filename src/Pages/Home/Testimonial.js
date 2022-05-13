import React from 'react';
import qutter from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import TestomonailCard from './TestomonailCard';
const Testimonial = () => {

      const testomonial = [
            {
                  img: people1,
                  _id: 1,
                  title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur iste dicta laborum rerum possimus suscipit nostrum fugiat! Asperiores, nisi facilis.',
                  name: 'Winson Herry',
                  contry: 'Landon'
                  
            },
            {
                  img: people2,
                  _id: 2,
                  title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur iste dicta laborum rerum possimus suscipit nostrum fugiat! Asperiores, nisi facilis.',
                  name: 'Winson Herry',
                  contry: 'Landon'
            },
            {
                  img: people3,
                  _id: 3,
                  title: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur iste dicta laborum rerum possimus suscipit nostrum fugiat! Asperiores, nisi facilis.',
                  name: 'Winson Herry',
                  contry: 'Landon'
            }
      ]

      return (
           <div className="testimonal-section my-20 ">
                 <div className="testimonal flex justify-between mt-50 my-30">
                       <div>
                       <h1 className='text-xl text-accent text-xl font-bold'>Testimonal</h1>
                       <p className='text-3xl text-black my-2'>What Our Patients Say!</p>
                       </div>
                       <div className='lg:w-48 w-24'>
                       <img style={{}} src={qutter} alt="" />
                 </div>
                 </div>
                <div className="testomonail-card grid grid-cols-1 lg:grid-cols-3 gap-5 my-20">

                      {
                            testomonial.map(test => <TestomonailCard
                              key={test._id} test={test}></TestomonailCard>)

                      }

                </div>
           </div>
      );
};

export default Testimonial;