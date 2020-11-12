import React from 'react';
import './App.css';

import {Switch , Route} from 'react-router-dom'

import MenuList from './components/menu-list/menu-list'
import Homepage from './components/homepage/homepage';
import Header from './components/header/header'
import NewAddPage from './components/new-add/new-add-page'
import ShoppingCartPage from './pages/shopping-cart-page'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/skelbimai' component={MenuList} />
      <Route path='/ikelti' component={NewAddPage}/>
      <Route path='/cart' component={ShoppingCartPage}/>
      </Switch>
    </div>
  );
}

export default App;
