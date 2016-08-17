import React from 'react';

import Tasting from './Tasting';




export default (
    {favorites}

) => (

    <ul>
        {favorites.map( favorites =>
            <li key={favorites.id}>

                <Tasting className="tasting"
                         description={favorites.attributes.description}
                         bottle_image={favorites.attributes.bottle_image}
                         myRatings={favorites.myRatings}>

                </Tasting>
            </li>
        )}
    </ul>
)