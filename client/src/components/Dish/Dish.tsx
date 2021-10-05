import React, { useState, useEffect } from 'react';
import './Dish.css';
<<<<<<< HEAD:client/src/components/Dish/Dish.tsx
import Navbar from './../NavBar/Navbar';
import RestaurantMap from './../RestaurantMap/RestaurantMap';
import { getDishImage, getDishInfo } from '../../ApiService';
import { DishInfo } from '../../ApiService';
=======
import Navbar from './Navbar';
import RestaurantMap from './RestaurantMap';
import ListRestau from './ListRestau';
import { getDishImage, getDishInfo } from '../ApiService';
import { DishInfo } from '../ApiService';
>>>>>>> alban-dev:client/src/components/Dish.tsx

//interface or type declaration

type Props = {
  dishSelected: string;
  favorites: string[];
  updateFavorites: (fav: string) => void;
};

export default function Dish({
  dishSelected,
  favorites,
  updateFavorites,
}: Props) {
  const [dishImg, setDishImg] = useState<string>('');
  const [dishInfo, setDishInfo] = useState<string>('');

  useEffect(() => {
    async function fetchFunc() {
      const info: DishInfo = await getDishInfo(dishSelected);
      const image: DishInfo = await getDishImage(dishSelected);
      setDishInfo(info.imgLink.slice().replace(/(<([^>]+)>)/gi, ''));
      setDishImg(image.imgLink);
    }
    fetchFunc();
  }, [dishSelected]);

  return (
    <div className="dish-main">
      <h1>{dishSelected}</h1>

      <div className="pic-div">
        <img src={dishImg} alt={dishSelected} />
      </div>

      <div className="info-container">
        <div
          className="add-remove-favorite"
          onClick={() => {
            updateFavorites(dishSelected);
          }}
        >
          Add/Remove from Favorites
          <div className="favorites-selector">
            {favorites.includes(dishSelected) ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z" />
              </svg>
            )}
          </div>
        </div>

        <div className="dish-info">
          <h2>About {dishSelected}</h2>
          <p>{dishInfo}</p>
        </div>

        <div className="recipes">
          <h2>Recipes</h2>

          <a
            className="recipe-link"
            href={`https://www.allrecipes.com/search/results/?search=${dishSelected
              .slice()
              .replace(/\s/g, '+')}`}
          >
            {/* https://www.allrecipes.com/search/results/?search=
            {dishSelected.replace(/\s/g, '+')} */}
            AllRecipies
          </a>
          <a
            className="recipe-link"
            href={`https://foodnetwork.co.uk/search/?q=${dishSelected
              .slice()
              .replace(/\s/g, '+')}`}
          >
            {/* https://foodnetwork.co.uk/search/?q=
            {dishSelected.replace(/\s/g, '+')} */}
            Foodnetwork
          </a>
        </div>

        <div>
          <h2 id="nearby-title">Nearby Restaurants</h2>
          <ListRestau dishSelected={dishSelected} />
        </div>
      </div>

    </div>
  );
}
