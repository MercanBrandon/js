import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ChatSpace from './chatSpace.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.msg = '';
    this.state.messages = [
        { message : 'Salut, je suis Aero' , type : 'reply'},
        // { message : 'Bonjour, je suis plein de questions', type: 'question'}
      ];
    this.state.handleChange = this.handleChange.bind(this);
    this.state.handleClick = this.handleClick.bind(this);
  }

  handleChange(e){
    // this.state.msg === this.state.handleChange;
    // console.log(this.state.msg);
    // return this.state.msg;

    let newMsg = this.state.msg;
    newMsg = e.target.value;
    console.log(newMsg);
    this.setState({ newMsg });
  }

  handleClick() {
      const newMsg = {
      message: this.state.newMsg,
      type: 'question',
      id: Date.now()
    };
    this.setState(prevState => ({
      messages: prevState.messages.concat(newMsg),
      newMsg: '',
    }));

    if(newMsg.message.includes('Salut') || newMsg.message.includes('salut') || newMsg.message.includes('Bonjour') ||newMsg.message.includes('bonjour') || newMsg.message.includes('Bonsoir')|| newMsg.message.includes('bonsoir')){
      let newReply = {
        message : 'Comment puis-je vous aidez ?',
        type : 'reply',
        // id: Date.Now()
      }
      this.setState(prevState => ({
        messages: prevState.messages.concat(newReply),
        newReply: '',
      }));
    }
    else if ((newMsg.message.includes('chance') || newMsg.message.includes('risque')) && (newMsg.message.includes('vol') || newMsg.message.includes('voyage'))){
      let newReply = {
        message : "vous avez 100% de chance de mourrir.",
        type : 'reply'
      }
      this.setState(prevState => ({
        messages: prevState.messages.concat(newReply),
        newReply: {
          message : ""
        },
      }));
      let secondReply = {
        message : "Toutefois, les chances que cela arrive lors de votre prochain voyage en avion est de 1 / 11 millions selon les données de 2014. \r Durant l'année 2017 il n'y a même eu 0 accident implicant des vols commerciaux dans les pays membre de l'OACI",
        type : 'reply'
      }
      this.setState(prevState => ({
        messages: prevState.messages.concat(secondReply), 
        secondReply :{
          message : ''
        },
      }));
    }
    else if (newMsg.message.includes('plus') && newMsg.message.includes('avion') && (newMsg.message.includes('grand') || newMsg.message.includes('gros'))){
      let newReply = {
        message : "Le plus gros avion du monde est l'Antonov AN-224 mais il ne transporte que des marchandises. \n Si vous cherchez le plus gros avion effectuant des vols commerciaux il s'agit bien évidemment de l'A380 d'Airbus qui à détronné le 747 (alias Jumbo Jet) en 2006.",
        type : 'reply'
      }
      this.setState(prevState => ({
        messages : prevState.messages.concat(newReply),
        newReply :{
          message : ''
        },
      }));
    }
    else if(newMsg.message.includes('merci') || newMsg.message.includes('thanks') || newMsg.message.includes('gracie')){
      let newReply = {
        message : "Mais je vous en prie", type : 'reply'
      }
      this.setState(prevState => ({
        messages : prevState.messages.concat(newReply),
        newReply : {
          message : ""
        },
      }))
    }
    else{ 
      let newReply = {
        message : 'Je ne peux pas vous aidez avec les éléments que vous me donnez.',
        type : 'reply',
        // id: Date.Now()
      }
      this.setState(prevState => ({
        messages: prevState.messages.concat(newReply),
        newReply: '',
      }));
    }

    
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <div className="container-fluid">
          <p>Lorem ipsum sit amlet ...</p>

          <div className="chatSpace">
            <ChatSpace messages={this.state.messages} />
          </div>
          <div className="input-group">
            <input type="text" className="form-control" placeholder="Entrer votre message" value={this.state.newMsg}  onChange={(e) => this.handleChange(e)}/>
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" onClick={this.state.handleClick}>Envoyer</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
