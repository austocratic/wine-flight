import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './components/App';

import store from './store'

const app = document.getElementById('app');



//Whatever you would normally render, render the provider instead (to use redux)
//Also inject the store
//Any component anywhere down the chain can import data from the redux store


    ReactDOM.render(
        <Provider store={store}>

            <App />

        </Provider>, app);

