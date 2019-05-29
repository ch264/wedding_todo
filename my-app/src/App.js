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

  addItemFunc = (item) => {
    // generate random id number between 0 and 1
    item.id = Math.random();
    // create copy of array with spread operator and add on new item. Do not edit state directly.
    let itemsArr = [...this.state.items, item]
    this.setState({
      items: itemsArr
    })
  }

  render() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* reference array and pass it down as props */}
      <Cake cake={ this.state.cake } />
      <AddItem addItemFunc={this.addItemFunc}/>
    </div>
  );
  }
}

export default App;
