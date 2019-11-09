import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Details from "./components/Details";

import "./App.css";


const App = () => {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Fragment>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/movie-details" component={Details} />
                    </Fragment>
                </Switch>
            </Router>
        </div>
    );
};

export default App;
