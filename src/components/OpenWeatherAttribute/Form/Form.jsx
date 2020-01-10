import React, { Component } from 'react';

class Form extends Component {
  constructor(){
    super();

    this.state = {
      city: '',
      country: ''
    }
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  getWeather = () => {
    // const { fetchApi } = this.props;
    const { changeCityCountry } = this.props;
    const { city, country } = this.state;
    changeCityCountry(city, country)
    // fetchApi();
    console.log('form',city, country)
  }
  
  render() {
    
    return (
      // <form onSubmit={this.props.getWeather}>
      //   <input type="text" name="city" placeholder="City ..." />
      //   <input type="text" name="country" placeholder="Country ..." />
      //   <button>Get Weather</button>
      // </form>
      <div>
        <input type="text" name="city" placeholder="City ..." onChange={ this.onChange }/>
        <input type="text" name="country" placeholder="Country ..." onChange={ this.onChange }/>
        <button onClick={ this.getWeather }>Get Weather</button>
      </div>
    )
  }
}

export default Form;