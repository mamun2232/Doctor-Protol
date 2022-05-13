import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
      return (
            <div class="hero min-h-screen text-black">
            <div class="hero-content flex-col lg:flex-row-reverse">
              <img style={{
                    width: '594px',
                    height: '355px'
              }} src={chair} />
              <div className=''>
                <h1 class="lg:text-6xl text-3xl font-bold">Your New Smaile Start Here</h1>
                <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button class="btn btn-accent">Get Started</button>
              </div>
            </div>
          </div>
      );
};

export default Banner;