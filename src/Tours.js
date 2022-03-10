import React from 'react';
import Tour from './Tour'

const Tours = ({tours, removeTours})=>{
  return<>
    <section className="main">
    <h2 className="main_title">Our Tours</h2>
    <hr className="underline" />
    <div className="tour">
    {tours.map((tour)=>{
      return<>
        <Tour removeTours={removeTours} key={tour.id} {...tour} />
      </>
    })}
      
    </div>
    
    </section>
  </>
}
export default Tours;