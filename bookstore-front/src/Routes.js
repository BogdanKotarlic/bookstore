import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from "./core/Cart";
import Home from './core/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/cart" exact component={Cart} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;