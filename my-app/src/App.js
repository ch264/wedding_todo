// Root component

import React, { Component } from 'react';
import Cake from './Cake';
import AddItem from './addItem';

import Todos from './components/Todos';
import AddTodo from './components/addForm';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

import { BrowserRouter, Route } from 'react-router-dom'

import Todo from './components/Todo'


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

  // adds todo and ads it to object above
  addTodo = (todo) => {
    // set id to todo that is passed down
    todo.id = Math.random()
    // spread operator takes existing array from above and we add on the new todo that we attached an id to.
    let todos = [...this.state.todos, todo];
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
    <BrowserRouter>
      <div className="App container">
        <Navbar />
        {/* when user goes to path load in the component */}
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path="/:todo_id" component={Todo} />
        
     


        <h1 className="center white-text">Wedding planning helper</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />

        {/* <AddItem addItemFunc={this.addItemFunc}/>
        {/* reference array and pass it down as props */}
        {/* <Cake deleteCake={ this.deleteCake } cake={ this.state.todos } /> */}
        
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
