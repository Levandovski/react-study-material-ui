import React from 'react';

import { Switch, Route } from 'react-router-dom';
import {Home} from '../pages/Home/Home';
import {Menu}  from '../pages/Menu/Menu';

export const Router = () => {


    return (
        <Switch>
           <Route path="/" exact={true} component={Home} />
            <Route path="/menu" component={Menu} />
        </Switch>
    )


}