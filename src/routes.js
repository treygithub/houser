import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './component/Dashboard/Dashboard';
import Wizard from './component/Wizard/Wizard';
import Step2 from './component/Wizard/Step2';
import Step3 from './component/Wizard/Step3';
import OneHouse from './component/House/OneHouse';



export default  (
      
        <Switch>
          <Route exact path='/' component={ Dashboard }/>
          <Route path='/Wizard' component={ Wizard }/>
          <Route path='/Step2' component={ Step2 }/>
          <Route path='/Step3' component={ Step3 }/>
          <Route path='/product/:id' component={ OneHouse }/>
        </Switch>
      
)