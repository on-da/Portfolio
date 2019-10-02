import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Top from './Top';
import Activities from './Activities';
import Profile from './Profile';
import Hobby from './Hobby';

export default class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>

          <div className="header d-flex flex-column flex-md-row align-items-center sticky-top p-3 px-md-4 mb-3">
            <h4 className="my-0 mr-md-auto font-weight-normal">On-da Portfolio</h4>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link to="/Portfolio">Top </Link>
              <Link to="/Portfolio/activities"> Activities </Link>
              <Link to="/Portfolio/profile"> Profile </Link>
              <Link to="/Portfolio/hobby"> Hobby </Link>
            </nav>
          </div>

          <Container>
            <div className="row">

              <Switch>
                <Route path="/Portfolio/activities" component={Activities} />
                <Route path="/Portfolio/profile" component={Profile} />
                <Route path="/Portfolio/hobby" component={Hobby} />
                <Route exact path="/Portfolio" component={Top} />
              </Switch>

            </div>
          </Container>

        </React.Fragment>
      </Router>
    );
  }
}

