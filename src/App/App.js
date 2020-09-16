import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home/Home';

const App = () => {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
