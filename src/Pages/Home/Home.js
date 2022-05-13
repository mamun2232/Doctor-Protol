import React from 'react';
import Footer from '../Sheard/Footer';
import ApoaitMent from './ApoaitMent';
import Banner from './Banner';
import CuntactUs from './CuntactUs';
import Info from './Info';
import Service from './Service';
import TeamCare from './TeamCare';
import Testimonial from './Testimonial';

const Home = () => {
      return (
            <div className='  max-w-7xl m-auto'>
                  <Banner></Banner>
                  <Info></Info>
                  <Service></Service>
                  <TeamCare></TeamCare>
                  <ApoaitMent></ApoaitMent>
                  <Testimonial></Testimonial>
                  <CuntactUs></CuntactUs>
                  <Footer></Footer>
            </div>
      );
};

export default Home;