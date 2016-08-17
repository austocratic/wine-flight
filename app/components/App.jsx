import React from 'react';

import { connect } from 'react-redux'


import { setAcidity, setTaste } from '../actions/favoritesActions'

import AllTastings from './AllTastings';


@connect((store) => {
    //whatever you return gets set as props
    return {
        //favorites: store.favorites
        store: store.favorites
    };
})
export default class App extends React.Component {
    /*componentWillMount() {
        this.props.dispatch(setAcidity('HIGH'))
    }*/

    setTaste() {
        this.props.dispatch(setTaste('GREAT'));
    }

        render()
        {
            return (
                <div>
                    <h1>
                        Wine Tasting

                    </h1>
                    <div>
                        Rate the Taste:
                        <button onClick={this.setTaste.bind(this)}>Click to set rating!</button>
                    </div>

                    <div>
                        {console.log('Passing to AllTastings: ' + JSON.stringify(this.props.store))}
                        <AllTastings favorites={this.props.store.favorites}/>
                    </div>


                </div>
            );
        }


}

/* Goes below button
<div>
    <AllTastings favorites={this.props.attributes.favorites}/>
</div>

*/

/*

 <div>
 The State is: {this.props.favorites.favorites.myRatings.taste}
 </div>


 */