import React, { useState } from 'react';
import "./Tours.css";

export default function Tours({tours, removeTour}) {

    const [readMore, setReadMore] = useState(false);

  return (
    <div className='title'>
        <h2>Our Tours</h2>
        <div className='line'></div>
        <div>
            {tours.map((tour) =>{
                return(
                    <article className='single-tour'>
                        <img src={tour.image} alt={tour.name}/>
                        <footer>
                            <div className='tour-info'>
                                <h4>{tour.name}</h4>
                                <h4 className='tour-price'>{tour.price}</h4>
                            </div>
                            <p>
                                {readMore ? tour.info : `${tour.info.substring(0,200)}...`}
                                <button onClick={() => setReadMore(!readMore)}>
                                    {readMore ? `show less` : `read more`}
                                </button>
                            </p>
                            <button className='delete-btn' onClick={() => removeTour(tour.id)}>not interested</button>
                        </footer>
                    </article>
                )
            })}
        </div>
    </div>
  )
}
