import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from "react-router";
import { createBrowserHistory } from "history";

import HomePage from "views/HomePage/HomePage.jsx";

const hist = createBrowserHistory();

ReactDOM.render(
    <Router history={hist}>
        <Switch>
            <Route path="/" component={HomePage} />
        </Switch>
    </Router>,
    document.getElementById("root")
);
