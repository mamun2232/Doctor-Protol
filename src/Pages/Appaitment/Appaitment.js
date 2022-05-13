import React, { useState } from 'react';
import AppoaitmentBanner from './AppoaitmentBanner';
import TeatMent from './TeatMent';
import Footer from '../Sheard/Footer'

const Appaitment = () => {
      const [date, setDate] = useState(new Date());
      return (
            <div className=' max-w-7xl m-auto'>
                  <AppoaitmentBanner date={date} setDate={setDate}></AppoaitmentBanner>
                  <TeatMent date={date}></TeatMent>
                  <Footer></Footer>
                  
            </div>
      );
};

export default Appaitment;