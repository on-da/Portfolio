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
              <Link to="/">Top </Link>
              <Link to="/portfolio/activities"> Activities </Link>
              <Link to="/portfolio/profile"> Profile </Link>
              <Link to="/portfolio/hobby"> Hobby </Link>
            </nav>
          </div>

          <Container>
            <div className="row">

              <Switch>
                <Route path="/portfolio/activities" component={Activities} />
                <Route path="/portfolio/profile" component={Profile} />
                <Route path="/portfolio/hobby" component={Hobby} />
                <Route exact path="/" component={Top} />
              </Switch>

            </div>
          </Container>

        </React.Fragment>
      </Router>
    );
  }
}

