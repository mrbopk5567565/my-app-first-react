import React, { Component } from 'react';
import './StudentForm.scss';
import StudentItem from './StudentItem';
import lableData, { lable_ThayTung } from './lableData/lableData.js';
import TextInput from '../Forms/TextInput';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../utils/common'


class StudentForm extends Component {
    constructor(){
        super();

        this.state = {
            data: {
                name: '',
                gender: '',
                math: '',
                english: '',
            }
        }
    }
    render(){

        // const lableD = [...lableData, {lable: 'average',}];
        // console.log('lable', lableD)

        // myself
        // return(
        //     <div className="student-form">
        //         <form className="form" action="">
        //             <p className="form--title">Student Form</p>
        //             {lableData.map((data, idx) => 
        //                 <StudentItem
        //                     key={idx}
        //                     lable={data.lable}
        //                 />
        //             )}
        //             <button className="button-insert">insert</button>
        //         </form>
        //     </div>
        // )


        // cua thay
    
        return(
            <div className="student-form">
                <h2>Student Form</h2>
                <div className="student-form-contend">
                    {/* <TextInput name="name" lable="Student Name" onChange={ this.handleChange }/>
                    <TextInput name="name" lable="Student Name" onChange={ this.handleChange }/> */}

                    {lable_ThayTung.map((item, idx) => 
                        <TextInput
                            key={idx}
                            name={item.name}
                            lable={item.lable}
                            onChange={ this.handleChange }
                        />
                    )}
                </div>
                <div className="student-form-buttons">
                    <button onClick={ this.insertStudent }>Insert Students</button>
                </div>
            </div>
        )
    }

    handleChange = e => {
        // console.log(e.target.value)
        const { data } = this.state;
        // console.log('name of textput:',e.target.name)
        data[e.target.name] = e.target.value;
        // console.log('data:', data[e.target.name])
        this.setState({ data })
        console.log(data)
    }

    insertStudent = () => {
        const { students, updateStudentList } = this.props;
        const data = getDataFromLocalStorage('students') || students;
        const updateData = [ ...data, this.state.data ];
        saveDataToLocalStorage('students', updateData);
        updateStudentList(updateData)
    }
    
}

export default StudentForm;