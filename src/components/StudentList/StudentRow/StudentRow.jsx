import React, { Component } from 'react';
import { averegeCalc, Rank } from '../../../utils/common';

class StudentRow extends Component {
    render(){
        const { name, gender, math, english } = this.props;
        console.log(this.props)
        const average = averegeCalc(math, english);

        return(
            <tr>
                <td>{ name }</td>
                <td>{ gender }</td>
                <td>{ math }</td>
                <td>{ english }</td>
                <td>{ average }</td>
                <td>{ Rank(average) }</td>
            </tr>
        )
    }
}

export default StudentRow;

