import React, { Component } from 'react';
// import students from './data/studentData';
import StudentRow from './StudentRow';
import './StudentList.scss';
// import { getDataFromLocalStorage } from '../../utils/common';
// import students from '../../utils/data/studentData';

class StudentList extends Component {
    // constructor(){
    //     super();

    //     this.state = {
    //         stds: getDataFromLocalStorage('students') || students
    //     }
    // }
    render(){

        const { students } = this.props;
        const tableHeads = [ 'Number' ,...Object.keys(students[0]), 'average', 'Rank'];
        // const { stds } = this.state;

        return(
            <div className="student-list">
                <table>
                    <thead>
                        <tr>
                            {tableHeads.map((head, idx) =>
                                <th key={ idx }>{ head }</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, idx) =>
                            <StudentRow 
                                key={idx} 
                                number={idx} { ... student } 
                                // updateStudentList={ data => this.setState({ stds: data }) } 
                                // students={ stds }
                            />
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentList;