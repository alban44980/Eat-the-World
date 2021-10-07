import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorldMap from './components/WorldMap/WorldMap';
import CountryPage from './components/CountryPage/CountryPage';
import Dish from './components/Dish/Dish';
import Favorites from './components/Favorites/Favorites';
import Navbar from './components/NavBar/Navbar';

function App() {
  const [countrySelected, SetSelectedCountry] = useState<string>('');
  const [dishSelected, SetSelectedDish] = useState<string>('');
  const [favorites, SetFavorites] = useState<string[]>([
    'Fish and chips',
    'Pizza',
  ]);

  function updateFavorites(fav: string): void {
    if (favorites.includes(fav)) {
      SetFavorites(favorites.filter((el) => el !== fav));
    } else {
      SetFavorites([...favorites, fav]);
    }
  }

  return (
    <Router>
      <div className="fullpage">
        <div className="image-container" />

        <Switch>
          <Route exact path="/">
            <WorldMap
              countrySelected={countrySelected}
              SetSelectedCountry={SetSelectedCountry}
            />
          </Route>

          <Route path="/countrypage">
            <CountryPage
              countrySelected={countrySelected}
              SetSelectedDish={SetSelectedDish}
              favorites={favorites}
              updateFavorites={updateFavorites}
            />
          </Route>

          <Route path="/dishinfo">
            <Dish
              dishSelected={dishSelected}
              favorites={favorites}
              updateFavorites={updateFavorites}
            />
          </Route>

          <Route path="/favorites">
            <Favorites
              favorites={favorites}
              updateFavorites={updateFavorites}
              SetSelectedDish={SetSelectedDish}
            />
          </Route>
        </Switch>

        <Navbar />
      </div>
    </Router>
  );
}

export default App;
