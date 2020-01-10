import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {
  render() {
    const { city, country, temp, humidity, description, error } = this.props;
    return (
      <div className="weather">
        { error && <span>{ error }</span>}
        { city &&
          <div className="weather-content">
            <p className="weather-title">City:</p>
            <p className="weather-description">{city}</p>
          </div>
        }
        { country &&
          <div className="weather-content">
            <p className="weather-title">Country:</p>
            <p className="weather-description">{country}</p>
          </div>
        }
        { temp &&
          <div className="weather-content">
            <p className="weather-title">Temperature:</p>
            <p className="weather-description">{temp}</p>
          </div>
        }
        { humidity &&
          <div className="weather-content">
            <p className="weather-title">Humidity:</p>
            <p className="weather-description">{humidity}</p>
          </div>
        }
        { description &&
          <div className="weather-content">
            <p className="weather-title">Description:</p>
            <p className="weather-description">{description}</p>
          </div>
        }
      </div>
    )
  }
}

export default Weather;