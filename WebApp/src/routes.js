import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './components/home/home'
import About from './components/about/about'
import Products from './components/products/products'

const Main = () => (
    <main>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/home' component={Home}/>
        <Route path='/products' component={Products}/>
      </Switch>
    </main>
  )

  export default Main;
