import React, { Component } from 'react';

class TextInput extends Component {
    render(){
        const { label, name, error, value, onChange } = this.props;
        return(
             <div className="form-field">
                <label className="form-label" htmlFor={ name }>{ label }</label>
                <input 
                    className="form-input" 
                    type="text" 
                    id={ name } 
                    name={ name }
                    value={ value || '' }
                    onChange={ onChange }/>
                { error && <span>{ error }</span>}
             </div>
        )
    }
}

export default TextInput;