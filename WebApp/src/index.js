import React from 'react'
import ReactDOM from 'react-dom'
import APP from './components/app'
import {BrowserRouter} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(<BrowserRouter><APP /></BrowserRouter> , 
    document.getElementById('root'));
