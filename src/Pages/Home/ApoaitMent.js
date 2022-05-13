import React from 'react';
import doctor from '../../assets/images/doctor.png'
import background from '../../assets/images/appointment.png'


const ApoaitMent = () => {
      return (
            <div style={{
                  background :`url(${background})
                  `,
                backgroundSize: 'cover'
            }} className="apoaitment-sectoon my-30">
                  <div className="appoaitment flex items-center">
                        <div className="doctor flex-1 hidden lg:block">
                              <img style={{
                                    // width: '606px',
                                    // height: '636px'
                              }} className='mt-[-200px]' src={doctor} alt="" />
                        </div>
                        <div className="doctot-info flex-1 p-5 ">
                              <p className='text-xl text-accent my-3'>Appoinment</p>
                              <h1 className='text-3xl text-white font-bold'>Make on appoainment today</h1>
                              <p className='text-xl text-white my-3
                              '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam hic possimus, voluptate in sunt quod aliquam officiis perspiciatis eaque repellendus, et vel deleniti quia nesciunt quasi rem autem fugiat totam.</p>
                              <button className='btn btn-accent' >GET STARD</button>
                        </div>
                  </div>

            </div>
      );
};

export default ApoaitMent;