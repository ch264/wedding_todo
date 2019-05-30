// Root component

import React, { Component } from 'react';
import Cake from './Cake';
import AddItem from './addItem';

import Todos from './Todos';
import AddTodo from './addForm'


class App extends Component {
  state = {
    todos: [
      { content: 'sugar', id: 1},
      { content: 'butter', id: 2}
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

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id // returns true keep
    })
    this.setState({
      todos: todos
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
    <div className="App container">
      <h1 className="center white-text">Wedding planning helper</h1>
      <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      <AddTodo />

      {/* reference array and pass it down as props */}
      <Cake deleteCake={ this.deleteCake } cake={ this.state.todos } />
      <AddItem addItemFunc={this.addItemFunc}/>
    </div>
  );
  }
}

export default App;
