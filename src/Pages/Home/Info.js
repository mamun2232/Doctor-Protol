import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'

const Info = () => {
   
      return (
            <div className="info-section grid grid-cols-1 lg:grid-cols-3 gap-5 my-20 ">
                  <InfoCard img={clock} title='Opening House' bgClass=' bg-accent'></InfoCard>
                  <InfoCard img={marker} title='Visit Our Location' bgClass='bg-neutral'></InfoCard>
                  <InfoCard img={phone} title='Contact Us Now' bgClass='bg-accent'></InfoCard>

            </div>
      );
};

export default Info;