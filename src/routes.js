import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import OneHouse from './component/House/OneHouse';



export default  (
      
        <Switch>
          <Route exact path='/' component={ Dashboard }/>
          <Route path='/Wizard' component={ Wizard }/>
          <Route path='/product/:id' component={ OneHouse }/>
        </Switch>
      
)