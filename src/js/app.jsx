import React from 'react';
import Selection from './components/Selection';
import CityPanel from './components/CityPanel';
import SearchHistory from './components/SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron border border-dark mt-2'>
          <h1>Weather Application</h1>
          <h3>Always know if you&lsquo;ll need an umbrella!</h3>
        </div>
        <div className='row'>
          <Selection />
        </div>
        <div className='row py-5'>
          <div className='col-md-6'>
            <CityPanel />
          </div>
          <div className='col-md-6'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
