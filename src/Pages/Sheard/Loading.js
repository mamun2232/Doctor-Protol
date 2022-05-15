import React from 'react';
import loading from '../../assets/images/loadingSpiner.gif'

const Loading = () => {
      return (
            <div className='flex h-screen justify-center items-center'>
                  <img  src={loading} alt="" />
            </div>
      );
};

export default Loading;