import React from 'react';
import logo from './logo.svg';
import Header from './components/Header';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import './App.css';

class App extends React.Component {
  render() {
    return ( 
      <div className = "app" >
        <Header />
        <StudentList />
        <StudentForm />
      </div>
    );
  }
}

export default App;