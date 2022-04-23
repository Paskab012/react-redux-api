const GET_DATA = 'GET_DATA';
export const CLEAR_DATA = 'CLEAR_DATA';

export const IState = {
  details: {},
};

export const getWeather = (payload) => ({ type: GET_DATA, payload });

export const getDataApi = (city) => async (dispatch) => {
  const API = `http://api.openweathermap.org/data/2.5/weather?q=${city},cd&appid=ab7fa58fb1f922dd30077d5ba626d257`;
  const myresp = await fetch(API);
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

const reducer = (state = IState, action) => {
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
