import React, { useEffect, useState } from 'react';
import './WorldMap.css';
// import mapData from '../data/countries.json';
import { MapContainer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link, useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import { StringMappingType } from 'typescript';
import * as API from '../ApiService'

//Type for data ==> GeoJson.FeatureCollection

// const data: any = mapData;

export default function WorldMap({
  countrySelected,
  SetSelectedCountry,
}: {
  countrySelected: string;
  SetSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
}) {

  useEffect(() => {
    API.getCountryData()
    .then(data => {
      console.log(data);
      setData(data)
    })
    
    
  }, [])

  const [data, setData] = useState<any>([])

  const [filteredCountries, SetFilteredCountries] = useState<string[]>([]);
  const [wordEntered, SetWordEntered] = useState<string>('');

  // filters list of countries
  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchInput: string = event.target.value;
    SetWordEntered(searchInput);
    //Come back to the filter type down there
    const newFilter: string[] = data.features.filter((value: any) => {
      return value.properties.ADMIN.toLowerCase().includes(
        searchInput.toLowerCase()
      );
    });
    SetFilteredCountries(newFilter);
  };

  const randomCountry = () => {
    const featuresArray = data.features;
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

  // when a country is clicked, change the colour
  const onCountryClick = (event: any) => {
    event.target.setStyle({ fillColor: 'blue' });
  };

  // list selected country
  const writeCountryName = (event: any) => {
    SetSelectedCountry(event.target.feature.properties.ADMIN);
  };

  // Pop up produced following every country click with it's info
  const onEachCountry = (country: any, layer: any) => {
    const countryName = country.properties.ADMIN;
    //pop-up country name when clicked
    layer.bindPopup(countryName);
    // change country color to blue when clicked
    layer.on({
      click: onCountryClick,
    });
    // list selected country
    layer.on({
      click: writeCountryName,
    });
  };

  const history = useHistory();

  return (
    <div className="home-container">
      <h1>Eat the World</h1>
      <div className="map-search-container">
        <h2 className="instructions">Select a country and view their food</h2>

        <MapContainer zoom={1.5} center={[41.38, 2.16]}>
          <GeoJSON
            style={countryStyle}
            data={data.features}
            onEachFeature={onEachCountry}
          />
        </MapContainer>

        <div
          onClick={() => history.push('/countrypage')}
          className="select-country"
        >
          <h2 className="select-country">{countrySelected + '!'}</h2>
        </div>

        <div className="buttons">
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

          <Link to="/countrypage" className="view-button">
            <button className="view-button">View Their Food!</button>
          </Link>
        </div>
      </div>

      <Navbar />
    </div>
  );
}
