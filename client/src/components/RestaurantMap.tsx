import React, { useState, useEffect } from 'react';
import {
  GoogleMap,
  useLoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import './RestaurantMap.css';
import { ContactSupportOutlined } from '@material-ui/icons';

declare global {
  interface Window {
    google: any;
  }
}

const libraries: (
  | 'places'
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'visualization'
)[] = ['places'];

const mapContainerStyle = {
  width: '80vw',
  height: '30vh',
  radius: '1rem',
};

interface Restaurant {
  geometry: {
    location: {
      lng: number;
      lat: number;
    };
  };
  name: string;
}
export default function RestaurantMap({
  dishSelected,
}: {
  dishSelected: string;
}) {
  const [currentPosition, setCurrentPosition] = useState({});
  const [restaurantSuggestions, SetRestaurantSuggestions] = useState<
    Restaurant[]
  >([]);
  const [selected, setSelected] = useState<Restaurant | null>(null);

  //THIS IS SETTING THE SET CURRENT POSITION TO THE ACTUAL USE POSITION
  const success = (position: {
    coords: { latitude: number; longitude: number };
  }) => {
    const newPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(newPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const [lat, setLat] = useState<number>(41.38);
  const [lng, setLng] = useState<number>(2.16);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLng(position.coords.longitude);
    });
  };

  useEffect(() => {
    getRestaurants();
  }, []);

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

  //help request for below
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
    libraries,
  });

  if (loadError) return <p>Error loading maps</p>;
  if (!isLoaded) return <p>Loading maps</p>;

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={12}
        center={{ lat, lng }}
      >
        <Marker position={{ lat, lng }} />
        {restaurantSuggestions.length > 0 &&
          restaurantSuggestions.slice(0, 6).map((obj) => {
            const markerLat = obj.geometry.location.lat;
            const markerLng = obj.geometry.location.lng;

            return (
              <Marker
                position={{ lat: markerLat, lng: markerLng }}
                icon={{
                  url: 'https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-eat-8.png&r=0&g=0&b=0',
                  scaledSize: new window.google.maps.Size(25, 25),
                  origin: new window.google.maps.Point(0, 0),
                }}
                onClick={() => {
                  setSelected(obj);
                }}
              />
            );
          })}

        {selected ? (
          <InfoWindow
            position={{
              lat: selected.geometry.location.lat,
              lng: selected.geometry.location.lng,
            }}
          >
            <div>
              <h5>{selected.name}</h5>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>
    </div>
  );
}
