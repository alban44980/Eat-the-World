import React, { useEffect, useState } from 'react';
import './WorldMap.css';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link, useHistory } from 'react-router-dom';
import Navbar from './../NavBar/Navbar';
import { StringMappingType } from 'typescript';
import ChickLoading from '../ChickLoading/ChickLoading';
import * as API from '../../ApiService';

export default function WorldMap({
  countrySelected,
  SetSelectedCountry,
}: {
  countrySelected: string;
  SetSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
}) {
  useEffect(() => {
    API.getCountryData().then((data) => {
      setData(data);
    });
  }, []);

  const [data, setData] = useState<any>([]);
  const [filteredCountries, SetFilteredCountries] = useState<string[]>([]);
  const [wordEntered, SetWordEntered] = useState<string>('');

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput: string = event.target.value;
    SetWordEntered(searchInput);
    const newFilter: string[] = data.filter((value: any) => {
      return value.properties.ADMIN.toLowerCase().includes(
        searchInput.toLowerCase()
      );
    });
    SetFilteredCountries(newFilter);
  };

  const randomCountry = () => {
    const featuresArray = data;
    const randomIndex = Math.floor(Math.random() * featuresArray.length);
    SetSelectedCountry(featuresArray[randomIndex].properties.ADMIN);
  };

  const clearSearchInput = () => {
    SetWordEntered('');
  };

  // map styling
  const countryStyle: {
    fillColor: string;
    fillOpacity: number;
    color: string;
    weight: number;
  } = {
    fillColor: 'red',
    fillOpacity: 0.2,
    color: 'black',
    weight: 0.5,
  };

  const onCountryClick = (event: any) => {
    event.target.setStyle({ fillColor: 'blue' });
  };

  const writeCountryName = (event: any) => {
    SetSelectedCountry(event.target.feature.properties.ADMIN);
  };

  const onEachCountry = (country: any, layer: any) => {
    const countryName = country.properties.ADMIN;
    layer.bindPopup(countryName);
    layer.on({
      click: onCountryClick,
    });
    layer.on({
      click: writeCountryName,
    });
  };

  const history = useHistory();

  function goToCountry() {
    return countrySelected.length > 0
      ? history.push('/countrypage')
      : SetSelectedCountry('Click a fucking country!');
  }

  return (
    <div className="home-container">
      <div className="titleContainer">
        <h1 className="title">Eat the World</h1>
      </div>
      <div className="map-container">
        {data.length ? (
          <MapContainer zoom={1.5} center={[41.38, 2.16]}>
            <GeoJSON
              style={countryStyle}
              data={data}
              onEachFeature={onEachCountry}
            />
          </MapContainer>
        ) : (
          <ChickLoading />
        )}
      </div>

      <div className="search-buttons-container">
        <div className="select-country">
          <h2 className="select-country-text"> {countrySelected} </h2>
        </div>

        <div className="search-container">
          <div className="search">
            <div className="searchInputs">
              <input
                className="search-box"
                type="text"
                placeholder="Search countries..."
                onChange={handleFilter}
                value={wordEntered}
              />
            </div>

            {filteredCountries.length !== 0 && (
              <div className="countryResult">
                {filteredCountries.slice(0, 10).map((country: any) => {
                  return (
                    <div
                      className="countrySuggestion"
                      onClick={() => {
                        SetSelectedCountry(country.properties.ADMIN);
                        SetFilteredCountries([]);
                        clearSearchInput();
                      }}
                    >
                      {country.properties.ADMIN}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* <Link to="/countrypage" className="view-button-container"> */}

          <div
            onClick={() => {
              goToCountry();
            }}
            className="view-button-container"
          >
            <p className="button-label">View Food</p>
          </div>
        </div>

        <div>
          <button
            className="random-button"
            onClick={() => {
              randomCountry();
              clearSearchInput();
              SetFilteredCountries([]);
            }}
          >
            {' '}
            Random!
          </button>
        </div>
      </div>
    </div>
  );
}
