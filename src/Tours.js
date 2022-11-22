import React from 'react';
import Tour from './Tour';
const Tours = ({tours, removeTour}) => {
  return <section>
  <div className = "title">
  <h2>Tour Worthy</h2>
  <div className='underline'></div>
  </div>
  <div>
    {tours.map((tour) => {
       
      return <Tour key = {tour.id} {...tour} removeTour = {removeTour}></Tour>;  //...tour means that we want to access all the data from the prop : tour.
    }
   
    )}
  </div>
  </section>;
};

export default Tours;
