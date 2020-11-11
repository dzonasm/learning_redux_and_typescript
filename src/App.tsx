import React from 'react';
import './App.css';

import {Switch , Route} from 'react-router-dom'

import MenuList from './components/menu-list'
import Homepage from './components/homepage/homepage';
import Header from './components/header/header'
import NewAddPage from './components/new-add/new-add-page'


function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route path='/skelbimai' component={MenuList} />
      <Route path='/ikelti' component={NewAddPage}/>
      </Switch>
    </div>
  );
}

export default App;
