import React from 'react';


export default (props) => (
    <div>
        <div>
            <ul>
                <li>{props.myRatings.acidity}</li>
                <li>{props.myRatings.elegance}</li>
                <li>{props.myRatings.taste}</li>
                <li>{props.myRatings.total}</li>
            </ul>
        </div>
    </div>
);

