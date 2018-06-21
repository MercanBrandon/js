import React, { Component } from 'react';
import './App.css';

class TodoList extends Component {
    render() {
      return (
        <ul>
          {this.props.people.map(personne => (
            <li key={personne.id}>
                Personne : {personne.name} a {personne.age} ans
            </li>
          ))}
        </ul>
      );
    }
  }

  export default TodoList;