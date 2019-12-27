import React, { Component } from 'react';
import { averegeCalc, Rank } from '../../../utils/common';
import './StudentRow.scss';

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
            </tr>
        )
    }
}

export default StudentRow;

