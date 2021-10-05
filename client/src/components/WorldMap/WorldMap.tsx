import React, { useEffect, useState } from 'react';
import './WorldMap.css';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link, useHistory } from 'react-router-dom';
import Navbar from './../NavBar/Navbar';
import { StringMappingType } from 'typescript';
import * as API from '../../ApiService';


export default function WorldMap({ countrySelected, SetSelectedCountry,}: {countrySelected: string; SetSelectedCountry: React.Dispatch<React.SetStateAction<string>>;}) {
  
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

  return (
    <div className="home-container">
<<<<<<< HEAD:client/src/components/WorldMap/WorldMap.tsx
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
            <p>LOADING</p>
          )}
      </div>



      <div className="search-buttons-container">
        <div onClick={() => history.push('/countrypage')} className="select-country" >
            <h2 className="select-country-text"> {countrySelected} </h2>
=======
      <h1>Eat the World</h1>
      <div className="map-search-container">
        <h2 className="instructions">Select a country and view their food</h2>

        {data.length ? (
          <MapContainer zoom={1.5} center={[41.38, 2.16]}>
            <GeoJSON
              style={countryStyle}
              data={data}
              onEachFeature={onEachCountry}
            />
          </MapContainer>
        ) : (
          <div className="scene">
            <div className="sky">
              <div className="sky__cloud-group">
                <div className="sky__cloud">
                  <div className="sky__cloud--bubbles"></div>
                </div>
                <div className="sky__cloud">
                  <div className="sky__cloud--bubbles"></div>
                </div>
                <div className="sky__cloud sky__cloud--small">
                  <div className="sky__cloud--bubbles"></div>
                </div>
                <div className="sky__cloud sky__cloud--small">
                  <div className="sky__cloud--bubbles"></div>
                </div>
                <div className="sky__cloud sky__cloud--small">
                  <div className="sky__cloud--bubbles"></div>
                </div>
              </div>
              <div className="sky__cloud-group">
                <div className="sky__cloud">
                  <div className="sky__cloud--bubbles"></div>
                </div>
                <div className="sky__cloud">
                  <div className="sky__cloud--bubbles"></div>
                </div>
                <div className="sky__cloud sky__cloud--small">
                  <div className="sky__cloud--bubbles"></div>
                </div>
                <div className="sky__cloud sky__cloud--small">
                  <div className="sky__cloud--bubbles"></div>
                </div>
                <div className="sky__cloud sky__cloud--small">
                  <div className="sky__cloud--bubbles"></div>
                </div>
              </div>
            </div>
            <div className="bird">
              <div className="bird__head">
                <div className="bird__head--hairs"></div>
                <div className="bird__head--eye"></div>
                <div className="bird__head--spot"></div>
                <div className="bird__head--beak"></div>
                <div className="bird__head--reflection">
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                  <div className="bird__head--reflection--dot"></div>
                </div>
              </div>
              <div className="bird__body"></div>
              <div className="bird__wing"></div>
              <div className="bird__legs">
                <div className="bird__leg bird__leg--left"></div>
                <div className="bird__leg bird__leg--right"></div>
              </div>
            </div>
          </div>
        )}

        <div
          onClick={() => history.push('/countrypage')}
          className="select-country"
        >
          <h2 className="select-country">{countrySelected + '!'}</h2>
>>>>>>> alban-dev:client/src/components/WorldMap.tsx
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

          <Link to="/countrypage" className="view-button-container">
            <div className="view-button">
              <p className="button-label">View Food</p>
            </div>
          </Link>

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
