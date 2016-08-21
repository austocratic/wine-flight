import React from 'react';

import Tasting from './Tasting';




export default (
    {favorites}

) => (

    <ul>
        {favorites.map( (favorites, index) =>
            <li key={favorites.id}>

                <Tasting className="tasting"
                         favoritesKey={index}
                         description={favorites.attributes.description}
                         bottle_image={favorites.attributes.bottle_image}
                         myRatings={favorites.myRatings}
                    {...favorites}
                >

                </Tasting>
            </li>
        )}
    </ul>
)