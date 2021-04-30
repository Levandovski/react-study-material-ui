import React from 'react';

import { Switch, Route } from 'react-router-dom';
import {Home} from '../pages/Home/Home';
import {Menu}  from '../components/Menu';
import {Login}  from '../pages/Login/Login';
import { Tab } from '../pages/Tab';

export const Router = () => {


    return (
        <Switch>
           <Route path="/" exact={true} component={Login} />
           <Route path="/home" exact={true} component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/tab" component={Tab} />
        </Switch>
    )


}