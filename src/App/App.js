import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home/Home';
import People from '../pages/People/People';

const App = () => {
  return (
    <div >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/people" component={People}/>
      </Switch>
    </div>
  );
}

export default App;
