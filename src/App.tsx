import React from 'react';
import './App.css';

import {Switch , Route} from 'react-router-dom'

import Header from './components/header/header'
import NewAddPage from './pages/new-add/new-add-page'
import ShoppingCartPage from './pages/shopping-cart-page/shopping-cart-page'
import ItemsPage from './pages/items-page/items-page'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={ItemsPage}/>
      <Route path='/ikelti' component={NewAddPage}/>
      <Route path='/cart' component={ShoppingCartPage}/>
      </Switch>
    </div>
  );
}

export default App;
