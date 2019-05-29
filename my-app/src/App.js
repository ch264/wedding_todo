// Root component

import React, { Component } from 'react';
import Cake from './Cake';
import AddItem from './addItem';


class App extends Component {
  state = {
    cake: [
      { name: 'sugar', id: 1},
      { name: 'butter', id: 2}
    ]
  }
  render() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* reference array and pass it down as props */}
      <Cake cake={ this.state.cake } />
      <AddItem />
    </div>
  );
  }
}

export default App;
