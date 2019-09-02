import React, {Component} from 'react';
import firebase from 'firebase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null
    };

    this.handleAuth = this.handleAuth.bind(this);    
    this.handleLogout = this.handleLogout.bind(this);
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });
    })
  }

  handleAuth() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
      .then(result => console.log(`${result.user.email} ha iniciado sesión con google`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }

  handleLogout() {
    firebase.auth().signOut()
      .then(result => console.log(`${result.user.email} ha cerrado sesión`))
      .catch(error => console.log(`Error ${error.code}: ${error.message}`));
  }  

  renderLoginButton() {
    if (this.state.user) {
      return (
        <div>
          <img width="100" src={this.state.user.photoURL} alt={this.state.user.displayName} />
          <p>Hola {this.state.user.displayName}!</p>
          <button onClick={this.handleLogout}>Salir</button>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.handleAuth}>Login con google</button>
        </div>
      );
    }
  }

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <a
          className="App-link"
          href="http://mabregu.com"
          target="_blank"
          rel="noopener noreferrer"
          >
            Pseudogram
          </a>
          <p className="App-link">
            { this.renderLoginButton() }
          </p>
        </header>
      </div>
    );
  }
}

export default App;
