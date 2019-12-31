import React from 'react';
import Header from './components/Header';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import ContentSection from './components/ContentSection';
import students from './utils/data/studentData';
import { getDataFromLocalStorage } from './utils/common';

import './App.scss';

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      stds: getDataFromLocalStorage('students') || students,
    }
  }
  render() {
      const { stds } = this.state;
    return ( 
      <div className = "app" >
        <Header />
        <div className="content">
          <div className="content-section">
            <StudentForm
              updateStudentList = { data => this.setState({stds: data}) }
              students = { stds }
            />
            <StudentList students={ stds } />
          </div>
          <ContentSection/>
        </div>
      </div>
    );
  }
}

export default App;