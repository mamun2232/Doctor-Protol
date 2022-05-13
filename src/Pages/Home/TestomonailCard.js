import React from 'react';

const TestomonailCard = ({ test }) => {
      return (
            <div class="card lg:max-w-96 shadow-xl">
                  <div class="card-body">
                        <p className='text-black'>{test.title}</p>
                  </div>
                  <div className="picture flex items-center px-8 my-5">
                        <div class="avatar">
                              <div class="w-24 rounded-full ring ring-accent  ring-offset-2 w-16">
                                    <img src={test.img} />
                              </div>
                        </div>
                        <div className='mx-4'>
                              <h1 className='text-xl text-black'>{test.name}</h1>
                              <p className='text-black'>{test.contry}</p>
                        </div>


                  </div>
            </div>
      );
};

export default TestomonailCard;