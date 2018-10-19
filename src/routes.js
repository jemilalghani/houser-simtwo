import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import Wizard from './Components/Wizard/Wizard';
import WizardTwo from './Components/Wizard/WizardTwo';
import WizardThree from './Components/Wizard/WizardThree';


export default (
    <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/wizard' component={Wizard}/>
        <Route path='/wizardtwo' component={WizardTwo}/>
        <Route path='/wizardthree' component={WizardThree}/>
    </Switch>
)