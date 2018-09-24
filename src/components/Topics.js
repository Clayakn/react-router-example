import React from 'react';
import { Link, Route } from 'react-router-dom'


function Discussion() {
    return (
        <div>
          <h1>Discussion</h1>
        </div>
      )
}
// Using match to get current url that is being displayed, can use match to get params & url
export default function Topics({ match }) {
    return (
      // Manually built routes to make chain url
      <div>
        <h1>Topics</h1>
        <Link to={`${match.url.replace(/\/$/, "")}/components`}>Components</Link>
        <Route path={`${match.path}/components`} component={Discussion}/>
      </div>
    )
  }