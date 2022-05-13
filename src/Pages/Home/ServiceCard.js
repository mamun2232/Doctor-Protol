import React from 'react';

const ServiceCard = ({service}) => {
      return (
            <div class="card lg:mx-w-96 bg-base-900 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={service.img} />
            </figure>
            <div class="card-body items-center text-center text-black">
              <h2 class="card-title">{service.name}</h2>
              <p>{service.title}</p>
            </div>
          </div>
      );
};

export default ServiceCard;