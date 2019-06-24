import React from 'react';
import { getWeather, setCity } from './selectionActions';

export default class Selection extends React.Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleEnter = this.handleEnter.bind(this);
  }

  handleEnter(event) {
    if (event.keyCode === 13 || event.which === 13) {
      this.handleSearch();
    }
  }
  handleChange(event) {
    const value = event.target.value || event.target.name;
    const { dispatch, searches } = this.props;
    dispatch(setCity(value));

    if (event.target.name) dispatch(getWeather(searches, event.target.name));
  }

  handleSearch() {
    const { dispatch, city, searches } = this.props;
    dispatch(getWeather(searches, city));
  }

  render() {
    const searches = this.props.searches; 

    let tabs = null;
    tabs = searches.map((search, i) => {
      if (search.weather) {
        return (
          <li className='nav-item mr-1 rounded-top border' key={ search.weather.name + search.date }>
            <a
              className={ `nav-link ${i === this.props.displayIndex ? 'active' : 'disabled'}` } href='#'
              name={ search.weather.name }
              onClick={ this.handleChange }
            >{ search.weather.name }</a>
          </li>);
      }
    });
    return (
      <div className='container'>
        <ul className='nav nav-pills'>
          {tabs}
        </ul>
        <div>
          <form className='form-inline '>
            <input
              id='searchCity' className='form-control form-control-sm mr-3 w-75' type='text' value={ this.props.city }
              placeholder='Pick a City' aria-label='Search' onChange={ this.handleChange }
              onKeyPress={ this.handleEnter }
            />
            <i className='fas fa-search' aria-hidden='true' onClick={ this.handleSearch } />
          </form>
        </div>
        <div className='text-danger mt-2'>
          { this.props.error }
        </div>
      </div>
    );
  }
}
