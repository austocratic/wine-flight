import React from 'react';

import Ratings from './Ratings';



export default (props) =>
    <div className="tasting_container">

        <div>

            <div className="tasting_image">
                <img src={props.bottle_image}/>
            </div>

            <div className="tasting_description">
                {props.description}
            </div>

        </div>

        <div>

            <Ratings {...props} myRatings={props.myRatings}>

            </Ratings>

        </div>

    </div>;

