import React, { Component } from 'react';

class StudentRow extends Component {
    render(){

        const { name, gender, math, english } = this.props;

        return(
            <tr>
                <td>{ name }</td>
                <td>{ gender }</td>
                <td>{ math }</td>
                <td>{ english }</td>
            </tr>
        )
    }
}

export default StudentRow;

