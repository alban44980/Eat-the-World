import './App.css';
import React, { useState }  from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import WorldMap from './components/WorldMap.js';
import CountryPage from './components/CountryPage.js';
import Dish from './components/Dish.js';
import Favorites from './components/Favorites';
import TopBar from './components/TopBar/TopBar';

function App() {
  const [countrySelected, SetSelectedCountry] = useState('Select or Search');
  const [dishSelected, SetSelectedDish] = useState('');
  const [favorites, SetFavorites] = useState(['Fish and chips', 'Pizza']);

  function updateFavorites (fav) {
    if (favorites.includes(fav)) {
        SetFavorites(favorites.filter(el => el !== fav))
    } else {
        SetFavorites([...favorites, fav]);
    }
}

  return (
    <Router>
      <TopBar></TopBar>
      
      <div className="page-container">
        
        <Switch>
          <Route exact path="/" >
            <WorldMap 
              countrySelected={countrySelected} 
              SetSelectedCountry={SetSelectedCountry} 
            />
          </Route>
          <Route path="/countrypage" >
            <CountryPage 
              countrySelected={countrySelected} 
              SetSelectedDish={SetSelectedDish} 
              SetSelectedCountry={SetSelectedCountry} 
              favorites={favorites} 
              SetFavorites={SetFavorites} 
              updateFavorites={updateFavorites}
            />
          </Route>
          <Route path="/dishinfo" >
            <Dish 
              dishSelected={dishSelected} 
              SetSelectedDish={SetSelectedDish} 
              favorites={favorites} 
              SetFavorites={SetFavorites} 
              updateFavorites={updateFavorites} 
              countrySelected={countrySelected}
            />
          </Route>
          <Route path="/favorites">
            <Favorites 
              favorites={favorites} 
              SetFavorites={SetFavorites} 
              updateFavorites={updateFavorites} 
              SetSelectedDish={SetSelectedDish} 
              />
            </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
