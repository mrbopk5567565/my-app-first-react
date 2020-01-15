import React, { Component } from 'react';
import { connect } from 'react-redux';
import { testRedux } from '../../redux/actions/testActions';
import StudentForm from '../../components/StudentForm';
import StudentList from '../../components/StudentList';
import students from '../../utils/data/studentData';
import ContentSection from '../../components/ContentSection';
import { getDataFromLocalStorage } from '../../utils/common';

class Home extends Component {
  constructor(){
    super();

    this.state = {
      stds: getDataFromLocalStorage('students') || students,
    }
  }

  componentDidMount(){
    this.props.testRedux('heelo thinh');
  }

  render(){
    const { stds } = this.state;
    return(
      <div className="Home">
        <div className="content">
          <div className="content-section">
            <StudentForm
              updateStudentList = { data => this.setState({stds: data}) }
              students = { stds }
            />
            <StudentList students={ stds } />
          </div>
          <ContentSection />
        </div>
      </div>
    )
  }
}

export default connect(null, { testRedux })(Home);