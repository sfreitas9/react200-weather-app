import React from 'react';

export default class CityPanel extends React.Component {

  render() {
    if (this.props.searches.length === 1) return (
      <div className='card'>
        <div className='card-header bg-success text-white'>
          Current Weather
        </div>
        <div className='card-body text-center' />
      </div>);
    const weather = this.props.searches[this.props.displayIndex].weather;
    const weatherImg = weather.weather[0].icon ? (<img src={ `http://openweathermap.org/img/w/${weather.weather[0].icon}.png` } alt='icon' />) : '';
    return (
      <div className='card'>
        <div className='card-header bg-success text-white'>
          Current Weather
        </div>
        <div className='card-body text-center'>
          <h1 className=''>{ weatherImg }{ weather.name }</h1>
          <p>Lat/Lon: { weather.coord.lat }, { weather.coord.lon }</p>
          <hr />
          <div className='row'>
            <div className='col-md-4'>
              <p className='font-weight-bold'>Temperature (&deg;F)</p>
              <p className='text-success font-weight-bold text-center'>{ weather.main.temp }&deg;F</p>
            </div>
            <div className='col-md-4'>
              <p className='font-weight-bold'>Pressure</p>
              <p className='text-success font-weight-bold'>{ weather.main.pressure }</p>
            </div>
            <div className='col-md-4'>
              <p className='font-weight-bold'>Humidity</p>
              <p className='text-success font-weight-bold'>{ weather.main.humidity }</p>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4'>
              <p className='font-weight-bold'>Lowest Temp (&deg;F)</p>
              <p className='text-success font-weight-bold'>{ weather.main.temp_min }&deg;F</p>
            </div>
            <div className='col-md-4'>
              <p className='font-weight-bold'>Highest Temp (&deg;F)</p>
              <p className='text-success font-weight-bold'>{ weather.main.temp_max }&deg;F</p>
            </div>
            <div className='col-md-4'>
              <p className='font-weight-bold'>Wind Speed</p>
              <p className='text-success font-weight-bold'>{ weather.wind.speed }mph</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
