import React, { Component } from 'react';

class StudentItem extends Component {
    render(){

        const { lable } = this.props;

        return(
            <div className="form--item">
                <label className="form--lable" htmlFor={ lable }>{ lable }</label>
                <input className="form--input" type="text" name={ lable } id={ lable }/>
            </div>
        )
    }
}

export default StudentItem;