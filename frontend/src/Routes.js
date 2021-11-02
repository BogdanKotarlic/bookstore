import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AdminPanel from "./Components/AdminPanel";
import Home from "./Components/Home";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/admin" exact component={AdminPanel} />
            </Switch>
        </BrowserRouter>
    );  
};

export default Routes;