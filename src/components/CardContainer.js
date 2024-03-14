import React from 'react'
import Card from './Card';
import data from '../database/data';

const Cardcontainer = ( )=>{
    return(
        <div className="filter-container">
            {data.map(item => (
        <Card
          key={item.id} // Assign a unique key to each card
          id={item.id}
          name={item.name}
          info={item.info}
          image={item.image}
          price={item.price}
        />
      ))}
        </div>
    )
}

export default Cardcontainer;