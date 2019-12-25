import React, { Component } from 'react';
import students from './data/studentData';
import StudentRow from './StudentRow';
import './StudentList.scss'


const tableHeads = Object.keys(students[0]);
console.log(tableHeads);

class StudentList extends Component {
    render(){
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
                            <StudentRow key={idx} { ... student }/>
                        )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default StudentList;