// Root component

import React from 'react';
import Cake from './Cake';



function App() {

  state = {
    cakes : [
      { name: Sugarpaste },
      { name: Buttercreme }
    ]
  }
  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* reference array and pass it down as props */}
      <Cake cakes={ this.state.cakes } />

    </div>
  );
}

export default App;
