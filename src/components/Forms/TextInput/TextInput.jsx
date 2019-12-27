import React, { Component } from 'react';

class TextInput extends Component {
    render(){
        const { lable, name, onChange } = this.props;
        return(
             <div className="form-field">
                 <label htmlFor="">{ lable }</label>
                 <input type="text" name={ name } onChange={ onChange }/>
             </div>
        )
    }
}

export default TextInput;