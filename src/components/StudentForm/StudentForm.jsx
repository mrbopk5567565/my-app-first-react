import React, { Component } from 'react';
import './StudentForm.scss';
import StudentItem from './StudentItem';
import lableData, { lable_ThayTung } from './lableData/lableData.js';
import TextInput from '../Forms/TextInput';
import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../utils/common'
import validator from '../../validations/studentFormValidation';


class StudentForm extends Component {
    constructor(){
        super();

        this.state = {
            data: {
                name: '',
                gender: '',
                math: '',
                english: '',
            },
            errors: {},
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

        const { errors, data: { name, gender, math, english } } = this.state;
    
        return(
            <div className="student-form">
                <h2>Student Form</h2>
                <div className="student-form-contend">
                    {/* <TextInput name="name" lable="Name" onChange={ this.handleChange }/>
                    <TextInput name="name" lable="Name" onChange={ this.handleChange }/> */}
                    <TextInput name="name" label="Name" value={ name } onChange={ this.handleChange } error={ errors.name } />
                    <TextInput name="gender" label="Gender" value={ gender } onChange={ e => this.handleChange(e) } error={ errors.gender } />
                    <TextInput name="math" label="Math" value={ math } onChange={ this.handleChange }  error={ errors.math } />
                    <TextInput name="english" label="English" value={ english } onChange={ this.handleChange }  error={ errors.english } />

                    {/* {lable_ThayTung.map((item, idx) => 
                        <TextInput
                            key={idx}
                            name={item.name}
                            lable={item.lable}
                            // value={ name }
                            onChange={ this.handleChange }
                            error={ errors.name }
                        />
                    )} */}
                </div>
                <div className="student-form-buttons">
                    <button onClick={ this.insertStudent }>Insert Students</button>
                </div>
            </div>
        )
    }

    // errorChange = (e) => {
    //     errors.name
    // }

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
        const { isValid, errors } = validator(this.state.data);

        if (!isValid){
            return this.setState({ errors })
        }

        const { students, updateStudentList } = this.props;
        const data = getDataFromLocalStorage('students') || students;
        const updateData = [ ...data, this.state.data ];
        saveDataToLocalStorage('students', updateData);
        updateStudentList(updateData)
        this.setState({ errors: {}, data: {} });
    }
    
}

export default StudentForm;