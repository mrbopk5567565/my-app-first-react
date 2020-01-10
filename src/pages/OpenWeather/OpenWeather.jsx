import React, { Component } from 'react';
import Titles from '../../components/OpenWeatherAttribute/Titles';
import Form from '../../components/OpenWeatherAttribute/Form';
import Weather from '../../components/OpenWeatherAttribute/Weather';

const API_KEY = '2e3835953e6609b0e184ef5889994bb5';

class OpenWeather extends Component {
  constructor() {
    super();

    this.state = {
      city: '',
      country: '',
      data: [],
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined,
    }
  }

  componentDidMount() {
    // this.fetchApi();
    // this.getWeather()
  }

  fetchApi = async (city, country) => {

    console.log('openweather', city, country)
    if (city !== ''){
      await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`,
        // {
        //   method: 'GET', // or 'PUT'
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        // }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log('Success:', data);
          this.setState({ data: data })
          this.setState({
            temperature: data.main.temp,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            error: "",
          })
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      // console.log('nhap city')
      this.setState({
        error: "Please enter the value"
      })
    }
  }

  // componentWillReceiveProps(){
  //   this.fetchApi()
  // }

  render() {
    const { city, country, temperature, humidity , description, error} = this.state;
    return (
      <div>
        <Titles />
        <Form
          changeCityCountry={(city, country) => this.fetchApi(city,country)}
          // fetchApi={ this.fetchApi }
        />
          <Weather
            city={ city }
            country={ country }
            temp={ temperature }
            humidity= { humidity }
            description={ description }
            error = { error }
          />
      </div>
    )
  }
}

export default OpenWeather;

 // getWeather = async (e) => {
  //   // e.preventDefault();
  //   const { city, country } = this.state;
  //   const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ city },${ country }&appid=${ API_KEY }&units=metric`);
  //   const data = await api_call.json();
  //   console.log(data)
  //   console.log(city)
  // } 