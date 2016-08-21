import React from 'react';

import { connect } from 'react-redux'


import { setAcidity, setTaste, setTest } from '../actions/favoritesActions'

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

        render()
        {
            return (
                <div>
                    <h1>
                        Wine Tasting

                    </h1>

                    <div>
                        <AllTastings favorites={this.props.store.favorites}/>
                    </div>
                </div>
            );
        }
}
