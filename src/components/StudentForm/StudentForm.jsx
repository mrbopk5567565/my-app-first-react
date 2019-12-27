import React, { Component } from 'react';
import './StudentForm.scss';
import StudentItem from './StudentItem';
import lableData from './lableData/lableData.js';


class StudentForm extends Component {
    render(){

        // const lableD = [...lableData, {lable: 'average',}];
        // console.log('lable', lableD)

        return(
            <div className="student-form">
                <form className="form" action="">
                    <p className="form--title">Student Form</p>
                    {lableData.map((data, idx) => 
                        <StudentItem
                            key={idx}
                            lable={data.lable}
                        />
                    )}
                    <button className="button-insert">insert</button>
                </form>
            </div>
        )
    }
}

export default StudentForm;