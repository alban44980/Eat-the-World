
const axios = require('axios');
const env = require('./config');

// post request that does an api request for the dish img url
exports.getFoodImage = async (req, res) => {
  try {
    // console.log("ignore:",req.body.dish)
    const dish = req.body.dish;  
    const imgUrl = await axios.get("http://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageimages&format=json&piprop=original&titles=" + dish).catch(error => {console.log(error);})
    
    const imgObj = imgUrl.data.query.pages;
    // console.log("imgObj-->",imgObj);
    // console.log("type", typeof imgObj);
    // console.log(imgObj["1381818"]);
    const imgLink = Object.values(imgObj)[0].original.source;

    // for (let key in imgObj) {
    //     console.log("objKey",obj[key]);
    //     let innerObj = obj[key];
    //     let imgLink = innerObj.original.source;
    //     console.log("LINK",imgLink);
    // }

    // console.log("IMGLINK:",imgLink);
    // const theDataIWant = "wooo";
    res.status(200).send({ imgLink });
    res.end();
  } catch (error) {
    res.status(500).send(error); 
  }
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// post request that does an api request for the dish img url
exports.getFoodInfo = async (req, res) => {
    try {
      // console.log("ignore:",req.body.dish)
      const dish = req.body.dish;  
      const imgUrl = await axios.get("http://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=" + dish).catch(error => {console.log(error);})
      
      const imgObj = imgUrl.data.query.pages;
        // console.log("imgObj-->",imgObj);
        // console.log("type", typeof imgObj);
        // console.log(imgObj["1381818"]);
        const imgLink = Object.values(imgObj)[0].extract;
      
      const theDataIWant = "wooo";
      res.status(200).send({ imgLink });
      res.end();
    } catch (error) {
      res.status(500).send(error); 
    }
  };

  /////////////////////////////////////////////////

  exports.getRestaurants = async (req, res) => {
    try {
      // console.log("REQUESTTTT: ", req.body); 
      const lat = 41.38;
      const lng = 2.16;
      const selectedCuisine = req.body.cuisine.replace((/\s/g,'+'));
      const myApi = env.APP_GOOGLE_MAPS_API_KEY;
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&types=restaurant&radius=2000&keyword=${selectedCuisine},&key=${myApi}`;
      const restaurantData = await axios.get(url).catch(error => {console.log(error);})
      // console.log(restaurantData.data);
      const restaurants = restaurantData.data.results;
      res.status(200).send({ restaurants });
      res.end();
    } catch (error) {
      res.status(500).send(error); 
    }
  };

  
