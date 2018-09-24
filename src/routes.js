import React from 'react';


// import all parts from react-router-dom
import { Switch, Route } from 'react-router-dom';

// components
import Home from './components/Home';
import Topics from './components/Topics';
import About from './components/About';
import NotFound from './components/NotFound';



// exporting routes here 
export default (
    // Switch only allows one route to be rendered at a time
    <Switch>
    {/* Route requires path name & component that would be rendered 
        exact requires url path to match exactly otherwise un-matching urls would hit '/' because every url path starts with '/' */}
        <Route exact path="/about" component={About} />
        {/* if use exact, can't render chain url such as one in topics*/}
        <Route path="/topics" component={Topics} />
        <Route 
          path="/" 
          children={props => props.match ? (<Home {...props} />)
            : <NotFound />
          } />
    </Switch>
)