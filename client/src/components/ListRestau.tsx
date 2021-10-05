import React, { useState, useEffect } from 'react';
//@ts-ignore
import Stars from 'simple-rating-stars';
import './ListRestau.css';

function ListRestau({ dishSelected }: { dishSelected: string }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    getLocation();
    getRestaurants();
  }, []);

  interface Restaurant {
    geometry: {
      location: {
        lng: number;
        lat: number;
      };
    };
    name: string;
    rating: number;
  }

  const [currentPosition, setCurrentPosition] = useState({});
  const [restaurantSuggestions, SetRestaurantSuggestions] = useState<
    Restaurant[]
  >([]);
  const [selected, setSelected] = useState<Restaurant | null>(null);
  const [lat, setLat] = useState<number>(41.38);
  const [lng, setLng] = useState<number>(2.16);

  function getRestaurants() {
    fetch('http://localhost:3002/restaurants', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ cuisine: dishSelected }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        SetRestaurantSuggestions(data.restaurants);
      })
      .catch((err) => console.log(err));
  }

  const success = (position: {
    coords: { latitude: number; longitude: number };
  }) => {
    const newPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(newPosition);
  };

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  };

  function getDistance(lat1: number, lat2: number, lon1: number, lon2: number) {
    // The math module contains a function
    // named toRadians which converts from
    // degrees to radians.
    lon1 = (lon1 * Math.PI) / 180;
    lon2 = (lon2 * Math.PI) / 180;
    lat1 = (lat1 * Math.PI) / 180;
    lat2 = (lat2 * Math.PI) / 180;

    // Haversine formula
    let dlon = lon2 - lon1;
    let dlat = lat2 - lat1;
    let a =
      Math.pow(Math.sin(dlat / 2), 2) +
      Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2), 2);

    let c = 2 * Math.asin(Math.sqrt(a));

    // Radius of earth in kilometers. Use 3956
    // for miles
    let r = 6371;

    // calculate the result
    return (c * r).toFixed(2);
  }

  return (
    <div className="restaurant-container">
      {restaurantSuggestions.map((suggestion) => {
        const restauLat = suggestion.geometry.location.lat;
        const restauLong = suggestion.geometry.location.lng;
        const distance = getDistance(restauLat, lat, restauLong, lng);
        return (
          <div className="restaurant-item">
            <div className="restau-top">
              <p>{suggestion.name}</p>
              <p className="restau-distance">{distance} km</p>
            </div>
            <div className="restau-bottom">
              <Stars
                stars={Math.round(suggestion.rating)}
                outOf={5}
                full={'#d00'}
                empty={'#E1F1FF'}
                stroke={'#369'}
              />
              <p className="restau-rating">{suggestion.rating}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListRestau;
