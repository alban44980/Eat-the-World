// const BASE_URL = 'http://localhost:3002';

// const apiService = {};

//create type for ImgLink

const getCountryData = () => {
  return (
    fetch('http://localhost:3002/countries', {
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
  return fetch('http://localhost:3002/image', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ dish: dish }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

const getDishInfo = (dishSelected: string): Promise<DishInfo> => {
  return fetch('http://localhost:3002/info', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ dish: dishSelected }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export { getDishImage, getDishInfo, getCountryData };
