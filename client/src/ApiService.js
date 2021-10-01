const BASE_URL = 'http://localhost:3002';

const apiService = {};

// apiService.getDishImage = () => {

// };

apiService.getDishInfo = (dish) => {
  return fetch('http://localhost:3002/info', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ dish: dish }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

export default apiService;
