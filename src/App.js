import React, { Component } from 'react';

// importing links to access routes 
import { Link } from 'react-router-dom'

// importing routes from routes file
import routes  from './routes';



class App extends Component {
  render() {
    return (
      <React.Fragment>
       <ul role="navigation">
       {/* Link Tag requires path name which should match routes created in routes file*/}
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
      </ul>
      {/* Rendering routes */}
      {routes}
      </React.Fragment>
    );
  }
}

export default App;
