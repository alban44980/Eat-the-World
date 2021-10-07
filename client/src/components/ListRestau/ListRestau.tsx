import { ContactSupportOutlined } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
//@ts-ignore
import Stars from 'simple-rating-stars';
import './ListRestau.css';
import { getDistance } from './ListRestauFunctions';
import { getRestaurants, Restaurant } from '../../ApiService';

function ListRestau({ dishSelected }: { dishSelected: string }) {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
    getLocation();
    getRestaurants(dishSelected).then((data) => {
      console.log(data.restaurants);
      SetRestaurantSuggestions(data.restaurants);
    });
  }, []);

  const [currentPosition, setCurrentPosition] = useState({});
  const [restaurantSuggestions, SetRestaurantSuggestions] = useState<
    Restaurant[]
  >([]);
  const [selected, setSelected] = useState<Restaurant | null>(null);
  const [lat, setLat] = useState<number>(41.38);
  const [lng, setLng] = useState<number>(2.16);

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

  function filterByDistance() {
    console.log('filterbydistance function running');
    SetRestaurantSuggestions((previous) =>
      [...previous].sort((a, b) => {
        const dist1 = getDistance(
          a.geometry.location.lat,
          lat,
          a.geometry.location.lng,
          lng
        );
        const dist2 = getDistance(
          b.geometry.location.lat,
          lat,
          b.geometry.location.lng,
          lng
        );
        return dist1 - dist2;
      })
    );
  }

  function filterByRating() {
    console.log('filterbyrating function running');
    SetRestaurantSuggestions((previous) => {
      console.log(previous);
      const newState = [...previous].sort((a, b) => b.rating - a.rating);
      console.log('new state ==> ', newState);
      return newState;
    });
  }

  return (
    <div className="restaurant-container">
      <div className="btn-container">
        <button onClick={() => filterByDistance()}>By distance</button>
        <button onClick={() => filterByRating()}>By ratings</button>
      </div>

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
