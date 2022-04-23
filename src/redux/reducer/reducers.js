const FETCH_API_DATA = 'FETCH_API_DATA';
export const REMOVE_DATA = 'REMOVE_DATA';

export const IState = {
  details: {},
};

export const getWeather = (payload) => ({ type: FETCH_API_DATA, payload });

export const getDataApi = (city) => async (dispatch) => {
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${city},cd&appid=ab7fa58fb1f922dd30077d5ba626d257`;
  const myresp = await fetch(API);
  const ApiData = await myresp.json();
  const Coordinate = ApiData.weather[0];
  Coordinate.temp = ApiData.main.temp;
  Coordinate.humidity = ApiData.main.humidity;
  Coordinate.pressure = ApiData.main.pressure;
  Coordinate.speed = ApiData.wind.speed;
  Coordinate.deg = ApiData.wind.deg;
  Coordinate.name = ApiData.name;

  dispatch(getWeather(ApiData));
};

const reducer = (state = IState, action) => {
  switch (action.type) {
    case FETCH_API_DATA:
      return { ...state, details: action.payload };
    case REMOVE_DATA:
      return { ...state, details: {} };
    default:
      return state;
  }
};
export default reducer;
