const router = new require('express').Router();
const { getFoodImage, getFoodInfo, getRestaurants, getCountryData } = require('../Controllers/controller');

router.post('/image', getFoodImage);
router.post('/info', getFoodInfo);
router.post('/restaurants', getRestaurants);
router.get('/countries', getCountryData);

module.exports = router;