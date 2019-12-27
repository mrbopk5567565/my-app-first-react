import React, { Component } from 'react';
import './StudentForm.scss';
import StudentItem from './StudentItem';
import lableData, { lable_ThayTung } from './lableData/lableData.js';
import TextInput from '../Forms/TextInput';


class StudentForm extends Component {
    constructor(){
        super();

        this.state = {
            data: {
                name: '',
                gender: '',
                math: 0,
                english: 0
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
                {/* <TextInput name="name" lable="Student Name" onChange={ this.handleChange }/>
                <TextInput name="name" lable="Student Name" onChange={ this.handleChange }/> */}
                {lable_ThayTung.map((lable, idx) => 
                    <TextInput
                        key={idx}
                        name={lable.name}
                        lable={lable.lable}
                        onChange={ this.handleChange }
                    />
                )}
            </div>
        )
    }

    handleChange = e => {
        console.log(e.target.value)
        const { data } = this.state;
    }
}

export default StudentForm;