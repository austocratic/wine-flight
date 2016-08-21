import React from 'react';

import { connect } from 'react-redux'

import { setRating, editingRating } from '../actions/favoritesActions'

import store from '../store';


export default class Ratings extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <ul>
                        {Object.keys(this.props.myRatings).map((key) => {
                            return (
                                    <Rating {...this.props} key={key} label={key} rating={this.props.myRatings[key]} />
                                )
                            })}
                    </ul>
                </div>
            </div>
        )
    }
}

class Rating extends React.Component {

    action = () => {
        alert(this.props.id + ' ' + this.props.label);
    };



    render() {
        return (

            <li>

                {this.props.label}: <RatingInput favoritesKey={this.props.favoritesKey} label={this.props.label} currentRating={this.props.rating}/>

            </li>
        )
    }
}

class RatingInput extends React.Component {

    editingRating() {

        store.dispatch(editingRating(this.props.favoritesKey, this.props.label, true));
    }

    stopEditingRating() {

        console.log('Triggered on blur');

        store.dispatch(editingRating(this.props.favoritesKey, this.props.label, false));
    }

    rate(e) {

        const rating = e.target.value;

        //setRating arguments: array index to modify, property to modify, valye to change to
        store.dispatch(setRating(this.props.favoritesKey, this.props.label, rating));
    }

    render() {

        //By default show rating property
        //If clicked, set the "updating" state.
        //When updating, show a text box

        if (this.props.currentRating.editing) {

            return (

                <input onChange={this.rate.bind(this)} onBlur={this.stopEditingRating.bind(this)}/>

            )

        } else {

            return (

                <ele onClick={this.editingRating.bind(this)}>{this.props.currentRating.value}</ele>

            );
            /*
            return (

                <ele onClick={this.editRating.bind(this)}>{this.props.currentRating.value}</ele>

            )*/
        }
    }
}







/*
 <li onClick={this.action}>{this.props.label}: {this.props.rating}

 <input onChange={this.rate.bind(this)}/>

 </li>
 */