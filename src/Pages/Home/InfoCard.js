import React from 'react';

const InfoCard = ({img , title , bgClass}) => {
      return (
            <div className={`card lg:card-side shadow-xl p-5 ${bgClass}`}>
            <figure><img src={img} alt="Movie"/></figure>
            <div class="card-body text-white">
              <h2 class="card-title ">{title}</h2>
              <p>Click the button to watch on Jetflix app.</p>
            </div>
          </div>
      );
};

export default InfoCard;