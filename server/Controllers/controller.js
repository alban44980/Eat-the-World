const db = require('../Models/index');
const axios = require('axios');
const env = require('../config');

exports.getCountryData = async (req, res) => {
  try {
    const countries = await db.Country.findAll();

    for (let country of countries) {
      country.properties = await JSON.parse(country.properties);
      country.geometry = await JSON.parse(country.geometry);
    }
<<<<<<< HEAD
    res.send(countries)
  }
  catch(err) {}
}






=======
    // console.log(countries)
    res.send(countries);
  } catch (err) {}
};
>>>>>>> alban-dev

exports.getFoodImage = async (req, res) => {
  try {
    const dish = req.body.dish;
    const imgUrl = await axios
      .get(
        'http://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageimages&format=json&piprop=original&titles=' +
          dish
      )
      .catch((error) => {
        console.log(error);
      });
    const imgObj = imgUrl.data.query.pages;
    const imgLink = Object.values(imgObj)[0].original.source;

    res.status(200).send({ imgLink });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getFoodInfo = async (req, res) => {
  try {
    const dish = req.body.dish;
    const imgUrl = await axios
      .get(
        'http://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=' +
          dish
      )
      .catch((error) => {
        console.log(error);
      });
    const imgObj = imgUrl.data.query.pages;
    const imgLink = Object.values(imgObj)[0].extract;

    res.status(200).send({ imgLink });
    res.end();
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getRestaurants = async (req, res) => {
  try {
    const lat = 41.38;
    const lng = 2.16;
    const selectedCuisine = req.body.cuisine.replace((/\s/g, '+'));
    const myApi = env.APP_GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&types=restaurant&radius=2000&keyword=${selectedCuisine},&key=${myApi}`;
    const restaurantData = await axios.get(url).catch((error) => {
      console.log(error);
    });
    const restaurants = restaurantData.data.results;
    res.status(200).send({ restaurants });
    res.end();
  } catch (error) {
    res.status(500).send(error);
  }
};
