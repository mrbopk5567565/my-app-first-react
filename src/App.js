import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import './App.css';
import NavItem from './components/Header/NavItem';

class App extends React.Component {
  render() {
    return ( 
      <div className = "app" >
        <Header />
      </div>
    );
  }
}

export default App;