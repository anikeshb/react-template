import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from 'assets/images/logo.svg';
import './style/style.scss';

import { sampleAction } from 'actions/SampleAction'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  sampleAction: () => dispatch(sampleAction())
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

const Home = () => <h2>Home</h2>;
const Login = () => <h2>Login</h2>;
const Details = () => <h2>Details</h2>;

/**
 * @class App
 * @extends {Component}
 */

const MainMenu = () => {
  return (
    <div>
      <Link to="/">
        <button>Home</button>
      </Link>
      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/details">
        <button>Details</button>
      </Link>
    </div>
  );
};
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  sampleAction = (event) => {
    this.props.sampleAction();
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            <MainMenu />
          </header>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/details" component={Details} />
          </div>
          <pre>
            {
              JSON.stringify(this.props)
            }
          </pre>
          <button onClick={this.sampleAction}>Test redux action</button>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);