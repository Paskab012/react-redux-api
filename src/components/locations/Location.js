import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { dom } from '@fortawesome/fontawesome-svg-core';
import { IoIosArrowForward, IoIosPin } from 'react-icons/io';
import { BiSearchAlt2 } from 'react-icons/bi';
import { v4 as uuid } from 'uuid';
import { getDataApi } from '../../redux/Reducers';
import background from '../../assets/temp.jpg';

dom.watch();

const Locations = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const dispatch = useDispatch();
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const PlaceCities = ['Kigali', 'Nyamasheke', 'Rubavu', 'Nyamata', 'Kamembe', 'Nyamagabe', 'Bugesera', 'Kayonza', 'Kirehe', 'Ngoma', 'Gasabo', 'Nyarugenge', 'Kicukiro', 'Burera', 'Gakenke', 'Gicumbi', 'Musanze', 'Rulindo', 'Gisagara', 'Huye', 'Kamonyi', 'Muyanga', 'Nyanza', 'Nyaruguru', 'Ngororero'];
  const searchedPlaces = searchQuery.trim().length > 0
    ? PlaceCities.filter((c) => c.toLowerCase().includes(searchQuery.toLowerCase())) : PlaceCities;
  return (
    <>
      <div className="container">
        <div className="ttable">
          <div className="input">
            <input type="text" onChange={handleChange} value={searchQuery} id="input-data" placeholder="city/country" />
            <BiSearchAlt2 id="search" />
          </div>
          <div className="cities-table">

            {searchedPlaces.map((place) => (
              <Link className="link" key={uuid()} to="/details">
                <div
                  className="town"
                  id={place}
                  onClick={() => { dispatch(getDataApi(`${place}`)); }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={() => { dispatch(getDataApi(`${place}`)); }}
                >
                  <div className="my-link"><IoIosArrowForward className="arrow-forward" /></div>
                  <img src={background} alt="weather-icons" />
                  <div className="ville">
                    <IoIosPin />
                    {place}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Locations;
