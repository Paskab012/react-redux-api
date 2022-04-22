// actions
const GET_DATA = 'GET_DATA';
export const CLEAR_DATA = 'CLEAR_DATA';
export const initialState = {
  details: {},
};

// create action creators return object
export const getWeather = (payload) => ({
  type: GET_DATA,
  payload,
});
// create action creators return function

export const getDataApi = (city) => async (dispatch) => {
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city},cd&appid=154344f9f77d3b1f544f33274934dfaa`;
  const myresp = await fetch(apiUrl);
  const ApiData = await myresp.json();
  const coordoData = ApiData.weather[0];
  coordoData.temp = ApiData.main.temp;
  coordoData.humidity = ApiData.main.humidity;
  coordoData.pressure = ApiData.main.pressure;
  coordoData.speed = ApiData.wind.speed;
  coordoData.deg = ApiData.wind.deg;
  coordoData.name = ApiData.name;

  dispatch(getWeather(ApiData));
};

// Reducer

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return { ...state, details: action.payload };
    case CLEAR_DATA:
      return { ...state, details: {} };
    default:
      return state;
  }
};
export default reducer;
