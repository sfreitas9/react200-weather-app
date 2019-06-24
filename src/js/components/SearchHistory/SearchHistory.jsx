import React from 'react';

export default class SearchHistory extends React.Component {

  render() {
    const searches = [...this.props.searches]; //.reverse();
    const history = searches.map((search) => {
      if (search.weather) {
        return (
          <tr key={ search.weather.name + search.date }>
            <td className='w-50'>{ search.weather.name }</td>
            <td className='w-50'>{ search.date }</td>
          </tr>
        );
      }
    });
    return (
      <div className='card'>
        <div className='card-header bg-success text-white'>
          Search History
        </div>
        <div className='card-body'>
          <table className='table-striped'>
            <tbody>
              { history }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
