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
    // create copy of array with spread operator and add on new item. Do not edit state outside of setState.
    let cake = [...this.state.cake, item];

    this.setState({
      item: cake
    })
  }

  deleteCake = (id) => {
    let cake = this.state.cake.filter(cake => {
      // id of cake we are cycling through is not equal to id.
      return cake.id !== id
    });
    this.setState({
      cake: cake
    })
  }

  componentDidMount(){
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState){
    console.log('components updated');
    console.log(prevProps, prevState);
  }
  render() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* reference array and pass it down as props */}
      <Cake deleteCake={ this.deleteCake } cake={ this.state.cake } />
      <AddItem addItemFunc={this.addItemFunc}/>
    </div>
  );
  }
}

export default App;
