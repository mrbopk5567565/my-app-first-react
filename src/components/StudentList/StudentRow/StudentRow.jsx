import React, { Component } from 'react';
import { averegeCalc, Rank } from '../../../utils/common';
import './StudentRow.scss';
// import { getDataFromLocalStorage, saveDataToLocalStorage } from '../../../utils/common'

class StudentRow extends Component {
    constructor(){
        super();

        this.state = {
            fillColor: false
        }
    }

    updateFillColorStatus = () => {
        this.setState({ fillColor: !this.state.fillColor })
    }

    // removeRow = (a, number) => {
    //     // a[number + 1].remove();
    //     // a.splice(number + 1,1)

    //     const { students, updateStudentList } = this.props;
    //     const data = getDataFromLocalStorage('students') || students;
    //     const updatedData = data.splice(number + 1,1);
    //     saveDataToLocalStorage('students', updatedData);
    //     updateStudentList(updatedData);
    // }

    render(){
        const { number, name, gender, math, english} = this.props;
        // console.log(this.props)
        const average = averegeCalc(math, english);
        const { fillColor } = this.state;

        console.log(fillColor)

        return(
            <tr className={ fillColor ? 'colorful' : '' }>
                <td>{ number + 1 }</td>
                <td>{ name }</td>
                <td>{ gender }</td>
                <td>{ math }</td>
                <td>{ english }</td>
                <td>{ average }</td>
                <td>{ Rank(average) }</td>
                <td><button onClick={ this.updateFillColorStatus }>{ fillColor ? 'Remover Color' : 'Fill Color'}</button></td>
                {/* <td><button onClick={ (number) => this.removeRow(number) }>Remove</button></td> */}
            </tr>
        )
    }
}

export default StudentRow;

