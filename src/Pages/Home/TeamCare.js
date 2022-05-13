import React from 'react';
import carepic from '../../assets/images/treatment.png'
const TeamCare = () => {
      return (
            <div className="care-section my-20">
                  <div class="hero min-h-screen">
                        <div class="hero-content flex-col lg:flex-row">
                              <div className='flex-1'>
                              <img style={{
                                    width: '100%',
                                    // height: '576px'
                              }}  src={carepic} class="max-w-sm rounded-lg shadow-2xl " />
                              </div>
                              <div className='flex-1'>
                                    <h1 class="text-5xl font-bold text-black ">Exceptinal Dental Care, On Your Team</h1>
                                    <p class="py-6 text-black">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur, illo!</p>
                                    <button class="btn btn-accent">Get Started</button>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default TeamCare;