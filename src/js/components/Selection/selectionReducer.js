const defaultState = {
  city: '',
  searches: [{
    weather: null,
    date: null
  }],
  error: '',
  displayIndex: -1
};

export default function SelectionReducer(state = defaultState, action) {
  const { type, payload } = action;
  switch (type) {
    case 'GET_WEATHER_ALREADY_HAVE': {
      return {
        ...state,
        city: '',
        error: '',
        displayIndex: payload
      };
    }

    case 'GET_WEATHER_FULFILLED': {
      state.searches.push({
        weather: payload.data,
        date: new Date(Date.now()).toLocaleString(),
      });
      return {
        ...state,
        city: '',
        error: '',
        displayIndex: state.searches.length - 1
      };
    }
    case 'GET_WEATHER_REJECTED': {
      // state.searches.push({
      //   weather: null,
      //   date: new Date(Date.now()).toLocaleString()
      // });
      return {
        ...state,
        city: '',
        error: 'City not found',
      };
    }
    case 'SET_CITY': {
      return {
        ...state,
        city: payload.city,
        error: ''
      };
    }
    default: {
      return state;
    }
  }
}
