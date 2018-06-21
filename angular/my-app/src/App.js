import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Header';
import TodoList from './TodoList';
import './App.css';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      people: [
        { name: "gerard" , age: 20},
        { name: "yanis", age: 30 }
      ],
      newName: {},
      isRequired: false,
      isExist: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  onClicked = () =>  {
    this.setState({ age: this.state.age + 10 });
  }

  resetAge = () => {
    this.setState({ age: 25 });
  }

  handleChange(e, attr) {
    const newName = this.state.newName;
    newName[attr] = e.target.value;
    this.setState({ newName });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.newName.name || !this.state.newName.age) {
      this.setState({
        isRequired: true,
        newName: {}
      })
      return;
     }

    if (this.testName(this.state.people, this.state.newName.name)) {
      this.setState({
        isExist: true,
        newName: {}
      })
      return
    }

    const newItem = {
      name: this.state.newName.name,
      age: this.state.newName.age,
      id: Date.now()
    };
    this.setState(prevState => ({
      people: prevState.people.concat(newItem),
      newName: {},
      isExist: false,
      isRequired: false,
    }));
  }

  testName = (array, prop) => {
    for (var i = 0; i < array.length; i++) {
      var personne = array[i]
      if (personne.name === prop) {
        return true;
      }
    }
    return false;
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <div className="App-intro">
          <TodoList people={this.state.people}/>
          <form onSubmit={this.handleSubmit}>
            <input
              id="new-todo-name"
              placeholder="name"
              onChange={(e) =>this.handleChange(e, 'name')}
              value={this.state.newName.name}
            />
            <input
              id="new-todo-age"
              placeholder="age" 
              type="number"            
              onChange={(e) => this.handleChange(e, 'age')}
              value={this.state.newName.age}
            />
            <button>
              Add
            </button>
          </form>
          { this.state.isExist && <p>Cette personne existe déjà</p> }
          { this.state.isRequired && <p>Nom et Age obligatoires.</p>}
            {this.state.age} To get started, edit <code>src/App.js</code> and save to reload.
          <button onClick={this.resetAge}>Reset</button>
        </div>
      </div>
    );
  }
}

export default App;
