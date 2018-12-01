import React from 'react'
import ReactDOM from 'react-dom'
import APP from './components/app'
import { BrowserRouter } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter><APP /></BrowserRouter>
    </Provider>
    ,
    document.getElementById('root'));
