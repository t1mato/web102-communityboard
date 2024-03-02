import React from 'react';

  const Card = ( {img, name, day, location, desc} ) => {
    return (
      
      <div className="box-style">
          <img src={img} class="event-img" />
          <h2>{name}</h2>
          <h3>{day}</h3>
          <h4>{location}</h4>
          <p>{desc}</p>
      </div>
    )
  }
  
  export default Card