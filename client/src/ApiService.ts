// const BASE_URL = 'http://localhost:3002';

import { ContactSupportOutlined } from '@material-ui/icons';

// const apiService = {};

const BASE_URL = process.env.REACT_APP_BASE_URL;
console.log('BASE URL HELLO ', process.env.REACT_APP_BASE_URL);
//create type for ImgLink

const getCountryData = () => {
  return (
    fetch(`${BASE_URL}/countries`, {
      method: 'GET',
    })
      .then((res) => res.json())
      // .then((data) => console.log('FROM API SERVICE: ', data))
      .catch((err) => console.log(err))
  );
};

export class DishInfo {
  'imgLink': string;
}

const getDishImage = (dish: string): Promise<DishInfo> => {
  return fetch(`${BASE_URL}/image`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ dish: dish }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const getDishInfo = (dishSelected: string): Promise<DishInfo> => {
  return fetch(`${BASE_URL}/info`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ dish: dishSelected }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export { getDishImage, getDishInfo, getCountryData };
