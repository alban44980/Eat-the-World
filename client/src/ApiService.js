// const BASE_URL = 'http://localhost:3002';

const apiService = {};

apiService.getDishImage = (dish) => {
  return fetch('http://localhost:3002/image', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ dish: dish }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};

apiService.getDishInfo = (dishSelected) => {
  return (
    fetch('http://localhost:3002/info', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ dish: dishSelected }),
    })
      .then((res) => res.json())
      // .then((data) => console.log(data))
      .catch((err) => console.log(err))
  );
};

export default apiService;

//commited Alban-testing
// git checkout commitId

//THIS HAS BEEN SAVED!!!
