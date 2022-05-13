import React from 'react';
import background from '../../assets/images/appointment.png'


const CuntactUs = () => {
      return (
            <div style={{
                  background: `url(${background})
                  `,
                  backgroundSize: 'cover'
            }} className="contactUs text-center py-10 px-2">
                  <p className='text-accent text-xl font-bold'>Contact Us</p>
                  <h1 className='text-3xl text-white'>Stay Contacted  With Us</h1>
                  <div className="contact-from my-5">
                        <form action="">


                        
                              <input type="email" placeholder="Email" class="input input-bordered input-xs w-full max-w-xs my-2 py-5 text-xl bg-white" />
                              <br />
                          
                              <input type="text" placeholder="Subject" class="input input-bordered input-sm w-full max-w-xs my-2 py-5 text-xl bg-white" />
                              <br />
                        
                           
                              <input style={{
                                    // height: '136px'
                              }} type="text" placeholder="Type here" class="input input-bordered input-lg w-full max-w-xs my-2  py-10 text-xl bg-white" />
                              <br />

                              <input className='btn btn-accent' type="submit" value="Submit" />
                        </form>
                  </div>
            </div>
      );
};

export default CuntactUs;