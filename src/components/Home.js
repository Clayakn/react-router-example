import React from 'react';


export default function Home({ history }) {
    return (
      <div>
        <h1>Home</h1>
        {/* Can use history object to go back to previous route */}
        <button onClick={history.goBack}>Go back!</button>
      </div>
    )
  }