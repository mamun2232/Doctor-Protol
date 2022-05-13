import React, { useState } from 'react';
import chair from '../../assets/images/chair.png'
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppoaitmentBanner = ({date , setDate}) => {
  
      return (
            <div class="hero min-h-screen text-black">
                  <div class="hero-content flex-col lg:flex-row-reverse">
                      <div className='flex-1'>
                      <img style={{
                              width: '594px',
                              height: '355px'
                        }} src={chair} />


                      </div>
                        <div className='flex-1 rounded shadow'>
                              <DayPicker
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                              
                              />
                            
                        </div>
                       
                  </div>
                  
                 
            </div>
      );
};

export default AppoaitmentBanner;