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
            <h5 className="my-0 mr-md-auto font-weight-normal">On-da Portfolio</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <Link className="p-2 trans-green" to="/my-portfolio">Top</Link>
              <Link className="p-2 trans-red" to="/my-portfolio/activities">Activities</Link>
              <Link className="p-2 trans-yellow" to="/my-portfolio/profile">Profile</Link>
              <Link className="p-2 trans-blue" to="/my-portfolio/hobby">Hobby</Link>
            </nav>
          </div>

          <Container>
            <div className="row">

              <Switch>
                <Route exact path="/my-portfolio" component={Top} />
                <Route path="/my-portfolio/activities" component={Activities} />
                <Route path="/my-portfolio/profile" component={Profile} />
                <Route path="/my-portfolio/hobby" component={Hobby} />
              </Switch>

            </div>
          </Container>

        </React.Fragment>
      </Router>
    );
  }
}

